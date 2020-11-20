import React from 'react';
import '../App.css'
import {useSelector} from "react-redux";

const BookDetails = (props) => {

    const {match: {params}} = props;
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
                {book.map((row,index) => (
                    <tr key={index}>
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

export default BookDetails;