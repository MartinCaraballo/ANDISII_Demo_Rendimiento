'use client';

import Hls from "hls.js"
import { useEffect, useRef } from "react";

type searchParams = {
    name: string
}

const Player = ({ name }: searchParams) => {
    const videoSource = `http://${process.env.NEXT_PUBLIC_API_URL}/${name}/outputlist.m3u8`;
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

export default Player;