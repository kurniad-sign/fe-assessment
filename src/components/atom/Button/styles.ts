import { tv } from 'tailwind-variants';

export const buttonVariant = tv({
  base: [
    'inline-flex items-center justify-center gap-x-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-colors shadow-sm tracking-wide',
    'disabled:pointer-events-none disabled:opacity-50 disabled:bg-grey-300 disabled:text-grey-800',
    'data-[pressed]:scale-[0.98]',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1',
  ],
  variants: {
    size: {
      default: 'h-10 px-4 py-2',
      large: 'h-11 px-6 py-4 text-base',
    },
    circled: {
      true: 'rounded-full',
    },
    block: {
      true: 'w-full',
    },
    color: {
      default:
        'bg-grey-500 hover:bg-grey hover:bg-grey-700 data-[pressed]:bg-grey-800 focus-visible:bg-grey-900 focus-visible:ring-grey-500 text-white',
      primary:
        'bg-primary-500 hover:bg-primary hover:bg-primary data-[pressed]:bg-primary-300 focus-visible:bg-primary-700 focus-visible:ring-ring text-white',
      secondary:
        'bg-secondary-500 hover:bg-secondary hover:bg-secondary data-[pressed]:bg-secondary-300 focus-visible:bg-secondary-700 focus-visible:ring-secondary text-white',
      success:
        'bg-success-500 hover:bg-success hover:bg-success data-[pressed]:bg-success-300 focus-visible:bg-success-700 focus-visible:ring-success text-white',
      warning:
        'bg-warning hover:bg-warning hover:bg-warning-300 data-[pressed]:bg-warning-200 focus-visible:bg-warning-500 focus-visible:ring-warning text-foreground',
      error:
        'bg-error-500 hover:bg-error hover:bg-error data-[pressed]:bg-error-300 focus-visible:bg-error-700 focus-visible:ring-error text-white',
    },
    variant: {
      outline:
        'border-2 border-border bg-transparent text-grey-700 hover:bg-grey-100 data-[pressed]:bg-grey-200 focus-visible:bg-grey-300 focus-visible:ring-transparent data-[disabled]:border-grey-400 data-[disabled]:bg-transparent ',
      subtle:
        'bg-grey-100 text-grey-700 hover:bg-grey-200 data-[pressed]:bg-grey-300 focus-visible:bg-grey-400 focus-visible:ring-grey-400 focus-visible:text-grey-50',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      variant: 'outline',
      className:
        'border-primary-600 text-primary-600 hover:bg-primary-50 data-[pressed]:bg-primary-75 focus-visible:bg-primary-50 focus-visible:text-primary-700',
    },
    {
      color: 'secondary',
      variant: 'outline',
      className:
        'border-secondary-600 text-secondary-600 hover:bg-secondary-50 data-[pressed]:bg-secondary-75 focus-visible:bg-secondary-50 focus-visible:text-secondary-700',
    },
    {
      color: 'success',
      variant: 'outline',
      className:
        'border-success-600 text-success-600 hover:bg-success-50 data-[pressed]:bg-success-75 focus-visible:bg-success-50 focus-visible:text-success-700',
    },
    {
      color: 'warning',
      variant: 'outline',
      className:
        'border-warning text-warning hover:bg-warning-50 data-[pressed]:bg-warning-75 focus-visible:bg-warning-50 focus-visible:text-warning-500',
    },
    {
      color: 'error',
      variant: 'outline',
      className:
        'border-error-500 text-error-500 hover:bg-error-50 data-[pressed]:bg-error-75 focus-visible:bg-error-50 focus-visible:text-error-700',
    },
    {
      color: 'primary',
      variant: 'subtle',
      className:
        'bg-primary-50 text-primary-700 hover:bg-primary-75 data-[pressed]:bg-primary-100 focus-visible:bg-primary-50 focus-visible:ring-primary-700 focus-visible:text-primary-800',
    },
    {
      color: 'secondary',
      variant: 'subtle',
      className:
        'bg-secondary-50 text-secondary-700 hover:bg-secondary-75 data-[pressed]:bg-secondary-100 focus-visible:bg-secondary-50 focus-visible:ring-secondary-700 focus-visible:text-secondary-800',
    },
    {
      color: 'success',
      variant: 'subtle',
      className:
        'bg-success-50 text-success-700 hover:bg-success-75 data-[pressed]:bg-success-100 focus-visible:bg-success-50 focus-visible:ring-success-700 focus-visible:text-success-800',
    },
    {
      color: 'warning',
      variant: 'subtle',
      className:
        'bg-warning-50 text-warning-700 hover:bg-warning-75 data-[pressed]:bg-warning-100 focus-visible:bg-warning-50 focus-visible:ring-warning-700 focus-visible:text-warning-800',
    },
    {
      color: 'error',
      variant: 'subtle',
      className:
        'bg-error-50 text-error-700 hover:bg-error-75 data-[pressed]:bg-error-100 focus-visible:bg-error-50 focus-visible:ring-error-700 focus-visible:text-error-800',
    },
  ],
  defaultVariants: {
    size: 'default',
    color: 'default',
  },
});

export type ButtonVariantProps = typeof buttonVariant;
