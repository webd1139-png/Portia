import * as React from 'react';
import { cn } from '@/lib/utils';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className='w-full'>
        {label && (
          <label
            htmlFor={id}
            className='block text-sm font-medium text-muted mb-1.5 transition-colors'
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          rows={4}
          className={cn(
            'w-full px-4 py-3 rounded-lg bg-surface border border-border text-white placeholder-muted/60 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none',
            error && 'border-red-500/50 focus:border-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p className='mt-1 text-xs text-red-400/80'>{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };