import React from 'react';
import {Text, Image} from 'react-native';
import {Wrapper} from './styles';
import useCarousel from './hooks';
import {Pager, ImageViewer} from '../../components/Carousel';

const Carousel = () => {
  const {currentPage, nextStep, previousStep, sliderData} = useCarousel();

  return (
    <Wrapper>
      <ImageViewer sliderData={sliderData} />
      <Pager />
    </Wrapper>
  );
};

export default Carousel;
