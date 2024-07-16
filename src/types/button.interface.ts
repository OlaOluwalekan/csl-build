interface GeneralBtnProps {
  type?: "submit" | "reset" | "button";
  text?: string;
}

export interface BasicBtnProps extends GeneralBtnProps {
  onClick?: () => void;
}
