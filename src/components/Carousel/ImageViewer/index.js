import React from 'react';
import {Wrapper, Title, Image} from './styles';

const ImageViewer = ({sliderData}) => {
  return (
    <Wrapper>
      <Title>ImageViewer</Title>
      {sliderData.map((item, index) => (
        <Image
          key={index}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXY_UnIwLX0P-uJvEB2hKVbANNwckyj__gDw&usqp=CAU',
          }}
        />
      ))}
    </Wrapper>
  );
};

export default ImageViewer;
