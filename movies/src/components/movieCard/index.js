import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'

// 导出组件便于使用
export default function MovieCard(props) {
    const movie = props.movie;
    return (
        //电影卡片外部容器
        <Card sx={{ maxWidth: 345 }}>
            {/* 电影标题 */}
            <CardHeader title={movie.title} />
            {/* 电影的海报，如果path存在则加载海报，不然使用占位图像 */}
            <CardMedia
                sx={{ height: 500 }}
                image={
                    movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : img
                }
            />
            {/* 包含电影相关其他信息 */}
            <CardContent>
                {/* grid组件分割内容，一部分展示上映日期，一部分显示平均分 */}
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <CalendarIcon fontSize="small" />
                            {movie.release_date}
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="p">
                            <StarRateIcon fontSize="small" />
                            {"  "} {movie.vote_average}{" "}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            {/* 卡片操作部分 */}
            <CardActions disableSpacing>
                {/* 包含收藏按钮，目前为空 */}
                <IconButton aria-label="add to favorites" onClick={null}>
                    <FavoriteIcon color="primary" fontSize="large" />
                </IconButton>
                {/* 提供更多电影信息的内容 */}
                <Button variant="outlined" size="medium" color="primary">
                    More Info ...
                </Button>
            </CardActions>
        </Card>
    );
}