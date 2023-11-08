// components/ui
export interface LabelProps {
  className?: string;
  htmlFor: string;
  children?: React.ReactNode;
}

export interface InputProps {
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

