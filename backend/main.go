package main

import (
	"log"
	"net/http"
)

func main() {
	const port = 8080
	const hlsDir = "movies"

	http.Handle("/", addHeaders(http.FileServer(http.Dir(hlsDir))))
	// http.Handle("/catalog", addHeaders(getMovieTitles(hlsDir)))
	log.Printf("Serving HLS files from directory '%s' on port %d\n", hlsDir, port)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func addHeaders(h http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		h.ServeHTTP(w, r)
	}
}

// func getMovieTitles(w http.ResponseWriter, r *http.Request) {
// 	var movies []string
//
//
// }
