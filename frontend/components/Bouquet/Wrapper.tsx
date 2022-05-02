import React from 'react';
import Layout from './styles';
import { Card, CardMedia } from '@mui/material';

function Wrapper() {

  return (
    <Layout>
      <div className="select_items">
        <Card className="wrapper_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/Wrapper1.png"
          />
        </Card>
        <Card className="wrapper_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/Wrapper2.png"
          />
        </Card>
        <Card className="wrapper_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/Wrapper3.png"
          />
        </Card>
        <Card className="wrapper_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/Wrapper4.png"
          />
        </Card>
        <Card className="wrapper_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/Wrapper5.png"
          />
        </Card>
        <Card className="wrapper_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/Wrapper6.png"
          />
        </Card>
        <Card className="wrapper_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/Wrapper7.png"
          />
        </Card>
        <Card className="wrapper_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/Wrapper8.png"
          />
        </Card>
      </div>
    </Layout>
  )
}


export default Wrapper;