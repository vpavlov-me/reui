import * as React from 'react';
import type { LucideProps } from 'lucide-react';

export interface IconWrapperProps extends LucideProps {
  icon: React.ComponentType<LucideProps>;
}

export const IconWrapper = React.forwardRef<SVGSVGElement, IconWrapperProps>(
  ({ icon: Icon, ...props }, ref) => {
    return <Icon ref={ref} {...props} />;
  }
);

IconWrapper.displayName = 'IconWrapper';
