package main

import (
	"log"
	"net/http"
	"os"
	"encoding/json"
	"path/filepath"
)


const moviesDir = "movies"

func main() {
	const port = 8080

	http.Handle("/", addHeaders(http.FileServer(http.Dir(moviesDir))))
	http.HandleFunc("/catalog", addHeaders(http.HandlerFunc(getCovers)))
	http.HandleFunc("/cover", addHeaders(http.HandlerFunc(getCoverImage)))
	log.Printf("Serving HLS files from directory '%s' on port %d\n", moviesDir, port)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func addHeaders(h http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		h.ServeHTTP(w, r)
	}
}

func getCovers(w http.ResponseWriter, r *http.Request) {
	// Open the directory
	files, err := os.ReadDir(moviesDir)
	if err != nil {
		http.Error(w, "Unable to read directory", http.StatusInternalServerError)
		return
	}

	var covers []string
	for _, file := range files {
		if file.IsDir() {
			covers = append(covers, file.Name())
		}
	}

	// Return the list of images as JSON
	json.NewEncoder(w).Encode(covers)
}

func getCoverImage(w http.ResponseWriter, r *http.Request) {
	movieName := r.URL.Query().Get("name")
	coverPath := filepath.Join(moviesDir, movieName, "cover.jpg")

	// Checks if the movie cover exists
	if _, err := os.Stat(coverPath); err == nil {
		http.ServeFile(w, r, coverPath)
	} else {
		http.Error(w, "Cover image not found", http.StatusNotFound)
	}
}
