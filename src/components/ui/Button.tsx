import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: 'bg-purple-900/20 hover:bg-purple-900/30 text-white',
      primary: 'bg-creator-purple-600 hover:bg-creator-purple-700 text-white',
      secondary: 'bg-accent-pink-600 hover:bg-accent-pink-700 text-white',
      outline: 'border border-purple-800 hover:bg-purple-900/20 text-white',
      ghost: 'hover:bg-purple-900/20 text-white',
      link: 'text-creator-purple-400 hover:text-creator-purple-300 underline-offset-4 hover:underline',
      danger: 'bg-red-600 hover:bg-red-700 text-white',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'relative inline-flex items-center justify-center font-medium rounded-lg transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-creator-purple-500',
          'disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading && (
          <Loader2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
        )}
        <span className={cn('flex items-center gap-2', isLoading && 'invisible')}>
          {leftIcon}
          {children}
          {rightIcon}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };