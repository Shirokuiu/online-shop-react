export type Props = {
  from?: number;
  to?: number;
  onAfterChange?: (sliderPriceEvt: SliderPriceEvt) => void;
};

export type SliderPriceEvt = {
  from: number;
  to: number;
};
