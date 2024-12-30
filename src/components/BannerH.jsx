import React from "react";

import Welcome from "../assets/home-1.png";

function BannerH() {
    return (
        <div>
            <div className="w-full h-auto text-white bg-black">
                <div className="container py-8 mx-auto">
                    <div className="grid items-center grid-cols-1 gap-2 md:grid-cols-2">
                        <div
                            className="w-full h-[250px] md:h-[350px] bg-center order-1 md:order-2 rounded-lg bg-cover"
                            style={{ backgroundImage: `url(${Welcome})` }}
                        ></div>

                        <div className="order-2 p-4 text-center md:text-left md:order-1">
                            <h1 className="text-3xl font-bold leading-tight">
                                Welcome to <span className="text-orange-500">Stream Lab</span>
                            </h1>
                            <p className="mt-4 text-lg">
                                Life’s better when you have a world of entertainment at your fingertips.
                            </p>
                            <button className="px-6 py-3 mt-6 font-semibold text-black bg-white rounded-md hover:bg-gray-200">
                                join Stream
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="relative flex items-center min-h-screen bg-center bg-cover"
                    style={{ backgroundImage: `url(${Welcome})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div>

                    <div className="relative z-10 max-w-screen-lg px-8 mx-auto">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold leading-tight">Movie rentals on Sream Lab</h1>

                            <p className="text-lg text-gray-300">Early Access to new movies, before digital subscription</p>

                            <button className="px-6 py-2 font-medium text-black transition bg-white rounded hover:bg-gray-300">
                                Rent now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerH;
