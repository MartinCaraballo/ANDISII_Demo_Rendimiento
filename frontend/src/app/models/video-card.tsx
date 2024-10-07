import Link from "next/link";

type propsType = {
    videoTitle: string,
}

const VideoCard = (props: propsType)=> {
    return (
        <div className="py-3">
            <Link href={{
                pathname: '/player',
                query: {
                    name: `video/${props.videoTitle}`
                }}}>
                <div
                    className="bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer h-[340px]">
                    <img
                        src={`http://${process.env.NEXT_PUBLIC_API_URL}/video-cover?name=${props.videoTitle}`}
                        alt={props.videoTitle}
                        width={200}
                        height={260}
                        className="object-cover w-[300px] 2xl:w-[400px] h-[260px]"
                    />
                    <div className="grid place-content-center text-center h-20 p-2 max-w-[200px]">
                        <h2 className="text-lg font-semibold text-white">{props.videoTitle.replaceAll('_', ' ')}</h2>
                        {/*<p className="text-gray-400">{movie.year}</p>*/}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default VideoCard;