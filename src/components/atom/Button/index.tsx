import { ButtonHTMLAttributes, ForwardedRef, ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { type VariantProps } from 'tailwind-variants';

import { fixedForwardRef } from '@/components/helpers';
import { cn } from '@/utils/helpers';

import { buttonVariant, type ButtonVariantProps } from './styles';

type ButtonProps = {
  appendIcon?: ReactNode;
  prependIcon?: ReactNode;
  loader?: ReactNode;
  loadingPlacement?: 'start' | 'end';
  isPending?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<ButtonVariantProps>;

const UnwrappedButton = (props: ButtonProps, ref: ForwardedRef<any>) => {
  const {
    block,
    circled,
    children,
    className,
    color,
    appendIcon,
    isPending,
    loader = <Loader2 className="size-4 animate-spin" />,
    loadingPlacement = 'start',
    size,
    prependIcon,
    variant,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      ref={ref}
      className={cn(
        buttonVariant({ block, circled, className, color, size, variant })
      )}
    >
      <>
        {!isPending && prependIcon}
        {isPending && loadingPlacement === 'start' && loader}
        {children}
        {isPending && loadingPlacement === 'end' && loader}
        {!isPending && appendIcon}
      </>
    </button>
  );
};

export const Button = fixedForwardRef(UnwrappedButton);
