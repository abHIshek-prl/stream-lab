import { useState } from "react";
import React from "react";
import "../App.css";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    const getLinkStyle = (path) => {
        return location.pathname === path
            ? "text-orange-500 font-bold decoration-transparent"
            : "text-white decoration-transparent";
    };

    return (
        <div>
            <div className="flex items-center justify-center w-full h-16 gap-[1%] bg-black bg-opacity-60 text-whited">
                <div className="h-full w-[60%] md:w-[30%] flex gap-[5%] justify-center">
                    <div className="w-[0] md:w-[10%] h-full flex items-center justify-center">
                        <div className="flex md:hidden" onClick={toggleMenu}>
                            <i className="text-xl fa-solid fa-bars"></i>
                        </div>
                    </div>

                    <div className="w-[90%] md:w-[80%] h-full flex items-center justify-center">
                        <div className="h-full w-[85%] flex items-center">
                            <p className="text-xl font-bold text-orange-500 lg:text-2xl">
                                Stream Lab
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-full w-[0] md:w-[70%] flex items-center justify-center">
                    <ul className="items-center justify-center hidden gap-4 text-white md:gap-4 md:flex">
                        <li>
                            <button className="font-bold">
                                <Link to="/" className={getLinkStyle("/")}>
                                    Home
                                </Link>
                            </button>
                        </li>

                        <li>
                            <button className="font-bold">
                                <Link to="/movies" className={getLinkStyle("/movies")}>
                                    Movies
                                </Link>
                            </button>
                        </li>

                        <li>
                            <button className="font-bold">
                                <Link to="/animation" className={getLinkStyle("/animation")}>
                                    Feedback
                                </Link>
                            </button>
                        </li>

                        <li>
                            <Dropdown>
                                <Dropdown.Toggle
                                    className="bg-transparent border-0"
                                    id="dropdown-basic"
                                >
                                    Genres
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="text-center h-[200px] overflow-scroll leading-9">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Adventure</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Comedy</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Documentary</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">Fantasy</Dropdown.Item>
                                    <Dropdown.Item href="#/action-7">Romance</Dropdown.Item>
                                    <Dropdown.Item href="#/action-8">Mystery</Dropdown.Item>
                                    <Dropdown.Item href="#/action-9">Drama</Dropdown.Item>
                                    <Dropdown.Item href="#/action-10">Kids</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        <li>
                            <Dropdown>
                                <Dropdown.Toggle
                                    className="text-white bg-transparent border-0"
                                    id="dropdown-basic"
                                >
                                    LAG
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="h-[200px] overflow-scroll leading-9">
                                    <Dropdown.Item href="#/action-1">മലയാളം</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">हिन्दी</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">தமிழ்</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">తెలుగు</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Español</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">لعربية</Dropdown.Item>
                                    <Dropdown.Item href="#/action-7">日本語</Dropdown.Item>
                                    <Dropdown.Item href="#/action-8">ไทย</Dropdown.Item>
                                    <Dropdown.Item href="#/action-9">简体中文</Dropdown.Item>
                                    <Dropdown.Item href="#/action-10">Türkçe</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>

                <div className="h-full w-[35%] md:w-[30%] flex items-center justify-center">
                    <div className="h-[80%] w-[100%] md:w-[80%] flex justify-end items-center gap-3">
                        <button className="text-white">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <button className="text-white">
                            <i className="fa-solid fa-user"></i>
                        </button>
                        <button className="text-xs text-white border-2 border-orange-500 w-[40%] hover:text-red-600 md:text-base rounded-full">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <>
                    
                    <div
                        className="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-50"
                        onClick={toggleMenu}
                    ></div>

                    
                    <div className="fixed top-0 left-0 w-[70%] h-full bg-black bg-opacity-25 z-50 p-4">
                        <ul className="flex flex-col gap-4 text-teal-500">
                            <li>
                                <Link to="/" className={getLinkStyle("/")}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/movies" className={getLinkStyle("/movies")}>
                                    Movies
                                </Link>
                            </li>
                            <li>
                                <Link to="/animation" className={getLinkStyle("/animation")}>
                                    Feedback
                                </Link>
                            </li>
                            <li>
                            <Dropdown>
                                <Dropdown.Toggle
                                    className="bg-transparent border-0"
                                    id="dropdown-basic"
                                >
                                    Genres
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="text-center h-[200px] overflow-scroll leading-9">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Adventure</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Comedy</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Documentary</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">Fantasy</Dropdown.Item>
                                    <Dropdown.Item href="#/action-7">Romance</Dropdown.Item>
                                    <Dropdown.Item href="#/action-8">Mystery</Dropdown.Item>
                                    <Dropdown.Item href="#/action-9">Drama</Dropdown.Item>
                                    <Dropdown.Item href="#/action-10">Kids</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>

                        <li>
                            <Dropdown>
                                <Dropdown.Toggle
                                    className="text-white bg-transparent border-0"
                                    id="dropdown-basic"
                                >
                                    LAG
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="h-[200px] overflow-scroll leading-9">
                                    <Dropdown.Item href="#/action-1">മലയാളം</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">हिन्दी</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">தமிழ்</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">తెలుగు</Dropdown.Item>
                                    <Dropdown.Item href="#/action-5">Español</Dropdown.Item>
                                    <Dropdown.Item href="#/action-6">لعربية</Dropdown.Item>
                                    <Dropdown.Item href="#/action-7">日本語</Dropdown.Item>
                                    <Dropdown.Item href="#/action-8">ไทย</Dropdown.Item>
                                    <Dropdown.Item href="#/action-9">简体中文</Dropdown.Item>
                                    <Dropdown.Item href="#/action-10">Türkçe</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
}

export default Header;
