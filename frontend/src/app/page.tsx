import Image from 'next/image';
import Link from 'next/link';

interface Movie {
    title: string;
    year: number;
    poster: string;
}

const Home: React.FC = () => {
    const movies: Movie[] = [
        { title: "Inception", year: 2010, poster: "/inception.jpg" },
        { title: "Interstellar", year: 2014, poster: "/interstellar.jpg" },
        { title: "The Matrix", year: 1999, poster: "/matrix.jpg" },
        { title: "The Shawshank Redemption", year: 1994, poster: "/shawshank.jpg" },
        { title: "Fight Club", year: 1999, poster: "/fightclub.jpg" },
        { title: "Pulp Fiction", year: 1994, poster: "/pulpfiction.jpg" },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-900 p-6">
            <h1 className="text-5xl font-bold text-white text-center mb-8">Simuladores+</h1>

            <div className="flex overflow-x-auto space-x-4 pb-4">
                {movies.map((movie, index) => (
                    <Link key={index}
                          href={{
                            pathname: '/player',
                            query: {
                                name: movie.title
                            }
                        }}
                    >
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
                            <Image
                                src={movie.poster}
                                alt={movie.title}
                                width={192}
                                height={288}
                                className="object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-white">{movie.title}</h2>
                                <p className="text-gray-400">{movie.year}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <footer className="mt-auto text-center text-gray-500">
                &copy; 2024 Simuladores+. Todos los derechos reservados.
            </footer>
        </div>
    );
};

export default Home;
