import { forwardRef, InputHTMLAttributes } from 'react';
import './Input.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  testid?: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  props,
  ref
) {
  return (
    <input
      ref={ref}
      value={props.value}
      pattern={props.pattern}
      type={props.type || 'text'}
      placeholder={props.placeholder}
      disabled={props.disabled}
      className={`uc-input ${props.className}`}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      onClick={props.onClick}
      data-testid={props.testid}
    />
  );
});