'use client';

import Head from 'next/head';
import VideoPlayer from "@/app/components/VideoPlayer";

export default function Home() {

    const videoSrc = 'localhost:8080/1911/outputlist.m3u8';

    return (
        <div>
            <Head>
                <title>Reproductor HLS</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">Reproductor de Video HLS</h1>
                <VideoPlayer videoSrc={videoSrc}/>
            </main>
        </div>
    );
}
