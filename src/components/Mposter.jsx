import React, { useEffect, useState } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import { API_KEY } from "../Constands/constand";

function Mposter() {
    const [movie, setMovie] = useState([]);
    const [trailerId, setTrailerId] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`);
                console.log(response.data.results);
                setMovie(response.data.results);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        const container = e.currentTarget;
        setIsDragging(true);
        setStartX(e.pageX - container.offsetLeft);
        setScrollLeft(container.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const container = e.currentTarget;
        const x = e.pageX - container.offsetLeft;
        const walk = x - startX;
        container.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => setIsDragging(false);

    const handleMouseLeave = () => setIsDragging(false);

    const playTrailer = async (id) => {
        try {
            const response = await axios.get(`movie/${id}/videos?api_key=${API_KEY}`);
            const trailers = response.data.results.filter((video) => video.type === "Trailer");
            if (trailers.length > 0) {
                setTrailerId(trailers[0].key);
            } else {
                alert("Trailer not available");
            }
        } catch (error) {
            console.error("Error fetching trailer:", error);
        }
    };

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="flex flex-col items-center text-white bg-black">
            <div className="relative flex justify-center w-full h-[250px]">
                <div className="h-[95%] w-[98%] relative">
                    <div className="w-full h-full">
                        <h2 className="text-white">Stream Lab</h2>
                        <div
                            className="h-[90%] w-full flex items-center gap-2 overflow-x-auto scrollbar-hide scroll-container"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            style={{ cursor: isDragging ? "grabbing" : "grab" }}
                        >
                            {movie.map((obj) => (
                                <div key={obj.id} className="w-60 h-[70%] flex-shrink-0">
                                    <img
                                        onClick={() => playTrailer(obj.id)}
                                        src={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                                        alt={obj.name || obj.title}
                                        className="object-cover w-full h-full cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {trailerId && (
                <div className="w-full mt-6 bg-black">
                    <YouTube videoId={trailerId} opts={opts} />
                </div>
            )}
        </div>
    );
}

export default Mposter;
