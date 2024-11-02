import { ComponentPropsWithRef, ForwardedRef } from 'react';
import { type VariantProps } from 'tailwind-variants';

import { DistributiveOmit, fixedForwardRef } from '@/components/helpers';
import { cn } from '@/utils/helpers';

import { textVariant, TextVariantProps } from './styles';

type TextTag = 'p' | 'div' | 'span';

type TextProps<TAs extends TextTag> = {
  component?: TAs;
} & DistributiveOmit<
  ComponentPropsWithRef<TextTag extends TAs ? 'p' : TAs>,
  'component'
> &
  VariantProps<TextVariantProps>;

const UnwrappedText = <TAs extends TextTag>(
  props: TextProps<TAs>,
  ref: ForwardedRef<any>
) => {
  const {
    component: Component = 'p',
    caption,
    className,
    children,
    color,
    align,
    italic,
    strikethrough,
    size,
    weight,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
      ref={ref}
      className={cn(
        textVariant({
          caption,
          className,
          color,
          align,
          italic,
          size,
          strikethrough,
          weight,
        })
      )}
    >
      {children}
    </Component>
  );
};

export const Text = fixedForwardRef(UnwrappedText);
