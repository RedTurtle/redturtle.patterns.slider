import { BasePattern } from "@patternslib/patternslib/src/core/basepattern";
import Parser from "@patternslib/patternslib/src/core/parser";
import registry from "@patternslib/patternslib/src/core/registry";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import $ from "jquery";

export const parser = new Parser("slider");

class Pattern extends BasePattern {
  static name = "slider";
  static trigger = ".pat-slider";
  static parser = parser;

  static defaults = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    lazyLoad: "ondemand",
  };

  async init() {
    import("./slider.scss");
    console.log("Initializing slider with options:", this.options);

    const aaa = $(this.el).slick(this.options);
    console.log("Slick slider initialized:", aaa);
    const event = new CustomEvent("patSliderInit", { detail: this.el });
    document.dispatchEvent(event);
  }
}

registry.register(Pattern);
export default Pattern;
export { Pattern };
