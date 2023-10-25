import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = (props) => {
    const movie = props.movie

    return (
        <>
            <Typography variant="h5" component="h3">
                Overview
            </Typography>

            <Typography variant="h6" component="p">
                {movie.overview}
            </Typography>
            {/* 显示电影类型 */}
            <Paper
                component="ul"
                sx={{ ...root }}
            >
                <li>
                    <Chip label="Genres" sx={{ ...chip }} color="primary" />
                </li>
                {movie.genres.map((g) => (
                    <li key={g.name}>
                        <Chip label={g.name} sx={{ ...chip }} />
                    </li>
                ))}
            </Paper>
            {/* 显示电影其他信息 */}
            <Paper component="ul" sx={{ ...root }}>
                {/* 运行时间 */}
                <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
                {/* 票房收入 */}
                <Chip
                    icon={<MonetizationIcon />}
                    label={`${movie.revenue.toLocaleString()}`}
                />
                {/* 评分 */}
                <Chip
                    icon={<StarRate />}
                    label={`${movie.vote_average} (${movie.vote_count}`}
                />
                {/* 发布时间 */}
                <Chip label={`Released: ${movie.release_date}`} />

            </Paper>

            {/* This is what I added! */}
            {/* 换行展示国家信息 */}
            <Paper component="ul" sx={{ ...root }}>
                <li>
                    <Chip label="Production Countries" sx={{ ...chip }} color="primary" />
                </li>
                {movie.production_countries.map((c) => (
                    <li key={c.name}>
                        <Chip label={c.name} sx={{ ...chip }} />
                    </li>
                ))}
            </Paper>
            <Fab
                color="secondary"
                variant="extended"
                sx={{
                    position: "fixed",
                    bottom: 2,
                    right: 2
                }}
            >
                <NavigationIcon />
                Reviews
            </Fab>
        </>
    );
};
export default MovieDetails;