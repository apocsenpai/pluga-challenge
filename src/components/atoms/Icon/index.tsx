import { ElementType } from 'react';

interface IIcon {
  icon: ElementType;
  color?: string;
  size?: number;
  strokeWidth?: number;
}

export const Icon = ({ icon: Icon, ...props }: IIcon) => <Icon {...props} />;
