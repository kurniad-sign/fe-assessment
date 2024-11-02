import { ForwardedRef, InputHTMLAttributes } from 'react';

import { fixedForwardRef } from '@/components/helpers';

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const UnwrappedInput = (props: InputProps, ref: ForwardedRef<any>) => {
  const { label } = props;
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={label}
        className="text-sm font-medium leading-none text-grey-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <input
        {...props}
        className="flex h-full w-full rounded-md border border-grey-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-foreground placeholder:text-grey-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
};

export const Input = fixedForwardRef(UnwrappedInput);
