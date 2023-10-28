import { FC, ReactChild, ReactFragment, ReactPortal } from 'react';
import './Modal.scss';
import ImgDino from 'src/assets/images/modal-success.png';
import { SvgIcon } from 'src/components/UiComponents/SvgIcon/SvgIcon';
import { ASSETS } from 'src/constants/assets.constants';

export interface ModalProps {
  children?: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
  type?: 'success';
  classList?: string;
};

export const Modal: FC<ModalProps> = (props: ModalProps) => {
  const { type = 'success', classList } = props;

  return (
    <div className={`uc-modal uc-${type}`}>
      <div className={`uc-modal-body ${classList}`}>
        <div className={"uc-modal-img"}><img src={ImgDino} alt={""} /></div>
        <div className={"uc-modal-content"}>{props.children}</div>
        <div className={"uc-modal-btn-primary"}>
          <SvgIcon svg={ASSETS.closeIcon} />
        </div>
      </div>
    </div>
  );
};
