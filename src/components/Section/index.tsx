import { ISectionProps } from "./section";

import * as S from "./styles";

const Section = ({ children }: ISectionProps) => {
  return <S.Content>{children}</S.Content>;
};

export default Section;
