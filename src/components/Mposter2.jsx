import React, { useEffect, useState } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import { API_KEY } from "../Constands/constand";

function Mposter(props) {
    const [movie, setMovie] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [urlid, setUrlId] = useState("");

    useEffect(() => {
        console.log("Fetching data from URL:", props.url);
        const fetchData = async () => {
            try {
                const response = await axios.get(props.url);
                console.log("Fetched movie data:", response.data.results);
                setMovie(response.data.results || []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [props.url]);

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

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const Trail = async (id) => {
        console.log("Fetching trailer for movie ID:", id);

        
        setUrlId("");

        try {
            const response = await axios.get(`movie/${id}/videos?api_key=${API_KEY}`);
            const trailer = response.data.results.find(
                (video) => video.type === "Trailer" && video.site === "YouTube"
            );
            if (trailer) {
                console.log("YouTube Video ID:", trailer.key);
                setUrlId(trailer.key);
            } else {
                console.log("No trailer found for this movie.");
                setUrlId("");
            }
        } catch (error) {
            console.error("Error fetching trailer:", error);
            setUrlId("");
        }
    };

    return (
        <>
            <div className="relative flex justify-center w-full h-[250px] bg-black">
                <div className="h-[95%] w-[98%] relative">
                    <div className="w-full h-full bg-black">
                        <h4 className="ml-4 text-white">{props.title}</h4>
                        <div
                            className="h-[90%] w-full flex items-center gap-[13px] overflow-x-auto scrollbar-hide scroll-container"
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onMouseLeave={handleMouseLeave}
                            style={{ cursor: isDragging ? "grabbing" : "grab" }}
                        >
                            {movie.map((obj) => (
                                <div key={obj.id} className="w-36 h-[90%] flex-shrink-0">
                                    <img
                                        onClick={() => Trail(obj.id)}
                                        src={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`}
                                        alt={obj.name || obj.title || "Movie Poster"}
                                        className="object-cover w-full h-full cursor-pointer"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-black ${urlid ? "h-auto py-4" : "h-0"}`}>
                {urlid && (
                    <YouTube videoId={urlid} opts={opts} className="w-full mx-auto" />
                )}
            </div>
        </>
    );
}

export default Mposter;
