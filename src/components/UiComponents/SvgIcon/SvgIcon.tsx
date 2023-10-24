import { FC } from 'react';
import styles from './SvgIcon.module.scss';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  svg: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;
  size?: 'XS' | 'SM' | 'REG' | 'LG' | 'XL' | '2XL';
}

export const SvgIcon: FC<SvgIconProps> = (props: SvgIconProps) => {
  const { svg: SVG, size = 'REG' } = props;
  const sizeClass = 'size' + size;

  return (
    <SVG
      className={`${styles.icon} ${styles[sizeClass]}`}
    />
  );
};
