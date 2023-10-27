import { ButtonHTMLAttributes, forwardRef } from 'react';
import './Button.scss';

export type Variant =
  | 'basic'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'success'
  | 'dark'
  | 'custom';

export type BtnSize = 'small' | 'medium' | 'large';

export type LinkTarget = '_blank' | '_self';

export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: BtnSize;
  variant?: Variant;
  isActive?: boolean;
  tooltipContent?: string;
  loading?: boolean;
  href?: string;
  target?: LinkTarget;
}

export const Button = forwardRef<HTMLButtonElement, BtnProps>(function Button(
  props,
  ref
) {
  const {
    size = 'medium',
    variant = 'primary',
    target = '_blank'
  } = props;
  const handleBtnclick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!props.loading) {
      props.onClick?.(event);
    }
  };

  return (
    <button
      ref={ref}
      className={`btn ${props.className} ${variant}`}
      disabled={props.disabled}
      aria-label={props['aria-label']}
      onClick={handleBtnclick}
      aria-pressed={props.isActive}
    >
      {/* {props.loading && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Spinner size={props.size} testid="spinner-icon" />
        </span>
      )} */}
      <span>
        {props.children}
      </span>
    </button>
  );
});
