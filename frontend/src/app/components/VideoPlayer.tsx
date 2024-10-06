import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
    videoSrc: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        // Inicializa el reproductor
        const player = videojs(videoRef.current as HTMLVideoElement, {
            autoplay: false,
            controls: true,
            responsive: true,
            fluid: true,
            sources: [{
                src: videoSrc, // Asegúrate de que sea una URL válida para un archivo .m3u8
                type: 'application/x-mpegURL', // Esto es correcto para HLS
            }],
        });

        // Limpia el reproductor al desmontar el componente
        return () => {
            if (player) {
                player.dispose();
            }
        };
    }, [videoSrc]);

    return (
        <div data-vjs-player className="w-full max-w-3xl mx-auto mt-8">
            <video
                ref={videoRef}
                className="video-js vjs-big-play-centered"
                controls
            />
        </div>
    );
};

export default VideoPlayer;