import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Bike from '../Book/Book';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Explorebook.css';

const Explorebook = () => {
    const [books, setBike] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])

    console.log(books);
    return (
        <div >
            <Header></Header>
            <h1 className="bike-cl">Books Collections</h1>
            <div className="container">
                <div className="row">
                    {
                        books.map(book => <Book
                            key={book._id}
                            book={book}
                        ></Book>
                        )
                    }
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Explorebook;