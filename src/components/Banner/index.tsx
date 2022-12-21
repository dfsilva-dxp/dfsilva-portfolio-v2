import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

import bg from "../../assets/background.svg";
import hd from "../../assets/headline.svg";
import fg from "../../assets/foreground.svg";

import * as S from "./styles";

const Banner = () => {
  const background: BannerLayer = {
    image: bg,
    // translateY: [0, 50],
    // opacity: [1, 0.3],
    scale: [1.02, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const headline: BannerLayer = {
    image: hd,
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const display: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <S.Inset>
        <S.Center>
          <S.Title>Artista de Pixel</S.Title>
          <S.Subtitle>or Front-end Developer</S.Subtitle>
        </S.Center>
      </S.Inset>
    )
  };

  const foreground: BannerLayer = {
    image: fg,
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <S.Inset />
  };

  return (
    <S.Wrapper>
      <ParallaxBanner
        layers={[background, headline, display, foreground, gradientOverlay]}
        style={{ height: "100vh" }}
      />
    </S.Wrapper>
  );
};

export default Banner;
