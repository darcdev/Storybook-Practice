import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'medium' | 'large';
};

export const Button = ({
  variant = 'primary',
  size = 'small',
  children,
  ...props
}: ButtonProps) => {
  const className = clsx(styles.button, styles[`button-${variant}`], styles[size]);
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};
