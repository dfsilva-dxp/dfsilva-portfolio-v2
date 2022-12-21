import ParticleImage from "react-particle-image";
import { useWindowSize } from "usehooks-ts";

import { motionForce, particleOptions } from "../../utils/particles";

import logo from "../../assets/logo.svg";

const LogoParticles = () => {
  const { width, height } = useWindowSize();

  return (
    <ParticleImage
      aria-label="Logo Particles"
      src={logo}
      width={width}
      height={height - 120}
      scale={1}
      entropy={0.15}
      maxParticles={30000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="transparent"
    />
  );
};

export default LogoParticles;
