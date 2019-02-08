import React, { Component } from 'react';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            summary: '',
            description: ''
        }
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
        console.log(`The values are ${this.state.title}, ${this.state.summary} and ${this.state.description}`)
        this.setState({
            title: '',
            summary: '',
            description: ''
        })
    };

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>New Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Summary: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.summary}
                            onChange={this.onChangeSummary}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea
                             cols="30"
                             rows="10"
                             className="form-control"
                             value={this.state.description}
                             onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}