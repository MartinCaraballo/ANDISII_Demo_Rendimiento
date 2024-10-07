'use client'

import React, {useEffect, useState} from "react";
import MovieCard from "@/app/models/movie-card";

const Home: React.FC = () => {
    const [movieCatalog, setMovieCatalog] = useState<string[]>([]);

    async function fetchCatalog() {
        try {
            const res = await fetch(`http://${process.env.NEXT_PUBLIC_API_URL}/catalog`, {
                method: 'GET'
            })
            const data: string[] = await res.json();
            setMovieCatalog(data)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        fetchCatalog();
    }, [])

    return (
        <div className="flex flex-col h-screen bg-gray-900 p-6 overflow-y-auto">
            <h1 className="text-5xl font-bold text-white text-center mb-8 overflow-hidden">Simuladores+</h1>

            <div className="grid place-items-center sm:grid-cols2 md:grid-cols-3 lg:grid-cols-6 space-x-4 pb-4 overflow-y-auto">
                {movieCatalog.map((movie, index) => (
                    <MovieCard
                        key={index}
                        movieTitle={movie}
                    ></MovieCard>
                    ))}
            </div>

            <footer className="mt-auto text-center text-gray-500">
                &copy; 2024 Simuladores+. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default Home;
