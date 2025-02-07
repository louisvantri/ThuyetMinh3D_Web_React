import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';


const LichFilm=(props)=>{
    let day=new Date();
    day=day.getDay();
    const [lichThu2,setLichthu2]=useState({backgroundColor:"",color:""});
    const [filmthu2,setFilmthu2]=useState({display:"none"})
    const [lichThu3,setLichthu3]=useState({});
    const [filmthu3,setFilmthu3]=useState({display:"none"})
    const [lichThu4,setLichthu4]=useState({});
    const [filmthu4,setFilmthu4]=useState({display:"none"})
    const [lichThu5,setLichthu5]=useState({});
    const [filmthu5,setFilmthu5]=useState({display:"none"})
    const [lichThu6,setLichthu6]=useState({});
    const [filmthu6,setFilmthu6]=useState({display:"none"})
    const [lichThu7,setLichthu7]=useState({});
    const [filmthu7,setFilmthu7]=useState({display:"none"})
    const [lichThu8,setLichthu8]=useState({});
    const [filmthu8,setFilmthu8]=useState({display:"none"})
    const [anLich,setAnLich]=useState({display:"block"});
    useEffect(()=>{
        if(day==0){
            setLichthu8({backgroundColor:"rgb(13, 110, 253)",color:"white"});
            setFilmthu8({display:"flex"});
        }
        else if(day==1){
            setLichthu2({backgroundColor:"rgb(13, 110, 253)",color:"white"});
            setFilmthu2({display:"flex"});
        }
        else if(day==2){
            setLichthu3({backgroundColor:"rgb(13, 110, 253)",color:"white"});
            setFilmthu3({display:"flex"});
        }
        else if(day==3){
            setLichthu4({backgroundColor:"rgb(13, 110, 253)",color:"white"});
            setFilmthu4({display:"flex"});
        }
        else if(day==4){
            setLichthu5({backgroundColor:"rgb(13, 110, 253)",color:"white"});
            setFilmthu5({display:"flex"});
        }
        else if(day==5){
            setLichthu6({backgroundColor:"rgb(13, 110, 253)",color:"white"});
            setFilmthu6({display:"flex"});
        }
        else if(day==6){
            setLichthu7({backgroundColor:"rgb(13, 110, 253)",color:"white"});
            setFilmthu7({display:"flex"});
        }
    },[]);

    const handel_ViewLich=(event)=>{
        if(event.target.textContent=="Thứ 2"){
            if(lichThu2.backgroundColor=="rgb(13, 110, 253)"){
                setLichthu2({backgroundColor:"#ccc",color:"black"});
                setFilmthu2({display:"none"});
                setAnLich({display:"none"});
            }
            else{
                setLichthu2({backgroundColor:"rgb(13, 110, 253)",color:"white"});
                setFilmthu2({display:"flex"});
                setLichthu3({backgroundColor:"",color:""});
                setFilmthu3({display:"none"});
                setLichthu4({backgroundColor:"",color:""});
                setFilmthu4({display:"none"});
                setLichthu5({backgroundColor:"",color:""});
                setFilmthu5({display:"none"});
                setLichthu6({backgroundColor:"",color:""});
                setFilmthu6({display:"none"});
                setLichthu7({backgroundColor:"",color:""});
                setFilmthu7({display:"none"});
                setLichthu8({backgroundColor:"",color:""});
                setFilmthu8({display:"none"});
                setAnLich({display:"block"});
            }
        }
        if(event.target.textContent=="Thứ 3"){
            if(lichThu3.backgroundColor=="rgb(13, 110, 253)"){
                setLichthu3({backgroundColor:"",color:""});
                setFilmthu3({display:"none"});
                setAnLich({display:"none"});
            }
            else{
                setLichthu3({backgroundColor:"rgb(13, 110, 253)",color:"white"});
                setFilmthu3({display:"flex"});
                setLichthu2({backgroundColor:"",color:""});
                setFilmthu2({display:"none"});
                setLichthu4({backgroundColor:"",color:""});
                setFilmthu4({display:"none"});
                setLichthu5({backgroundColor:"",color:""});
                setFilmthu5({display:"none"});
                setLichthu6({backgroundColor:"",color:""});
                setFilmthu6({display:"none"});
                setLichthu7({backgroundColor:"",color:""});
                setFilmthu7({display:"none"});
                setLichthu8({backgroundColor:"",color:""});
                setFilmthu8({display:"none"});
                setAnLich({display:"block"});
            }
        }
        if(event.target.textContent=="Thứ 4"){
            if(lichThu4.backgroundColor=="rgb(13, 110, 253)"){
                setLichthu4({backgroundColor:"",color:""});
                setFilmthu4({display:"none"});
                setAnLich({display:"none"});
            }
            else{
                setLichthu4({backgroundColor:"rgb(13, 110, 253)",color:"white"});
                setFilmthu4({display:"flex"});
                setLichthu3({backgroundColor:"",color:""});
                setFilmthu3({display:"none"});
                setLichthu2({backgroundColor:"",color:""});
                setFilmthu2({display:"none"});
                setLichthu5({backgroundColor:"",color:""});
                setFilmthu5({display:"none"});
                setLichthu6({backgroundColor:"",color:""});
                setFilmthu6({display:"none"});
                setLichthu7({backgroundColor:"",color:""});
                setFilmthu7({display:"none"});
                setLichthu8({backgroundColor:"",color:""});
                setFilmthu8({display:"none"});
                setAnLich({display:"block"});
            }
        }
        if(event.target.textContent=="Thứ 5"){
            if(lichThu5.backgroundColor=="rgb(13, 110, 253)"){
                setLichthu5({backgroundColor:"",color:""});
                setFilmthu5({display:"none"});
                setAnLich({display:"none"});
            }
            else{
                setLichthu5({backgroundColor:"rgb(13, 110, 253)",color:"white"});
                setFilmthu5({display:"flex"});
                setLichthu3({backgroundColor:"",color:""});
                setFilmthu3({display:"none"});
                setLichthu4({backgroundColor:"",color:""});
                setFilmthu4({display:"none"});
                setLichthu2({backgroundColor:"",color:""});
                setFilmthu2({display:"none"});
                setLichthu6({backgroundColor:"",color:""});
                setFilmthu6({display:"none"});
                setLichthu7({backgroundColor:"",color:""});
                setFilmthu7({display:"none"});
                setLichthu8({backgroundColor:"",color:""});
                setFilmthu8({display:"none"});
                setAnLich({display:"block"});
            }
        }
        if(event.target.textContent=="Thứ 6"){
            if(lichThu6.backgroundColor=="rgb(13, 110, 253)"){
                setLichthu6({backgroundColor:"",color:""});
                setFilmthu6({display:"none"});
                setAnLich({display:"none"});
            }
            else{
                setLichthu6({backgroundColor:"rgb(13, 110, 253)",color:"white"});
                setFilmthu6({display:"flex"});
                setLichthu3({backgroundColor:"",color:""});
                setFilmthu3({display:"none"});
                setLichthu4({backgroundColor:"",color:""});
                setFilmthu4({display:"none"});
                setLichthu5({backgroundColor:"",color:""});
                setFilmthu5({display:"none"});
                setLichthu2({backgroundColor:"",color:""});
                setFilmthu2({display:"none"});
                setLichthu7({backgroundColor:"",color:""});
                setFilmthu7({display:"none"});
                setLichthu8({backgroundColor:"",color:""});
                setFilmthu8({display:"none"});
                setAnLich({display:"block"});
            }
        }
        if(event.target.textContent=="Thứ 7"){
            if(lichThu7.backgroundColor=="rgb(13, 110, 253)"){
                setLichthu7({backgroundColor:"",color:""});
                setFilmthu7({display:"none"});
                setAnLich({display:"none"});
            }
            else{
                setLichthu7({backgroundColor:"rgb(13, 110, 253)",color:"white"});
                setFilmthu7({display:"flex"});
                setLichthu3({backgroundColor:"",color:""});
                setFilmthu3({display:"none"});
                setLichthu4({backgroundColor:"",color:""});
                setFilmthu4({display:"none"});
                setLichthu5({backgroundColor:"",color:""});
                setFilmthu5({display:"none"});
                setLichthu6({backgroundColor:"",color:""});
                setFilmthu6({display:"none"});
                setLichthu2({backgroundColor:"",color:""});
                setFilmthu2({display:"none"});
                setLichthu8({backgroundColor:"",color:""});
                setFilmthu8({display:"none"});
                setAnLich({display:"block"});
            }
        }
        if(event.target.textContent=="Chủ Nhật"){
            if(lichThu8.backgroundColor=="rgb(13, 110, 253)"){
                setLichthu8({backgroundColor:"",color:""});
                setFilmthu8({display:"none"});
                setAnLich({display:"none"});
            }
            else{
                setLichthu8({backgroundColor:"rgb(13, 110, 253)",color:"white"});
                setFilmthu8({display:"flex"});
                setLichthu3({backgroundColor:"",color:""});
                setFilmthu3({display:"none"});
                setLichthu4({backgroundColor:"",color:""});
                setFilmthu4({display:"none"});
                setLichthu5({backgroundColor:"",color:""});
                setFilmthu5({display:"none"});
                setLichthu6({backgroundColor:"",color:""});
                setFilmthu6({display:"none"});
                setLichthu7({backgroundColor:"",color:""});
                setFilmthu7({display:"none"});
                setLichthu2({backgroundColor:"",color:""});
                setFilmthu2({display:"none"});
                setAnLich({display:"block"});
            }
        }
    }   
    return(
        <>
            <div className='lich_film'>
                <h3>Lịch Chiếu Phim</h3>
            </div>
            <div className="lich_film_thu">
                <div className="lich_film_thu_child" style={lichThu2} onClick={handel_ViewLich}>Thứ 2</div>
                <div className="lich_film_thu_child" style={lichThu3} onClick={handel_ViewLich}>Thứ 3</div>
                <div className="lich_film_thu_child" style={lichThu4} onClick={handel_ViewLich}>Thứ 4</div>
                <div className="lich_film_thu_child" style={lichThu5} onClick={handel_ViewLich}>Thứ 5</div>
                <div className="lich_film_thu_child" style={lichThu6} onClick={handel_ViewLich}>Thứ 6</div>
                <div className="lich_film_thu_child" style={lichThu7} onClick={handel_ViewLich}>Thứ 7</div>
                <div className="lich_film_thu_child" style={lichThu8} onClick={handel_ViewLich}>Chủ Nhật</div>
            </div>
            <div className="films_lich" style={anLich}>
                <div className="lich_film_thu_child_" style={filmthu2}>
                            {
                                props.movies.map(item=>{
                                    if(item.lich_chieu.includes("thu 2")){
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
                    <div className="lich_film_thu_child_" style={filmthu3}>
                            {
                                props.movies.map(item=>{
                                    if(item.lich_chieu.includes("thu 3")){
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
                    <div className="lich_film_thu_child_" style={filmthu4}>
                            {
                                props.movies.map(item=>{
                                    if(item.lich_chieu.includes("thu 4")){
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
                    <div className="lich_film_thu_child_" style={filmthu5}>
                            {
                                props.movies.map(item=>{
                                    if(item.lich_chieu.includes("thu 5")){
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
                    <div className="lich_film_thu_child_" style={filmthu6}>
                            {
                                props.movies.map(item=>{
                                    if(item.lich_chieu.includes("thu 6")){
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
                    <div className="lich_film_thu_child_" style={filmthu7}>
                            {
                                props.movies.map(item=>{
                                    if(item.lich_chieu.includes("thu 7")){
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
                    <div className="lich_film_thu_child_" style={filmthu8}>
                            {
                                props.movies.map(item=>{
                                    if(item.lich_chieu.includes("chu nhat")){
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
        </>
    )
};

export default LichFilm;