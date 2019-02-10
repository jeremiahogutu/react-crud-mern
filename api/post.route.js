const express = require('express');
const postRoutes = express.Router();

let Post = require('./post.model');

// Add post route
postRoutes.route('/add').post(function (req, res) {
    let post = new Post(req.body);
    post.save()
        .then(post => {
            res.status(200).json({'post': 'post has been added successfully'});
        })
        .catch(err => {
            res.status(400).send('Unable to save to database')
        })
});

// get post route
postRoutes.route('/').get(function (req, res) {
    Post.find(function (err, post) {
        if (err) {
            console.log(err)
        } else {
            res.json(post)
        }
    })
});

// get edit route
postRoutes.route('/edit/id').get(function (req, res) {
    let id = req.params.id;
    console.log(id);
    Post.findById(id, function (err, post) {
        res.json(post)
    })
});

// get update route
postRoutes.route('/update/:id').post(function (req, res) {
    Post.findById(req.params.id, function (err, post) {
        if (!post) {
            res.status(400).send('data not found')
        } else {
            post.title = req.body.title;
            post.summary = req.body.summary;
            post.description = req.body.description;

            post.save().then(post => {
                res.json('Update complete')
            })
                .catch(err => {
                    res.status(400).send("unable to update the database")
                })
        }
    })
});

postRoutes.route('/delete/:id').get(function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id}, function (err, post) {
        if (err) res.json(err);
        else res.json('successfully removed')
    })
});

module.exports = postRoutes;