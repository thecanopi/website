import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'space-y-3 mb-10 md:mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      <h2
        className={cn(
          'text-2xl md:text-3xl lg:text-4xl font-serif font-semibold',
          dark ? 'text-primary-foreground' : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'text-base md:text-lg max-w-2xl',
            align === 'center' && 'mx-auto',
            dark ? 'text-primary-foreground/75' : 'text-muted-foreground'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}