import { IGlitchProps } from "./glitch";

import * as S from "./styles";

const Glitch = ({ columns = "one" }: IGlitchProps) => {
  return <S.Grid columns={columns} />;
};

export default Glitch;
