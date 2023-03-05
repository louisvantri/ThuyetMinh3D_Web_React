import { Link, useLocation } from "react-router-dom";
import React, { useState } from 'react';


const Tablinks=(props)=>{
    const location= useLocation()
    let [function__all, setFunction__all]= useState({display: "none"});
    let [function__random, setFunction__random]=useState({display:"none"});
    let [function__category, setFunction__category]=useState({display:"none"});
    
    let [functions__all, setFunctions__all]= useState({backgroundColor:"", color:"var(--bs-body-color)"});
    let [functions__random, setFunctions__random]=useState({backgroundColor:"", color:"var(--bs-body-color)"});
    let [functions__category, setFunctions__category]=useState({backgroundColor:"", color:"var(--bs-body-color)"});
    let [functions__history, setFunctions__history]= useState({backgroundColor:"", color:"var(--bs-body-color)"});
    let [functions__ads, setFunctions__ads]=useState({backgroundColor:"", color:"var(--bs-body-color)"});

    const handelChangeBGR__All=()=>{
        if(functions__all.backgroundColor==="#0d6efd"){
            setFunction__all({display:"none"});
            setFunctions__all({backgroundColor:"", color:"var(--bs-body-color)"});    
        }
        else{
            setFunction__all({display:"flex"});
            setFunctions__all({backgroundColor:"#0d6efd", color:"white"});
            setFunction__random({display:"none"});
            setFunctions__random({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunction__category({display:"none"});
            setFunctions__category({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunctions__history({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunctions__ads({backgroundColor:"", color:"var(--bs-body-color)"});
        }
    }

    const handelChangeBGR__Random=()=>{
        if(functions__random.backgroundColor==="#0d6efd"){
            setFunction__random({display:"none"});
            setFunctions__random({backgroundColor:"", color:"var(--bs-body-color)"});
        }
        else{
            setFunction__random({display:"flex"});
            setFunctions__random({backgroundColor:"#0d6efd", color:"white"});
            setFunction__all({display:"none"});
            setFunctions__all({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunction__category({display:"none"});
            setFunctions__category({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunctions__history({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunctions__ads({backgroundColor:"", color:"var(--bs-body-color)"});
        }
    }

    const handelChangeBGR__Category=()=>{
        if(functions__category.backgroundColor==="#0d6efd"){
            setFunction__category({display:"none"});
            setFunctions__category({backgroundColor:"", color:"var(--bs-body-color)"});
        }
        else{
            setFunction__category({display:"flex"});
            setFunctions__category({backgroundColor:"#0d6efd", color:"white"});
            setFunction__all({display:"none"});
            setFunctions__all({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunction__random({display:"none"});
            setFunctions__random({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunctions__history({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunctions__ads({backgroundColor:"", color:"var(--bs-body-color)"});
        }
    }

    const handelChangeBGR__History=()=>{
        if(functions__history.backgroundColor==="#0d6efd"){
            setFunctions__history({backgroundColor:"", color:"var(--bs-body-color)"});
        }
        else{
            setFunctions__history({backgroundColor:"#0d6efd", color:"white"});
            setFunction__category({display:"none"});
            setFunctions__category({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunction__random({display:"none"});
            setFunctions__random({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunction__all({display:"none"});
            setFunctions__all({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunctions__ads({backgroundColor:"", color:"var(--bs-body-color)"});
        }
    }

    const handelChangeBGR__Ads=()=>{
        if(functions__ads.backgroundColor==="#0d6efd"){
            setFunctions__ads({backgroundColor:"", color:"var(--bs-body-color)"});
        }
        else{
            setFunctions__ads({backgroundColor:"#0d6efd", color:"white"});
            setFunction__category({display:"none"});
            setFunctions__category({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunction__random({display:"none"});
            setFunctions__random({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunction__all({display:"none"});
            setFunctions__all({backgroundColor:"", color:"var(--bs-body-color)"});
            setFunctions__history({backgroundColor:"", color:"var(--bs-body-color)"});
        }
    }

    //Đoạn này là để random các video
    let Movie2D=props.movies.filter(item=>item.dimensional==="2D");
    let random=Math.floor(Math.random()*Movie2D.length);
    let id=Movie2D[random]?.id;
    let name=Movie2D[random]?.name;
    Movie2D=`/thong-tin/${name}/${id}`;

    let Movie3D=props.movies.filter(item=>item.dimensional==="3D");
    random=Math.floor(Math.random()*Movie3D.length);
    id=Movie3D[random]?.id;
    name=Movie3D[random]?.name;
    Movie3D=`/thong-tin/${name}/${id}`

    
    return(
        <>
            <div className="tabfunctions">
                <div className="tabfunctions--function" style={functions__all} onClick={handelChangeBGR__All}>
                    Xem Tổng Hợp
                    <div className="tabfunctions--function__all" style={function__all}>
                        <Link to="/the-loai/3d" className="function--link function__all--children">Phim 3D</Link>
                        <Link to="/the-loai/2d" className="function--link function__all--children">Phim 2D</Link>
                        <Link to="/the-loai/VietSub" className="function--link function__all--children">Phim VietSub</Link>
                        <Link to="/the-loai/Dang-ra" className="function--link function__all--children">Phim Đang Ra</Link>
                        <Link to="/trang-thai/Hoan-thanh" className="function--link function__all--children">Phim Hoàn Thành</Link>
                        <Link to="/trang-thai/NewMovie" className="function--link function__all--children">Phim Mới</Link>
                        <Link to="/trang-thai/Hot" className="function--link function__all--children">Phim Hot</Link>
                    </div>
                </div>
                <div className="tabfunctions--function" style={functions__random} onClick={handelChangeBGR__Random}>
                    Xem Ngẫu Nhiên
                    <div className="tabfunctions--function__random" style={function__random}>
                        <Link to={Movie2D} className="function__random--children"  >
                            Phim 2D
                        </Link>
                        <Link to={Movie3D} className="function__random--children" >
                            Phim 3D
                        </Link>
                        <div className="function__random--children" >
                            Phim Mới
                        </div>
                        <div className="function__random--children">
                            Phim Hot
                        </div>
                        <div className="function__random--children">
                            Phim VietSub
                        </div>
                        <div className="function__random--children">
                            Phim Đang Ra
                        </div>
                        <div className="function__random--children" >
                            Phim Hoàn Thành
                        </div>
                        
                    </div>
                </div>
                <div className="tabfunctions--function" style={functions__category} onClick={handelChangeBGR__Category}>
                    Xem  Theo Thể Loại
                    <div className="tabfunctions--function__category" style={function__category}>
                        <Link to="/the-loai/tien-hiep" className="function__category--children">
                            Tiên Hiệp
                        </Link>
                        <Link to="/the-loai/trung-sinh" className="function__category--children">
                            Trùng Sinh
                        </Link>
                        <Link to="/the-loai/luyen-cap" className="function__category--children">
                            Luyện Cấp
                        </Link>
                        <Link to="/the-loai/vo-hiep" className="function__category--children">
                            Võ Hiệp
                        </Link>
                        <Link to="/the-loai/xuyen-khong" className="function__category--children">
                            Xuyên Không
                        </Link>
                        <Link to="/the-loai/he-thong" className="function__category--children">
                            Hệ Thống
                        </Link>
                        <Link to="/the-loai/chuyen-sinh" className="function__category--children">
                            Chuyển Sinh
                        </Link>
                        <Link to="/the-loai/xuyen-khong" className="function__category--children">
                            Xuyên Không
                        </Link>
                        <Link to="/the-loai/2d" className="function__category--children">
                            Phim 2D
                        </Link>
                        <Link to="/the-loai/3d" className="function__category--children">
                            Phim 3D
                        </Link>
                        
                    </div>
                </div>
                <div className="tabfunctions--function" style={functions__history} onClick={handelChangeBGR__History}>
                    Xem Lịch Sử
                </div>
                <div className="tabfunctions--function" style={functions__ads} onClick={handelChangeBGR__Ads}>
                    Liên Hệ Quảng Cáo
                </div>
            </div>
        </>
    );
};

export default Tablinks;