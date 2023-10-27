import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { Element } from 'react-scroll';
import './Gallery.scss';
import { MENU } from 'src/constants/menu.constants';
import { SETTINGS } from 'src/constants/slider.constants';
import { SITE_DATA } from 'src/constants/apps.constants';
import { GalleryItem } from 'src/components/GalleryItem/GalleryItem';
import { Button } from 'src/components/UiComponents/Button/Button';

export const Gallery: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={"gallery-container"}>
      <Element name="gallery"></Element>
      <header className={"gallery-header"}>
        <h3 className={"title"}>{t('gallery.title')}</h3>
        <h3 className={"subtitle"}>{t('gallery.subtitle')}</h3>
      </header>
      <div className={"gallery-items"}>
        <Slider {...SETTINGS.GALLERY}>
          {MENU.recipes.map(recipe => (
            <GalleryItem key={recipe.id} src={recipe.image}>
              <div className={"recipe-wrapper"}>
                <h3 className={"recipe-name"}>{recipe.name}</h3>
                <p className={"recipe-price"}>{SITE_DATA.selectedCurrency.shortCode} {recipe.price}</p>
                <Button variant="secondary" size="small">{t('specials.view')}</Button>
              </div>
            </GalleryItem>
          ))}
        </Slider>
      </div>
    </section>
  );
};
