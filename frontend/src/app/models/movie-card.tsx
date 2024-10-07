import Link from "next/link";

type propsType = {
    movieTitle: string,
}

const MovieCard = (props: propsType)=> {
    return (
        <div className="py-3">
            <Link href={{
                pathname: '/player',
                query: {
                    name: props.movieTitle
                }}}>
                <div
                    className="bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer h-[340px]">
                    <img
                        src={`http://${process.env.NEXT_PUBLIC_API_URL}/cover?name=${props.movieTitle}`}
                        alt={props.movieTitle}
                        width={200}
                        height={260}
                        className="object-cover w-[200px] h-[260px]"
                    />
                    <div className="grid place-content-center text-center h-20 p-2 max-w-[200px]">
                        <h2 className="text-lg font-semibold text-white">{props.movieTitle.replaceAll('_', ' ')}</h2>
                        {/*<p className="text-gray-400">{movie.year}</p>*/}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;