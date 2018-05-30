import React from 'react';
import { Card, Image } from 'semantic-ui-react';


const Photo = (props) => {
  return (
    <div>
      <Card.Group className='ui four column doubling stackable grid container centered'> {
        props.photos.map((photo, index) => (  
          <Card key={index} >
            <Image src={photo.media.m} />
            <Card.Content >
              <Card.Description>{photo.title}</Card.Description> 
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default Photo;

