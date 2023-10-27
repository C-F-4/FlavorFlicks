import { FC } from 'react';
import './GalleryItem.scss';

export const GalleryItem: FC<{src: any}> = (props) => {
  const { src } = props;

  return (
    <div className={"item-container"}>
      <img src={src} />
    </div>
  );
};
