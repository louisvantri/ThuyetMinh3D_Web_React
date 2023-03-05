import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SearchFunction = (props) => {
    const location = useLocation();
    const [search,setSearch]=useState("");
    useEffect(()=>{
        const _path=window.location.pathname;
        let search1=""
        if(_path.includes("tim-kiem"))
        { 
            
            for(let i=10;i<_path.length;i++)
            {
                search1+=_path[i];
            }
        }
        setSearch(decodeURIComponent(search1));
    },[location]);
    return (
        <div>
            <div className='phim_theo_tim_kiem'>
                <h3>Phim Theo Tìm Kiếm: "{search}"</h3>
            </div>
            <div className="movies">
                {
                    props.movies.map(item=>{
                        if(item.categories.toLowerCase().includes(search.toLowerCase())|| item.name.toLowerCase().includes(search.toLowerCase())){
                            return(
                                <Link to={`/thong-tin/${item.name}/${item.id}`} className="movie--item">
                                    <div className="movie--item__episode">{item.videos[item.videos.length-1]?.name}/{item.numberEnd}</div>
                                    <img className="movie--item__avatar" alt="movie--item__avatar" src={item.avatar} />
                                    <h5 className="movie--item__title">{item.name}</h5>
                                    <div className="dimensional">{item.dimensional}</div>
                                </Link>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
};

export default SearchFunction;
