// import React from "react";
import MovieHeader from "../components/headerMovie/";
import MovieDetails from "../components/movieDetails/";
import Grid from "@mui/material/Grid";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const MoviePage = (props) => {
    // 允许组件从浏览器的参数化 URL 地址中提取电影 id
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [images, setImages] = useState([]);

    //使用API电影端点获取电影完整信息
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
        )
            .then((res) => {
                return res.json();
            })
            .then((movie) => {
                // console.log(movie)
                setMovie(movie);
            });
    }, [id]);

    // 获取同一部电影的图像集
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
        )
            .then((res) => res.json())
            .then((json) => json.posters)
            .then((images) => {
                // console.log(images)
                setImages(images);
            });
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {movie ? (
                <>
                    <MovieHeader movie={movie} />
                    <Grid container spacing={5} style={{ padding: "15px" }}>
                        <Grid item xs={3}>
                            <div sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "space-around",
                            }}>
                                <ImageList
                                    cellHeight={500}
                                    sx={{
                                        height: "100vh",
                                    }}
                                    cols={1}
                                >
                                    {images.map((image) => (
                                        <ImageListItem
                                            key={image.file_path}
                                            cols={1}
                                        >
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                                                alt={image.file_path}
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <MovieDetails movie={movie} />
                        </Grid>
                    </Grid>
                </>
            ) : (
                <h2>Waiting for API data</h2>
            )}
        </>
    );
};

export default MoviePage;