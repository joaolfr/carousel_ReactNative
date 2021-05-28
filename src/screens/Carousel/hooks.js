import {useState, useEffect} from 'react';
import {useCarouselStore} from '../../stores';

export default () => {
  const {currentPage, sliderData, nextStep, previousStep} = useCarouselStore();

  return {
    currentPage,
    sliderData,
    nextStep,
    previousStep,
  };
};
