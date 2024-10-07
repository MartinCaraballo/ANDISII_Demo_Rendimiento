'use client';

import Hls from "hls.js"
import { useEffect, useRef } from "react";

const MoviePlayer = ({ searchParams, }: { searchParams: { name: string }}) => {
    const videoSource = `http://${process.env.NEXT_PUBLIC_API_URL}/${searchParams.name}/playlist.m3u8`;
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const hls = new Hls();
        if (Hls.isSupported()) {
            hls.loadSource(videoSource);

            if (videoRef.current) {
                hls.attachMedia(videoRef.current);
            }
        }
        return () => {
            hls.destroy();
        };
    }, [videoSource]);

    return (
        <>
            <video controls ref={videoRef} className="w-full max-w-4xl mx-auto mt-20"></video>
        </>
    );
}

export default MoviePlayer;