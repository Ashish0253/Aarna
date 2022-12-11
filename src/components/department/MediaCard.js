import * as React from "react";
import {
  CardActionArea,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} raised="true">
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          // width="20"
          src={props.src}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained">Book Your Test</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
