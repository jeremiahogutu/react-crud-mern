import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            summary: '',
            description: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/post/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    summary: response.data.summary,
                    description: response.data.description
                })
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    onChangeSummary = (e) => {
        this.setState({
            summary: e.target.value
        })
    };

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const obj = {
            title: this.state.title,
            summary: this.state.summary,
            description: this.state.description
        };
        axios.post('http://localhost:4000/post/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        this.props.history.push('/index')
    };

    render() {
        return (
            <div style={{ marginTop: 10 }}>
               <h3 align="center">Update Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Title: </label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Summary: </label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.summary}
                            onChange={this.onChangeSummary}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='submit'
                            value='Update Post'
                            className='btn btn-primary'
                        />
                    </div>
                </form>
            </div>
        )
    }
}