import React from 'react'
import './index.css';

const Footer = () => {
    return (
        <>
            <div className="container-fluid p-3 py-2 mt-2 footer justify-content-center d-flex">
                <div className="container row">
                    <div className="col-12 p-2">
                        <h6>Questions? Call 977-972-9032</h6>
                    </div>
                    <div className="col-md-3 text-left">
                        <p>Account</p>
                        <ul>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Security</a></li>
                            <li><a href="">FAQ</a></li>
                            <li><a href="">Speed Test</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-left">
                        <p>Genres</p>
                        <ul>
                            <li><a href="#action">Action</a></li>
                            <li><a href="#comedy">Comedy</a></li>
                            <li><a href="#horror">Horror</a></li>
                            <li><a href="#romance">Romance</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-left">
                        <p>Premium</p>
                        <ul>
                            <li><a href="#trending">Trending Now</a></li>
                            <li><a href="#original">Originals</a></li>
                            <li><a href="#topRated">Top Rated</a></li>
                            <li><a href="#documentaries">Documentaries</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-left">
                        <p>Contact</p>
                        <ul>
                            <li><a href="">Help</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Media Centre</a></li>
                        </ul>
                    </div>
                    <div className="col-12 text-center p-0 m-0 mt-2">
                        © Copyright Netflyx | Made with Love <img src="https://img.icons8.com/ios/16/888888/like--v1.png" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
