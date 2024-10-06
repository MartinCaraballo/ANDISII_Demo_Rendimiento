'use client';

import Hls from "hls.js"
import { useEffect, useRef } from "react";

export default function Home() {
    const videoSource = "http://localhost:8080/1911/outputlist.m3u8";
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const hls = new Hls();
        if (Hls.isSupported()) {
            hls.loadSource(videoSource);

            if (videoRef.current) {
                hls.attachMedia(videoRef.current);
            }
        }
    }, []);

    return (
        <>
            <video controls ref={videoRef} className="w-full max-w-4xl mx-auto mt-20"></video>
        </>
    );
}
