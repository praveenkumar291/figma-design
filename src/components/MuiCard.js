import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function MultiActionAreaCard({ mediaCard }) {
  return (
    <Card
      sx={{
        maxWidth: 230,
        borderRadius: "15px",
        minHeight: 300,
        position: "relative",
      }}
    >
      <CardActionArea>
        {mediaCard.image && (
          <CardMedia
            component="img"
            height="140px"
            image={mediaCard.image}
            alt="green iguana"
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {mediaCard.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {mediaCard.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          borderTop: "1px solid #b3afaf",
          position: "absolute",
          bottom: "0",
          left: "0",
          right: "0",
        }}
      >
        <Button sx={{ margin: "auto", textAlign: "center" }}>
          {mediaCard.button}
          {mediaCard.button === "Explore" && <OpenInNewIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}
