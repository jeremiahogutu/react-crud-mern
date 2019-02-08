import React, { Component } from 'react';

export default class Create extends Component{
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>New Post</h3>
                <form>
                    <div className="form-group">
                        <label>Title: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Summary: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <textarea name="" id="" cols="30" rows="10" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}