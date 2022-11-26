import React, { useState } from 'react';
import 'swiper/swiper-bundle.css';
import './index.css';
import $ from 'jquery';


let starter = "https://image.tmdb.org/t/p/w500";
let prevlink = "https://api.themoviedb.org/3/movie/";
let afterLink = "/watch/providers?api_key=db4c9ec98a7bf86f329f880a0969765e";

const Card = (props) => {
    const [link, updateLink] = useState("");
    function getLink(id) {

        $.get(`${prevlink}${id}${afterLink}`, data => {
            if (Object.values(data.results)[0] !== undefined) {
                updateLink((Object.values(data.results)[0]).link);
            }
            else
                updateLink("#");
        });
    }

    return (
        <>
            <div className="swiper-slide" ><img src={starter + props.img_path} alt="Poster" />
                <label className="add-fav">
                    <input type="checkbox" className="like" />
                    <i className="icon-heart">
                    </i>
                </label>
                <div className="movieDetails text-center">
                    {getLink(props.id)}
                    <a href={link} target="_blank" rel="noreferrer"><img src="https://img.icons8.com/ios-filled/50/ffffff/circled-play.png" alt="" /></a>
                    <h5>{props.title}</h5>

                </div>
            </div>

        </>
    )

}



export default Card;

