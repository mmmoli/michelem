import { FC } from 'react';

export const H1: FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  ...props
}) => (
  <h1
    className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl font-heading"
    {...props}
  >
    {children}
  </h1>
);
