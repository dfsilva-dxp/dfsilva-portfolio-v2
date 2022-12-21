import { ItemProps } from "./item";

import * as S from "./styles";

const linkItem = ({ isUppercase, before, after, ...props }: ItemProps) => {
  return (
    <S.Wrap {...props}>
      <S.Icon isUppercase={isUppercase}>
        <span className="before">{before}</span>
        <span className="after">{after}</span>
      </S.Icon>
    </S.Wrap>
  );
};

export default linkItem;
