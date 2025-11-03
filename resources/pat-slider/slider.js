import { BasePattern } from "@patternslib/patternslib/src/core/basepattern";
import Parser from "@patternslib/patternslib/src/core/parser";
import registry from "@patternslib/patternslib/src/core/registry";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

export const parser = new Parser("slider");
parser.addArgument("dots", true);
parser.addArgument("slidesToShow", 1);
parser.addArgument("slidesToScroll", 1);
parser.addArgument("focusOnSelect", true);
//parser.addArgument("centerMode", true);
parser.addArgument("infinite", true);
parser.addArgument("lazyLoad", "ondemand");
parser.addArgument("initialSlide", 0);
parser.addArgument("responsive", [
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
]);

class Pattern extends BasePattern {
  static name = "slider";
  static trigger = ".pat-slider";
  static parser = parser;

  async init() {
    import("./slider.scss");
    console.log(
      "Initializing slider with options:",
      this.options,
      "parser",
      parser,
    );

    const aaa = $(this.el).slick(this.options);
    console.log("Slick slider initialized:", aaa, this.options);
    const event = new CustomEvent("patSliderInit", { detail: this.el });
    document.dispatchEvent(event);
  }
}

registry.register(Pattern);
export default Pattern;
export { Pattern };
