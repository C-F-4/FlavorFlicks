import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import './Gallery.scss';
import { MENU } from 'src/constants/menu.constants';
import { SETTINGS } from 'src/constants/slider.constants';
import { GalleryItem } from 'src/components/GalleryItem/GalleryItem';

export const Gallery: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={"gallery-container"}>
      <header className={"gallery-header"}>
        <h3 className={"title"}>{t('gallery.title')}</h3>
        <h3 className={"subtitle"}>{t('gallery.subtitle')}</h3>
      </header>
      <div className={"gallery-items"}>
        <Slider {...SETTINGS.GALLERY}>
          {MENU.recipes.map(recipe => (
            <GalleryItem key={recipe.id} src={recipe.image} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
