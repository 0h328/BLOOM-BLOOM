import React from 'react';
import Layout from './styles';
import { Card, CardMedia } from '@mui/material';

function Ribbon() {
    
  return (
    <Layout>
      <div className="select_items">
        <Card className="ribbon_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/ribbon1.png"
          />
        </Card>
        <Card className="ribbon_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/ribbon2.png"
          />
        </Card>
        <Card className="ribbon_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/ribbon3.png"
          />
        </Card>
        <Card className="ribbon_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/ribbon4.png"
          />
        </Card>
        <Card className="ribbon_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/ribbon5.png"
          />
        </Card>
        <Card className="ribbon_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/ribbon6.png"
          />
        </Card>
        <Card className="ribbon_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/ribbon7.png"
          />
        </Card>
        <Card className="ribbon_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/ribbon8.png"
          />
        </Card>
      </div>
    </Layout> 
  )
}

export default Ribbon;