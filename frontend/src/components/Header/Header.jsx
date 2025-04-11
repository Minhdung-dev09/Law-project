import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.avif";
import { IoIosSearch } from "react-icons/io";
import avatar from "../../assets/avatar.avif";
import Home from "../../pages/Home/Home";
import { Link } from "react-router-dom";
import Contaxt from "../../pages/Contaxt/Contaxt";
import Chat from "../../pages/Chat/Chat";
import Shop from "../../pages/Shop/Shop";
import Login from "../../pages/Login/LoginSignUp";
const Header = () => {
  const LoginSignUp = false;
  const [menu, setMenu] = useState("Home");
  return (
    <>
      <div className="header">
        <div className="header-left">
          <img className="header-left-logo" src={logo} alt="" />
        </div>
        <div className="header-menu">
          <ul className="menus">
            <li
              className="menu-item"
              onClick={() => {
                setMenu("home");
              }}
            >
              <Link style={{ textDecoration: "none", color: "#000" }} to="/">
                Home
              </Link>
              {menu === "home" ? <hr /> : <></>}
            </li>
            <li
              className="menu-item"
              onClick={() => {
                setMenu("tuvan");
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/chat"
              >
                Tư Vấn
              </Link>

              {menu === "tuvan" ? <hr /> : <></>}
            </li>
            <li
              className="menu-item"
              onClick={() => {
                setMenu("tracuu");
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/chat"
              >
                Tra Cứu
              </Link>
              {menu === "tracuu" ? <hr /> : <></>}
            </li>
            <li
              className="menu-item"
              onClick={() => {
                setMenu("shop");
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to="/shop"
              >
                Shop
              </Link>
              {menu === "shop" ? <hr /> : <></>}
            </li>
          </ul>
        </div>

        <div className="header-right">
          <div className="header-right-search">
            <input type="text" placeholder="What find you want?" />
            <IoIosSearch className="icon-search" />
          </div>

          <div className="loginsignup">
            {LoginSignUp ? (
              <img className="loginsignup-avatar" src={avatar} alt="" />
            ) : (
              <></>
            )}
            {LoginSignUp ? (
              <>
                <Link to="login">
                  <button className="loginsignup-btn">Dang Xuat</button>
                </Link>
              </>
            ) : (
              <Link to="login">
                <button className="loginsignup-btn">Dang Nhap</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
