import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Books extends Component {

    handleChange = ({target: {value}}, index, field) => {
        const {updateInput} = this.props;
        console.log(index, field)
        updateInput(value, index, field)
    }

    handleButton = (e, index) => {
        const {updateEdit} = this.props;
        updateEdit(index)
        console.log(index)
    }

    deleteRow = (e, index) => {
        const {updateOnDelete} = this.props;
        updateOnDelete(index);
    }

    render() {
        console.log(this.props.list)
        const rows = this.props.list.map((row, index) => (
            <tr key={index}>
                <td key={index + 1} title='title'>
                    <input type="text"
                           value={row.title}
                           onChange={this.props.list[index].isClicked ?
                               (e) => this.handleChange(e, index, 'title')
                               : null}
                    />
                </td>

                <td key={index + 2} title='author'>
                    <input type="text"
                           name='author'
                           value={row.author}
                           onChange={this.props.list[index].isClicked ?
                               (e) => this.handleChange(e, index, 'author')
                               : null}
                    />
                </td>

                <td key={index + 3} title='price'>
                    <input type="text"
                           name='price'
                           value={row.price}
                           onChange={this.props.list[index].isClicked ?
                               (e) => this.handleChange(e, index, 'price')
                               : null}
                    />
                </td>
                <td key={index + 4}>
                    <button onClick={(e) => this.handleButton(e, index)}>
                        {this.props.list[index].isClicked ? 'Save' : 'Edit'}</button>

                    <button onClick={(e) => this.deleteRow(e, index)}>
                        Delete
                    </button>
                    <Link to={`/book-details/${index}`}> View</Link>

                </td>
            </tr>
        ));

        return (
            <div className='books'>
                <Link to='/'> Home</Link>
                <h1>Books</h1>
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

//functions
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        updateEdit: (index) => dispatch({type: 'BUTTON', index: index}),
        updateInput: (input, index, field) => dispatch({type: 'EDIT', payload: input, index: index, field: field}),
        updateOnDelete: (index) => dispatch({type: 'DELETE', index: index})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Books);

//Functions
// handleAuthorInput = (e, tabIndex, type) => {
//     if (type === 'author') {
//         this.setState(state => {
//             const list = [...state.list]
//             list[tabIndex].author = e.target.value;
//             return {
//                 list
//             }
//         })
//         console.log(tabIndex)
//     }
//     if (type === 'title') {
//         this.setState(state => {
//             const list = [...state.list]
//             list[tabIndex].title = e.target.value;
//             return {
//                 list
//             }
//         })
//         console.log(tabIndex)
//     }
//     if (type === 'price') {
//         this.setState(state => {
//             const list = [...state.list]
//             list[tabIndex].price = e.target.value;
//             return {
//                 list
//             }
//         })
//         console.log(tabIndex)
//     }
// }
//
// onButtonClick = (index) => {
//     let clicked = this.state.list[index].isClicked;
//     let listCopy = this.state.list;
//     listCopy[index].isClicked = !clicked;
//     let firstLoad = true;
//     this.setState({
//         list: listCopy,
//         firstLoad: firstLoad
//     })
//     console.log(clicked, firstLoad)
// }
// deleteRow = (index) => {
//     alert('Confirm?');
//     const newRows = this.state.list.slice(0, index).concat(this.state.list.slice(index + 1));
//     this.setState({
//         list: newRows
//     })
// }
