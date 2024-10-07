package main

import (
	"log"
	"net/http"
	"os"
	"encoding/json"
	"path/filepath"
)


const moviesDir = "movies"
const videosDir = "videos"

func main() {
	const port = 8080

	// Handler for playlist.m3u8 file inside each movie folder.
	http.Handle("/movie/", addHeaders(http.StripPrefix("/movie/", http.FileServer(http.Dir(moviesDir)))))
	
	// Handler for get movie catalog (all movies) and get the cover jpg image.
	http.HandleFunc("/catalog", addHeaders(http.HandlerFunc(getMovies)))
	http.HandleFunc("/movie-cover", addHeaders(http.HandlerFunc(getMovieCoverImage)))

	// Handler for playlist.m3u8 file inside each video folder.
	http.Handle("/video/", addHeaders(http.StripPrefix("/video/", http.FileServer(http.Dir(videosDir)))))
	
	// Handler for get all videos and it's cover.
	http.HandleFunc("/videos", addHeaders(http.HandlerFunc(getVideos)))
	http.HandleFunc("/video-cover", addHeaders(http.HandlerFunc(getVideoCoverImage)))
	

	log.Printf("Serving HLS files from directory '%s' on port %d\n", moviesDir, port)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func addHeaders(h http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		h.ServeHTTP(w, r)
	}
}

func getMovies(w http.ResponseWriter, r *http.Request) {
	// Open the directory
	files, err := os.ReadDir(moviesDir)
	if err != nil {
		http.Error(w, "Unable to read directory", http.StatusInternalServerError)
		return
	}

	var movies []string
	for _, file := range files {
		if file.IsDir() {
			movies = append(movies, file.Name())
		}
	}

	// Return the list of images as JSON
	json.NewEncoder(w).Encode(movies)
}

func getMovieCoverImage(w http.ResponseWriter, r *http.Request) {
	movieName := r.URL.Query().Get("name")
	coverPath := filepath.Join(moviesDir, movieName, "cover.jpg")

	// Checks if the movie cover exists
	if _, err := os.Stat(coverPath); err == nil {
		http.ServeFile(w, r, coverPath)
	} else {
		http.Error(w, "Cover image not found", http.StatusNotFound)
	}
}

func getVideos(w http.ResponseWriter, r *http.Request) {
	files, err := os.ReadDir(videosDir)
	if err != nil {
		http.Error(w, "Unable to read directory", http.StatusInternalServerError)
		return
	}

	var videos []string
	for _, file := range(files) {
		if (file.IsDir()) {
			videos = append(videos, file.Name())
		}
	}

	json.NewEncoder(w).Encode(videos)
}

func getVideoCoverImage(w http.ResponseWriter, r *http.Request) {
	videoName := r.URL.Query().Get("name")
	coverPath := filepath.Join(videosDir, videoName, "cover.jpg")

	if _, err := os.Stat(coverPath); err == nil {
		http.ServeFile(w, r, coverPath)
	} else {
		http.Error(w, "Cover image not found", http.StatusNotFound)
	}

}
