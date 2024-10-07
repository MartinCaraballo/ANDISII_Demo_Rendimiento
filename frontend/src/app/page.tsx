'use client'

import React, { useState } from "react";
import MovieCard from "@/app/models/movie-card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import VideoCard from "@/app/models/video-card";

const Home: React.FC = () => {
    const [movieCatalog, setMovieCatalog] = useState<string[]>([]);
    const [videoCatalog, setVideoCatalog] = useState<string[]>([]);

    const [showMovies, setShowMovies] = useState(false);
    const [showVideos, setShowVideos] = useState(false);

    async function fetchMovieCatalog() {
        try {
            const res = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/catalog`, {
                method: 'GET'
            });
            const data: string[] = await res.json();
            setMovieCatalog(data);
        } catch (e) {
            console.error(e);
        }
    }

    async function fetchVideoCatalog() {
        try {
            const res = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/videos`, {
                method: 'GET'
            });
            const data: string[] = await res.json();
            setVideoCatalog(data);
        } catch (e) {
            console.error(e);
        }
    }

    const toggleMovies = () => {
        setShowMovies(!showMovies);
        fetchMovieCatalog();
    }
    const toggleVideos = () => {
        setShowVideos(!showVideos);
        fetchVideoCatalog();
    }

    return (
        <div className="flex flex-col h-screen bg-gray-900 p-6 overflow-y-auto">
            <h1 className="text-5xl font-bold text-white text-center mb-8">Simuladores+</h1>

            <div className="mb-4">
                <button onClick={toggleMovies} className="w-full text-left text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded flex items-center justify-between">
                    <span>{showMovies ? "Ocultar Películas" : "Mostrar Películas"}</span>
                    <FontAwesomeIcon icon={showMovies ? faChevronUp : faChevronDown} />
                </button>
                {showMovies && (
                    <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pb-4 overflow-y-auto">
                        {movieCatalog.map((movie, index) => (
                            <MovieCard
                                key={index}
                                movieTitle={movie}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="mb-4">
                <button onClick={toggleVideos} className="w-full text-left text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded flex items-center justify-between">
                    <span>{showVideos ? "Ocultar Videos" : "Mostrar Videos"}</span>
                    <FontAwesomeIcon icon={showVideos ? faChevronUp : faChevronDown} />
                </button>
                {showVideos && (
                    <div
                        className="grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-4 overflow-y-auto">
                        {videoCatalog.map((video, index) => (
                            <VideoCard
                                key={index}
                                videoTitle={video}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
