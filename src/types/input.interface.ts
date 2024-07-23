interface GeneralInputProps {
  type?: string;
  value: string;
  placeholder?: string;
  name?: string;
  readonly?: boolean;
  styleClass?: string;
}

export interface BasicInputProps extends GeneralInputProps {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IconInputProps extends BasicInputProps {
  icon: React.ReactElement;
}

export interface LabelledInputProps extends BasicInputProps {
  label: string;
  id: string;
}

export interface SelectInputProps extends LabelledInputProps {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

export interface DateInputProps extends LabelledInputProps {
  onDateChange: (date: Date | null) => void;
}
