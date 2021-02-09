import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  title: {
    backgroundImage: 'linear-gradient(135deg, purple, orange)', color: 'white'
  },
  text: {
    fontWeight: 'bold'
  }
});

const Movie = ({movie}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation="10">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Movie Poster"
          height="300"
          image={movie.Poster}
        />
        <CardContent className={classes.title}>
          <Typography variant="subtitle2" display="block" gutterBottom className={classes.text} >
            {movie.Title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Movie;