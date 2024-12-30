import React, { useEffect, useState } from "react";
import Welcome from "../assets/home-1.png";
import axiosInstance from "../axios"; // Import the Axios instance
import { API_KEY,imageUrl } from "../Constands/constand";

function BannerM() {
    const [movie, setMovie] = useState(null);
    useEffect(() => {
        axiosInstance
            .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((response) => {
                console.log("API Response:", response.data.results);
                setMovie(response.data.results[Math.floor(Math.random()*19)+1]); // Corrected typo
            })
            .catch((error) => {
                console.error("API Error:", error.response ? error.response.data : error.message);
            });
    }, []);

    return (
        <div>
            <div
                className="relative min-h-[390px] bg-center bg-cover"
                style={{
                    backgroundImage: movie
                        ? `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
                        : `url(${Welcome})`, // Fallback to Welcome image
                }}
            >
                <div className="absolute inset-0 flex items-end">
                    <div className="h-[70%] w-full flex justify-end bg-gradient-to-t from-black to-transparent">
                        <div className="h-full w-[90%] flex flex-col justify-center">
                            <p className="text-3xl font-bold text-white">
                                {movie ? movie.title || movie.name : "Loading..."}
                            </p>
                            <div className="flex w-full gap-4">
                                <button className="px-6 py-2 font-medium text-black transition bg-white rounded hover:bg-gray-300">
                                    Play
                                </button>
                                <button className="px-6 py-2 font-medium text-black transition bg-white rounded hover:bg-gray-300">
                                    Watch Later
                                </button>
                            </div>
                            <h5 className="text-sm text-white md:text-base">
                                {movie ? movie.overview : "Loading description..."}
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerM;
