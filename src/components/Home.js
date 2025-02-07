import {Routes, Route} from "react-router-dom";
// import OwlCarouselComponent from "./Carosel";
import HomeMovie from "./HomeMovie";
import LichFilm from "./Lichfilm";
import { useEffect } from "react";

const Home=(props)=>{
    useEffect(()=>{
        document.title="Thuyết Minh Phim Hoạt Hình 3D 2D Tiếng Việt";
      },[])
    return(
        <>
            <LichFilm movies={props.movies} />
            <HomeMovie movies={props.movies} movieInfor={props.movieInfor}/>
        </>
    )
}

export default Home;