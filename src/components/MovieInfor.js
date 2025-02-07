import React from "react";
import {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const MovieInfor=(props)=>{
    const location=useLocation();
    const [search,setSearch]=useState("");
    useEffect(()=>{
        const _path=window.location.pathname;
        let search1="";
        if(_path.includes("thong-tin"))
        { 
            for(let i=11;i<_path.length;i++)
            {
                if(_path[i]=="/")
                {
                    for(let j=i+1;j<_path.length;j++)
                    {
                        search1+=_path[j];
                        if(_path[j]=="/")
                        {
                            alert("Bộ phim không tồn tại.\nXin vui lòng kiểm tra lại!");
                            window.location.pathname="/";
                        }
                    }
                    
                }
            }
        }
        if(search1==""){
            alert("Bộ phim không tồn tại.\nXin vui lòng kiểm tra lại!");
            window.location.pathname="/";
        }
        setSearch(parseInt(search1));
    },[location]);
    useEffect(()=>{
        document.title = `Thông Tin Phim ${props.movies[search-1]?.name}`;
    })
    return(
        <>
            {
                props.movies.map(item=>{
                    if(item.id==search){
                        return(
                            <div className="movieInfor">
                                <div className="movieInfor--title">
                                    {item.name}
                                </div>
                                <div className="movieInfor--infors">
                                    <img className="movieInfor--infors__avatar" alt="movieInfor--infors__avatar" src={item.avatar} />
                                    <div className="movieInfor--infors__infors">
                                        <div className="movieInfor--infors__infors_">
                                            <div class="movieInfor--infors__infors_title">Thể Loại</div>
                                            <div className="movieInfor--infors__infors_categories_categories">
                                                {
                                                    item.categories.split(",").map(cate=>{
                                                            if(cate=="Xuyên Không"){
                                                                return (
                                                                <Link to={`/the-loai/xuyen-khong`} className="movieInfor--infors__infors_categories_category">{cate}</Link>
                                                            )}
                                                            if(cate=="Hệ Thống"){
                                                                return (
                                                                <Link to={`/the-loai/he-thong`} className="movieInfor--infors__infors_categories_category">{cate}</Link>
                                                            )}
                                                            if(cate=="Chuyển Sinh"){
                                                                return (
                                                                <Link to={`/the-loai/chuyen-sinh`} className="movieInfor--infors__infors_categories_category">{cate}</Link>
                                                            )}
                                                            if(cate=="Võ Hiệp"){
                                                                return (
                                                                <Link to={`/the-loai/vo-hiep`} className="movieInfor--infors__infors_categories_category">{cate}</Link>
                                                            )}
                                                            if(cate=="Luyện Cấp"){
                                                                return (
                                                                <Link to={`/the-loai/luyen-cap`} className="movieInfor--infors__infors_categories_category">{cate}</Link>
                                                            )}
                                                            if(cate=="Trùng Sinh"){
                                                                return (
                                                                <Link to={`/the-loai/trung-sinh`} className="movieInfor--infors__infors_categories_category">{cate}</Link>
                                                            )}
                                                            if(cate=="Tiên Hiệp"){
                                                                return (
                                                                <Link to={`/the-loai/tien-hiep`} className="movieInfor--infors__infors_categories_category">{cate}</Link>
                                                            )}
                                                            if(cate=="3D"){
                                                                return(
                                                                    <Link to={`/the-loai/3d`} className="movieInfor--infors__infors_categories_category">{cate}</Link>
                                                                )
                                                            }
                                                            if(cate=="2D"){
                                                                return(
                                                                    <Link to={`/the-loai/2d`} className="movieInfor--infors__infors_categories_category">{cate}</Link>
                                                                )
                                                            }
                                                            if(cate=="VietSub"){
                                                                return(
                                                                    <Link to={`/the-loai/vietsub`} className="movieInfor--infors__infors_categories_category">{cate}</Link>
                                                                )
                                                            }
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="movieInfor--infors__infors_">
                                            <div className="movieInfor--infors__infors_title">Tập</div>
                                            <div className="movieInfor--infors__infors_episode_episode">{item.videos[item.videos.length-1]?.name}/{item.numberEnd}</div>
                                        </div>
                                        <div className="movieInfor--infors__infors_">
                                            <div className="movieInfor--infors__infors_title">Năm</div>
                                            <div className="movieInfor--infors__infors_year">
                                                {item.nam_sx}
                                            </div>
                                        </div>
                                        <div className="movieInfor--infors__infors_">
                                            <div className="movieInfor--infors__infors_title">Xem Phim</div>
                                            <div className="movieInfor--infors__infors_view">
                                                <Link to={`/xem-phim/${item.name}/id=${item.id}/episode=${item.videos?.length >0 ? '1':"0"}`}>Xem Từ Đầu</Link>
                                                <Link to={`/xem-phim/${item.name}/id=${item.id}/episode=${item.videos?.length >0 ? item.videos?.length:"0"}`}>Xem Mới Nhất</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list_episode-content">
                                    <div className="list_episode">
                                        <h4>Danh Sách Tập</h4>
                                        <div className="list_episode--scroll-bar">
                                            {
                                                item.videos?.map((itemvd,index)=>{
                                                    return(
                                                        <Link to={`/xem-phim/${item.name}/id=${item.id}/episode=${item.videos.length-index}`}>{item.videos[item.videos.length-index-1]?.name}</Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className="list_episode-content__">
                                        <h4>Nội Dung Phim</h4>
                                        <div className="content_film">
                                            Truyện kể về một nhân vật chính là người đã bỏ công sức ra tạo website này để cho các anh em xem video.<br />
                                            Hơn nữa còn hằng ngày cặm cụi thuyết minh từng tập phim một.<br/>
                                            Vậy anh em nếu thấy quý trọng những thước phim anh em xem thì có thể ủng hộ mình bằng cách click vào các quảng cáo nha.<br/>
                                            Thank Anh Em!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </>
    );
};


export default MovieInfor;