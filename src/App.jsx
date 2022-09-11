import React, { useEffect, useState } from 'react'
import Card from './Card';
import "./index.css";
import requests from './Requests';
import 'swiper/swiper-bundle.css';
import Section2 from './Section2';
import Section1 from './Section1';
import home from './img/home.svg';
import movie from './img/movie.svg';
import movie2 from './img/movie2.svg';
import stream from './img/stream.svg';

const baseURL = "https://api.themoviedb.org/3";
const horrorMovies = () => fetch(baseURL + requests.fetchHorrorMovies).then(res => res.json());
const romanticMovies = () => fetch(baseURL + requests.fetchRomanceMovies).then(res => res.json());
const comedyMovies = () => fetch(baseURL + requests.fetchComedyMovies).then(res => res.json());
const actionMovies = () => fetch(baseURL + requests.fetchActionMovies).then(res => res.json());
const topRatedMovies = () => fetch(baseURL + requests.fetchTopRated).then(res => res.json());
const trendingMovies = () => fetch(baseURL + requests.fetchTrending).then(res => res.json());
const documentariesMovies = () => fetch(baseURL + requests.fetchDocumentaries).then(res => res.json());
const originalMovies = () => fetch(baseURL + requests.fetchNetflixOrigionals).then(res => res.json());

const App = () => {
    const [horror, horrorMov] = useState([]);
    const [romantic, romanticMov] = useState([]);
    const [comedy, comedyMov] = useState([]);
    const [action, actionMov] = useState([]);
    const [topRated, topRatedMov] = useState([]);
    const [trending, trendingMov] = useState([]);
    const [documentaries, documentariesMov] = useState([]);
    const [original, originalMov] = useState([]);


    useEffect(() => {
        horrorMovies().then(data => horrorMov(data.results));
        romanticMovies().then(data => romanticMov(data.results));
        comedyMovies().then(data => comedyMov(data.results));
        actionMovies().then(data => actionMov(data.results));
        topRatedMovies().then(data => topRatedMov(data.results));
        trendingMovies().then(data => trendingMov(data.results));
        documentariesMovies().then(data => documentariesMov(data.results));
        originalMovies().then(data => originalMov(data.results));

    }, []);

    return (

        <>
            <Section2
                src={home}
                heading="Enjoy on your TV"
                description="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            />

            <h1 className="heading" id="trending">Trending</h1>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        trending.map(item => {
                            return (<Card
                                img_path={item.backdrop_path}
                                title={item.title}
                                id={item.id}

                            />)
                        })
                    }
                </div>
            </div>
            <h1 className="heading" id="topRated">Top Rated</h1>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        topRated.map(item => {
                            return (<Card
                                img_path={item.backdrop_path}
                                title={item.title}
                                id={item.id}

                            />)
                        })
                    }
                </div>
            </div>

            <Section1
                src={stream}
                heading="Download your shows to watch offline."
                description="Save your favourites easily and always have something to watch."
            />

            <h1 className="heading" id="original">Originals </h1>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        original.map(item => {
                            return (<Card
                                img_path={item.backdrop_path}
                                title={item.name}
                                id={item.id}

                            />)
                        })
                    }
                </div>
            </div>
            <h1 className="heading" id="action">Action</h1>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        action.map(item => {
                            return (<Card
                                img_path={item.backdrop_path}
                                title={item.title}
                                id={item.id}

                            />)
                        })
                    }
                </div>
            </div>

            <Section2
                src={movie2}
                heading="Watch everywhere."
                description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            />

            <h1 className="heading" id="romance">Romance</h1>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        romantic.map(item => {
                            return (<Card
                                img_path={item.backdrop_path}
                                title={item.title}
                                id={item.id}

                            />)
                        })
                    }
                </div>
            </div>
            <h1 className="heading" id="comedy">Comedy</h1>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        comedy.map(item => {
                            return (<Card
                                img_path={item.backdrop_path}
                                title={item.title}
                                id={item.id}

                            />)
                        })
                    }
                </div>
            </div>


            <Section1
                src={movie}
                heading="Create profiles for children."
                description="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
            />

            <h1 className="heading" id="horror">Horror Movies </h1>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        horror.map(item => {
                            return (<Card
                                img_path={item.backdrop_path}
                                title={item.title}
                                id={item.id}

                            />)
                        })
                    }
                </div>
            </div>
            <h1 className="heading" id="documentaries">Documentaries </h1>
            <div className="swiper-container mySwiper">
                <div className="swiper-wrapper">
                    {
                        documentaries.map(item => {
                            return (<Card
                                img_path={item.backdrop_path}
                                title={item.title}
                                id={item.id}

                            />)
                        })
                    }
                </div>
            </div>

        </>

    )
}

export default App;
