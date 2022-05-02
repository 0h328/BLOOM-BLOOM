import React from 'react';
import Layout from './styles';
import { Card, CardMedia } from '@mui/material';

function Stalk() {

  return (
    <Layout>
      <div className="select_items">
        <Card className="stalk_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/stalk1.png"
          />
        </Card>
        <Card className="stalk_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/stalk2.png"
          />
        </Card>
        <Card className="stalk_image" sx={{ maxWidth: 100 }}>
          <CardMedia 
            component="img"
            height="100"
            image="/images/stalk3.png"
          />
        </Card>
      </div>
    </Layout>
  )
}

export default Stalk;