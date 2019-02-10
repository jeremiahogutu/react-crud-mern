import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    delete = () => {
        axios.get('http://localhost:4000/post/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    };

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.title}
                </td>
                <td>
                    {this.props.obj.summary}
                </td>
                <td>
                    {this.props.obj.description}
                </td>
                <td>
                    <Link to={'/edit/'+this.props.obj._id} className='btn btn-primary'>Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        )
    }
}

export default TableRow;