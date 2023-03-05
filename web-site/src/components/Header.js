import { Link } from "react-router-dom";
import {NavbarBrand, Navbar} from 'reactstrap'
import logo from '../images/logo.png'
import React, { useState } from 'react';
import { Input, InputGroup,  Button } from 'reactstrap';
import Tablinks from "./Tablinks";
import unidecode from 'unidecode';

const Header = (props) => {

    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    }
    

  return (
    <>
        <Navbar className="header" color="dark" dark>
            <Link to="/" className="header--brand">
                    <img
                        alt="logo"
                        src={logo}
                        style={{
                        height: 40,
                        width: 40
                        }}
                    />
                    THUYẾT MINH 3D
            </Link>
            <div className="header--input">
                <InputGroup>
                    <Input placeholder="Nhập từ khóa..." value={searchText} onChange={handleInputChange}  />
                    <Link to={`/tim-kiem/${searchText}`} className="header--input__button" color="primary">
                        Tìm kiếm
                    </Link>
                </InputGroup>
            </div>
        </Navbar>

        <Tablinks movies={props.movies}/>
        
    </>
  );
};

export default Header;
