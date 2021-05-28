import React from 'react';
import {Wrapper, Title, Image} from './styles';

const ImageViewer = ({index, currentPage, sliderData}) => {
  return (
    <Wrapper >
      {currentPage === index && (

        sliderData.map((item, index) => (
          <Image
          key={index}
          source={{
            uri: `${item}`,
          }}
          />
          )))}
    </Wrapper>
  );
};

export default ImageViewer;
