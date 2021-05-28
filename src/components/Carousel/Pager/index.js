import React from 'react';
import {Wrapper,  LeftArrow, RightArrow, PagerWrapper, PagerMarker} from './styles';

const Pager = ({nextStep, previousStep, rightDisabled, leftDisabled, sliderData, currentPage}) => {

  return (
    <Wrapper>
      <LeftArrow onPress={() => leftDisabled ? null : previousStep()} disabled={leftDisabled} />
      <PagerWrapper>
        {sliderData.map((item,index) => (
          <PagerMarker key={index} status={currentPage === index ? 'active' : currentPage > index ? 'passed' : 'next'} />
        ))}
      </PagerWrapper>
      <RightArrow onPress={() => rightDisabled ? null : nextStep()} disabled={rightDisabled}/>
    </Wrapper>
  );
};

export default Pager;
