import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Category = (props) => {
    const location = useLocation();
    const [search,setSearch]=useState("");
    useEffect(()=>{
        const _path=window.location.pathname;
        let search1=""
        if(_path.includes("the-loai"))
        { 
            
            for(let i=10;i<_path.length;i++)
            {
                search1+=_path[i];
                if(_path[i]=="/")
                {
                    alert("Vui lòng chọn thể loại đúng!");
                    window.location.pathname="/";
                }
            }
        }
        if(search1==="tien-hiep") setSearch("Tiên Hiệp");
        if(search1==="vo-hiep") setSearch("Võ Hiệp");
        if(search1==="trung-sinh") setSearch("Trùng Sinh");
        if(search1==="luyen-cap") setSearch("Luyện Cấp");
        if(search1==="xuyen-khong") setSearch("Xuyên Không");
        if(search1==="he-thong") setSearch("Hệ Thống");
        if(search1==="chuyen-sinh") setSearch("Chuyển Sinh");
        if(search1==="3d") setSearch("3D");
        if(search1==="2d") setSearch("2D");
    },[location]);
    return (
        <div>
            <div className='phim_theo_the_loai'>
                <h3>Phim Theo Thể Loại: {search}</h3>
            </div>
            <div className="movies">
                {
                    props.movies.map(item=>{
                        if(item.categories.includes(search)){
                            return(
                                <Link to={`/thong-tin/${item.name}/${item.id}`} className="movie--item">
                                    <div className="movie--item__episode">Tập {item.numberNow}/{item.numberEnd}</div>
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

export default Category;
