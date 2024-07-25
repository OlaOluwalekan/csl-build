interface GeneralBtnProps {
  type?: "submit" | "reset" | "button";
  text?: string;
  disabled?: boolean;
}

export interface BasicBtnProps extends GeneralBtnProps {
  onClick?: () => void;
  styleClass?: string;
}

export interface LinkBtnProps extends GeneralBtnProps {
  href: string;
}

export interface OutlineBtnProps extends BasicBtnProps {
  classStyles?: string;
}
