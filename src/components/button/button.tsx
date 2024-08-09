import { ComponentProps } from 'react';

import { variants, type ButtonVariants } from './button-variants.ts';

type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    size?: 'small' | 'medium' | 'large';
  };

export const Button = ({
  variant = 'primary',
  size = 'small',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={variants({ variant, size })} {...props}>
      {children}
    </button>
  );
};
