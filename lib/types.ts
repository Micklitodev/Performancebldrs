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
  value?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FormData {
  email: string;
  name: string;
  message: string;
}
