import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";

const HomeMovie = (props) => {
    
    return (
        <div>
            <div className='moi_cap_nhat'>
                <h3>Phim Mới Cập Nhật</h3>
            </div>
            <div className="movies">
                {
                    props.movies.map(item=>(
                        <Link to={`/thong-tin/${item.name}/${item.id}`} className="movie--item">
                            <div className="movie--item__episode">{item.videos[item.videos.length-1]?.name}/{item.numberEnd}</div>
                            <img className="movie--item__avatar" alt="movie--item__avatar" src={item.avatar} />
                            <p className="movie--item__title">{item.name}</p>
                            <div className="dimensional">{item.dimensional}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default HomeMovie;
