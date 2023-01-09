import { createElement, DOMAttributes, FC, PropsWithChildren } from "react";

type OnHandler = Omit<DOMAttributes<any>, "dangerouslySetInnerHTML" | "children">;

interface TypographyProps extends OnHandler {
  text?: string;
  variant?: FC | keyof JSX.IntrinsicElements;
}

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  variant,
  text,
  children,
  ...props
}) => {
  return createElement<any>(variant || "h1", { ...props }, children ? children : text);
};
