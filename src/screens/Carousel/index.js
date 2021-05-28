import React from 'react';
import {Wrapper} from './styles';
import useCarousel from './hooks';
import {Pager, ImageViewer} from '../../components/Carousel';
import {ActivityIndicator} from 'react-native'

const Carousel = () => {
  const {currentPage, nextStep, previousStep, sliderData, rightDisabled, leftDisabled, loading} = useCarousel();

  return (
    <Wrapper>
      {loading && <ActivityIndicator size={30} color="#000" />}
      {!loading && (
      <>
        {sliderData.map((item, index) => (

        <ImageViewer key={index} index={index} currentPage={currentPage} sliderData={item.images} />
        ))}
        <Pager nextStep={nextStep} previousStep={previousStep} rightDisabled={rightDisabled} leftDisabled={leftDisabled} sliderData={sliderData} currentPage={currentPage} />
      </>
      )}
    </Wrapper>
  );
};

export default Carousel;
