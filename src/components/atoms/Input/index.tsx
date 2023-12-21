import { InputHTMLAttributes } from 'react';
import { Input as InputText } from './index.styled';

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  $focused: boolean;
}

export const Input = ({ $focused, ...props }: IInput) => (
  <InputText $focused={$focused} {...props} />
);
