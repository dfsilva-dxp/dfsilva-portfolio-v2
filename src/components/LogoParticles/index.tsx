import useWindowSize from "@rooks/use-window-size";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce
} from "react-particle-image";

import logo from "../../assets/logo.svg";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 5;
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  color: ({ x, y, image }) => "#020015",
  radius: () => Math.random() * 0.5 + 0.5,
  mass: () => 10,
  friction: () => 0.35,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

const LogoParticles = () => {
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <ParticleImage
      src={logo}
      width={Number(innerWidth)}
      height={Number(innerHeight)}
      scale={1}
      entropy={0.15}
      maxParticles={30000}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="#CB7F65"
    />
  );
};

export default LogoParticles;
