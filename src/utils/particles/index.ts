import {
  ParticleForce,
  ParticleOptions,
  Vector,
  forces
} from "react-particle-image";

export const particleOptions: ParticleOptions = {
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

export const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};
