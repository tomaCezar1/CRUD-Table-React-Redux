import React from 'react';
import '../App.css'
import {connect, useSelector} from "react-redux";

const BookDetails = (props) => {

        const {match : {params}} = props;
        console.log(params);

        let list = useSelector(state => state.list);
        let book = list.filter((book) => {
            return book.id === parseInt(params.id)
        })
        console.log(book)

        return (
            <div className='books'>
                <table>
                    <tbody style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                    {book.map(row => (
                        <tr>
                            <td>{row.title}</td>
                            <td>{row.author}</td>
                            <td>{row.price}</td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        );
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
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val: 10}),
        onSubtract: () => dispatch({type: 'SUBTRACT', val: 15}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch({type: 'Delete_RESULT'})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);