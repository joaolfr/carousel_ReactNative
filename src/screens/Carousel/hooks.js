import {useState, useEffect} from 'react';
import {useCarouselStore} from '../../stores';
import {useLazyFetch} from '../../services/hooks'

export default () => {
  const {currentPage, sliderData, nextStep, previousStep, setSliderData} = useCarouselStore();

  const [rightDisabled, setRightDisabled] = useState(false)
  const [leftDisabled, setLeftDisabled] = useState(true)

  //data fetch
  const [searchImages, {loading, error}] = useLazyFetch({
    url:'/data',
    method:"GET"
  })

  //effect

  useEffect(() => {

    async function fetchAPI(){

      const data = await searchImages()
      console.log("data images: ", data[0].data)
      setSliderData(data[0].data)
    }

    fetchAPI()
  },[])

  useEffect(() => {
      if(currentPage === 0){setLeftDisabled(true)}else{setLeftDisabled(false)}
      if(currentPage === sliderData.length - 1){setRightDisabled(true)}else{setRightDisabled(false)}
  }, [currentPage])

  return {
    currentPage,
    sliderData,
    nextStep,
    previousStep,
    rightDisabled,
    leftDisabled,
    loading,
    error
  };
};
