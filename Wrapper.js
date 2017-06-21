import $ from 'jquery2'; // no window global prop with jquery 2
import 'round-slider/dist/roundslider.min';

export default {
  template: '<div>A custom component!</div>',
  mounted: function () {
    console.log('created');
    console.log(this.$el);
    $(this.$el).roundSlider({
        sliderType: 'min-range',
        value: 40
    });
  }
};