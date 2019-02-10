import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableRow extends Component {
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
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        )
    }
}

export default TableRow;