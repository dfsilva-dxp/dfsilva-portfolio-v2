import { Container, Glitch } from "../components";

const Home = () => {
  return (
    <Container>
      <Glitch />
      <p style={{ padding: "40px 0", zIndex: 10, position: "relative" }}>
        Home
      </p>
    </Container>
  );
};

export default Home;
