import type { PropsWithChildren } from 'react';
import { type CalloutVariant, variants } from './callout-variant.ts';

type CalloutProps = PropsWithChildren<CalloutVariant> & { title: string };

export const Callout = ({ children, title, variant }: CalloutProps) => {
  return (
    <div className={variants({ variant })}>
      <h2 className="font-semibold">{title}</h2>
      <p>{children}</p>
    </div>
  );
};
