import React, { useEffect, useState } from 'react';
import './Home.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Reviews from '../Reviews/Reviews';
import Book from '../Book/Book';

const Home = () => {

    const [Books, setBike] = useState([]);
    useEffect(() => {
        fetch('./tools.JSON')
            .then(res => res.json())
            .then(data => setBike(data))

    }, [])

    const book = Books.slice(1, 5);

    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <h1 className="home-serv">Latest Books</h1>
            <div className="container ">
                <div className="row g-4">
                    {
                        book.map(book => <Book
                            key={book._id}
                            book={book}
                        ></Book>
                        )
                    }

                </div>

            </div>


            {/* For customer reviews */}
            <div className="cs-reviews">
                <h1>Customer Reviews</h1>
                <Reviews></Reviews>
            </div>

            {/* Subscribe secsion */}
            <div className="subscrib-m">
                <h1>Subscribe To Our 'Ed-Tech' For Latest Update</h1>
                <div>
                    <div className="dis-f">
                        <input type="text" className="form-control" placeholder="Enter your Email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary color" type="button" id="button-addon2">Subscribe</button>
                    </div>
                </div>
            </div>


            <Footer></Footer>

        </div>
    );
};

export default Home;