'use client'

import React, { useEffect, useState } from "react";
import MovieCard from "@/app/models/movie-card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Home: React.FC = () => {
    const [movieCatalog, setMovieCatalog] = useState<string[]>([]);
    const [showMovies, setShowMovies] = useState(false);
    const [showVideos, setShowVideos] = useState(false);

    async function fetchCatalog() {
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

    useEffect(() => {
        fetchCatalog();
    }, []);

    const toggleMovies = () => setShowMovies(!showMovies);
    const toggleVideos = () => setShowVideos(!showVideos);

    return (
        <div className="flex flex-col h-screen bg-gray-900 p-6 overflow-y-auto">
            <h1 className="text-5xl font-bold text-white text-center mb-8 overflow-hidden">Simuladores+</h1>

            <div className="mb-4">
                <button onClick={toggleMovies} className="w-full text-left text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded flex items-center justify-between">
                    <span>{showMovies ? "Ocultar Películas" : "Mostrar Películas"}</span>
                    <FontAwesomeIcon icon={showMovies ? faChevronUp : faChevronDown} />
                </button>
                {showMovies && (
                    <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 space-x-4 pb-4 overflow-y-auto">
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
                    <div className="grid place-items-center">
                        {/* Aquí puedes agregar tus videos */}
                        <p className="text-white">Aquí van los videos...</p>
                    </div>
                )}
            </div>

            <footer className="mt-auto text-center text-gray-500">
                &copy; 2024 Simuladores+. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default Home;
