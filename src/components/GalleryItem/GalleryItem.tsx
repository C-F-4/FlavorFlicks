import { FC } from 'react';
import './GalleryItem.scss';

export const GalleryItem: FC<{src: any, children: any}> = (props) => {
  const { src } = props;

  return (
    <div className={"item-container"}>
      <img src={src} className={"body"} loading="lazy" />
      <div className={"content"}>
        {props.children}
      </div>
    </div>
  );
};
