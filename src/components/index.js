import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {post: []}
    }

    componentDidMount() {
        axios.get('http://localhost:4000/post')
            .then(response => {
                this.setState({post: response.data})
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    tabRow() {
        return this.state.post.map(function (object, i) {
            return <TableRow obj={object} key={i}/>
        })
    }

    render() {
        return (
            <div>
                <h3 align="center">Post List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>title</th>
                        <th>summary</th>
                        <th>description</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}