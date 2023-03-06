import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Xemphim=(props)=>{
    const location=useLocation();
    const [viewMv,setViewMv]=useState({"id":0,"index":0});
    useEffect(()=>{
        const _path=window.location.pathname;
        let idMV="";
        let indexMV="";
        let index=_path.indexOf("id=");
        for(let i=index+3;i<_path.length;i++)
        {
            if(_path[i]==="/")
            {
                break;
            }
            idMV+=_path[i];
        }
        index=_path.indexOf("episode=");
        for(let i=index+8;i<_path.length;i++)
        {
            if(_path[i]==="/")
            {
                break;
            }
            indexMV+=_path[i];
        }
        idMV=parseInt(idMV);
        indexMV=parseInt(indexMV);
        setViewMv({"id":idMV,"index":indexMV});
    },[location]);

    useEffect(()=>{
        document.title = `Xem Phim ${props.movies[viewMv.id-1]?.name} Tập ${props.movies[viewMv.id-1]?.videos[viewMv.index-1]?.name}`;
    })
    return(
        <div >
            <div className="xem-phim">
                <div className='xem-phim--title'>
                    <h3>{props.movies[viewMv.id-1]?.name?props.movies[viewMv.id-1]?.name:"Bộ phim này chưa được cập nhật!"} {props.movies[viewMv.id-1]?.videos[viewMv.index-1]?.name}</h3>
                </div>
                {
                    props.movies[viewMv.id-1]?.videos[viewMv.index-1]?.value ?
                        <iframe className="xem-phim_player" width="85%" height="500px" src={props.movies[viewMv.id-1]?.videos[viewMv.index-1]?.value }  allowFullScreen="1"></iframe>:
                        <div className="xem-phim_player chưa_cap_nhat_div" width="85%" height="500px">
                            Tập Phim Này Chưa Được Cập Nhật.<br/>Phim "{props.movies[viewMv.id-1]?.name}" Được Cập Nhật Vào "{props.movies[viewMv.id-1]?.lich_chieu}" Hàng Tuần<br/>
                            Vui Lòng Quay Lại Sau.<br/>Xin Lỗi Vì Sự Bất Tiện Này.
                        </div>
                }
                
                <div className="prev-next">
                    <Link to={`/xem-phim/${props.movies[viewMv.id-1]?.name}/id=${props.movies[viewMv.id-1]?.id}/episode=${viewMv.index-1}`}>Tập Trước</Link>
                    <Link to={`/xem-phim/${props.movies[viewMv.id-1]?.name}/id=${props.movies[viewMv.id-1]?.id}/episode=${viewMv.index+1}`}>Tập Tiếp</Link>
                </div>
            </div>
            <div className="viewMV_list_episode">
                <h4>Danh Sách Tập</h4>
                <div className="list_episode--scroll-bar">
                    {
                        props.movies[viewMv.id-1]?.videos?.map((itemvd,index)=>{
                            return(
                                    <Link to={`/xem-phim/${props.movies[viewMv.id-1]?.name}/id=${props.movies[viewMv.id-1]?.id}/episode=${props.movies[viewMv.id-1]?.videos.length-index}`} className={props.movies[viewMv.id-1]?.videos.length-index===viewMv.index? "activity":""}>{props.movies[viewMv.id-1]?.videos[props.movies[viewMv.id-1]?.videos.length-index-1]?.name}</Link>
                            )
                        })
                    }
                </div>
            </div>
           
        </div>
    )
}

export default Xemphim;