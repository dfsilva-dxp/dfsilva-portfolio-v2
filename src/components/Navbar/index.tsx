import { useEffect, useState } from "react";

import Container from "../Container";
import Link from "../Link";
import Logo from "../Logo";

import * as S from "./styles";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [navSize, setNavSize] = useState("5rem");
  const [navColor, setNavColor] = useState("transparent");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#343642") : setNavColor("transparent");
    window.scrollY > 10 ? setNavSize("3.75rem") : setNavSize("5rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <S.Bar navSize={navSize} navColor={navColor}>
      <Container>
        <S.Nav>
          <NavLink to="/">
            <Logo aria-label="Daniel Silva" />
          </NavLink>

          <S.Links>
            <li>
              <Link path="/about" label="Quem sou" isUppercase />
            </li>
            <li>
              <Link path="/cases" label="Cases" isUppercase />
            </li>
          </S.Links>
        </S.Nav>
      </Container>
    </S.Bar>
  );
};

export default Navbar;
