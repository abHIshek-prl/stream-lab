import React, { useState } from "react";

function FeedbackPage() {
    const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault(); 
        setFeedbackSubmitted(true);
    };

    return (
        <div className="flex flex-col items-center justify-between w-full min-h-screen text-white bg-black">
            <header className="w-full py-8 bg-black shadow-lg">
                <h1 className="text-5xl font-extrabold text-center text-transparent uppercase bg-clip-text bg-gradient-to-r from-black to-orange-600">
                    Feedback Form
                </h1>
                <p className="mt-2 text-center text-gray-400">
                    Your thoughts help us grow
                </p>
            </header>

            <main className="flex flex-col items-center flex-1 w-screen px-6 md:px-0">
                {!feedbackSubmitted ? (
                    <form
                        className="flex flex-col items-center w-full max-w-lg p-8 space-y-6 bg-black border border-gray-700 shadow-2xl rounded-2xl backdrop-blur-md"
                        onSubmit={handleSubmit}
                    >
                        <h2 className="mb-4 text-3xl font-bold text-white">We Value Your Thoughts</h2>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                            required
                        />
                        <textarea
                            placeholder="Your Feedback"
                            rows="4"
                            className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                            required
                        ></textarea>
                        <div className="flex flex-col w-full space-y-2">
                            <label className="text-gray-400">Rate Us:</label>
                            <select
                                className="w-full px-4 py-3 text-gray-800 bg-gray-100 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-600"
                                required
                            >
                                <option value="">Choose a Rating</option>
                                <option value="1">1 - Very Poor</option>
                                <option value="2">2 - Poor</option>
                                <option value="3">3 - Average</option>
                                <option value="4">4 - Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-6 py-3 font-bold text-white transition transform rounded-lg shadow-lg bg-gradient-to-r from-black via-orange-600 to-black hover:scale-105"
                        >
                            Submit Feedback
                        </button>
                    </form>
                ) : (
                    <div className="flex flex-col items-center justify-center w-full max-w-lg p-8 space-y-6 text-center bg-black border border-gray-700 shadow-2xl rounded-2xl backdrop-blur-md">
                        <h2 className="text-3xl font-bold text-white">Thank You!</h2>
                        <p className="text-lg text-gray-400">
                            We appreciate your feedback and will use it to improve our services.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default FeedbackPage;
