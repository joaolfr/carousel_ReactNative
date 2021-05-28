import createStore from 'zustand';
import SliderData from './SliderData';

const initialState = {
  sliderData: [],
  currentPage: 0,
};

const [useCarouselStore] = createStore((set, get) => ({
  ...initialState,

  setSliderData:(data) => set(state => ({...state, sliderData:data})),
  nextStep: () =>
    set(state => ({...state, currentPage: state.currentPage + 1})),
  previousStep: () =>
    set(state => ({...state, currentPage: state.currentPage - 1})),
}));

export default useCarouselStore;
