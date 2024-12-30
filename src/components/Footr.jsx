import React from "react";
import { Link } from "react-router-dom";

function Footr() {
    return (
        <div>
            <div className="h-[550px] w-full bg-black flex flex-col justify-center items-center gap-[4%]">
                <div className="h-[10%] w-[85%] flex items-center justify-center">
                    <p className="text-6xl font-bold text-orange-500 ms:text-9xl opacity-40">Stream Lab</p>
                </div>

                <div className=" h-[50%]md:h-[30%] w-[90%] flex justify-center items-center flex-wrap gap-[20%]">
                    <div className="h-[40%] w-[60%]flex  items-center">
                        <p className="font-mono text-2xl font-bold text-white md:text-4xl">
                            Open Your Gateway to Endless Entertainment
                        </p>
                    </div>
                    
                    <div className="h-[20%] w-[100%] md:w-[60%] flex  justify-center items-center gap-2 md:gap-4 border-">
                        <input
                            type="text"
                            placeholder="Email"
                            className="h-10 text-center text-white bg-transparent border-2 border-orange-500 rounded-full w-80"
                        />
                        <button className="w-40 h-10 text-white border-2 border-orange-500 rounded-full">Join</button>
                    </div>
                </div>

                <div className="h-[20%] w-[90%] flex-wrap flex justify-center gap-[10%] border-b-4 border-orange-500">
                    <div className="h-full w-[40%] text-2xl text-white flex items-center gap-[4%]">
                        <a href="" className="text-white"><i className="fa-brands fa-instagram"></i></a>
                        <a href="" className="text-white"><i className="fa-brands fa-twitter"></i></a>
                        <a href="" className="text-white"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                    <div className="h-full w-[40%] text-xl md:text-2xl text-white flex items-center justify-end gap-[4%]">
                        <p>Get app</p>
                        <a href="" className="text-white"><i className="fa-brands fa-google-play"></i></a>
                        <a href="" className="text-white"><i className="fa-brands fa-apple"></i></a>
                    </div>
                </div>
                <span className="text-center text-[#757575] h-[20%]5">
                  <p>since 2024  <span className="text-orange-500"> @Stream Lab </span>.© 2024</p>
                  <p>Powered by <a href="https://www.instagram.com/a_bhishek__/" className="text-white decoration-transparent hover:text-orange-500">Abhishek</a></p>
                </span>
            </div>
        </div>
    );
}

export default Footr;
