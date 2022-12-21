import { HTMLAttributes, ReactNode } from "react";

type ItemTypes =
  | HTMLDivElement<HTMLAttributes>
  | AnchorHTMLAttributes<HTMLAnchorElement>;

export type ItemProps = {
  isUppercase?: boolean;
  before: ReactNode;
  after: ReactNode;
} & ItemTypes;
