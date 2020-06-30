define("redturtle-patterns-slider", [
  "jquery",
  "pat-base",
  "collective-slick-js"
], function($, Base) {
  "use strict";
  var Slider = Base.extend({
    name: "slider",
    trigger: ".pat-slider",
    parser: "mockup",
    defaults: {
      dots: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      lazyLoad: "ondemand"
    },
    init: function() {
      var _this = this;
      _this.$el.slick(_this.options);

      var event = new CustomEvent("patSliderInit", { detail: _this.$el[0] });
      document.dispatchEvent(event);
    }
  });

  return Slider;
});
