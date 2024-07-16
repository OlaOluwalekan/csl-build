interface GeneralInputProps {
  type?: string;
  value: string;
  placeholder: string;
  name?: string;
}

export interface BasicInputProps extends GeneralInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
