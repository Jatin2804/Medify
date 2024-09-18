import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./card.css"

export default function ActionAreaCard({imageSrc,name,specialist}) {
  return (
    <Card sx={{ minWidth:"365px",maxWidth: "fit-content", height:"450px",width:"365"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="365px"
          width="100%"
          image={imageSrc}
          alt="Loading..."
          sx={{bgcolor:"#2AA7FF",borderRadius:"50% 50% 0px 0px",
            
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
         Dr.{name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
           {specialist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
