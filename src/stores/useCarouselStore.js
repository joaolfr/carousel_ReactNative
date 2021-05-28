import createStore from 'zustand';
import SliderData from './SliderData';

const initialState = {
  sliderData: SliderData,
  currentPage: 0,
};

const [useCarouselStore] = createStore((set, get) => ({
  ...initialState,

  nextStep: () =>
    set(state => ({...state, currentPage: state.currentPage + 1})),
  previousStep: () =>
    set(state => ({...state, currentPage: state.currentPage - 1})),
}));

export default useCarouselStore;
