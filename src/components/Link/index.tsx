import { ILinkProps } from "./link";

import * as S from "./styles";

const Link = ({ path, isUppercase = false, label }: ILinkProps) => {
  return (
    <S.Wrap isUppercase={isUppercase}>
      <S.Link to={path} data-label={label} />
    </S.Wrap>
  );
};

export default Link;
