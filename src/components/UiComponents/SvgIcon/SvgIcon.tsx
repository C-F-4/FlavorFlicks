import { FC } from 'react';
import './SvgIcon.scss';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  svg: React.FunctionComponent<
    React.ComponentProps<'svg'> & { title?: string }
  >;
  size?: 'xs' | 'sm' | 'reg' | 'lg' | 'xl' | '2xl';
  classList?: string;
}

export const SvgIcon: FC<SvgIconProps> = (props: SvgIconProps) => {
  const { svg: SVG, size = 'reg', classList = '' } = props;

  return (
    <SVG
      className={`icon size-${size} ${classList}`}
    />
  );
};
