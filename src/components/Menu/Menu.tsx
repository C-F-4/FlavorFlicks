import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { Element } from 'react-scroll';
import './Menu.scss';
import { MENU } from 'src/constants/menu.constants';
import { SETTINGS } from 'src/constants/slider.constants';
import { SITE_DATA } from 'src/constants/apps.constants';

export const Menu: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={"menu-container"}>
      <Element name="menu"></Element>
      <header className={"menu-header"}>
        <h3 className={"title"}>{t('menu.title')}</h3>
        <h3 className={"subtitle"}>{t('menu.subtitle')}</h3>
      </header>
      <div className={"menu-body"}>
        {MENU.primaries.map(primaryCategory => (
          <div className={"card"} key={primaryCategory.id}>
            <div className={"card-image"}>
              <img src={primaryCategory.image} />
            </div>
            <div className={"card-body"}>
              <Slider {...SETTINGS.DEFAULT}>
                {primaryCategory.categories.map((category, index) => (
                  <div className={"card-section"} key={index}>
                    <div className={"card-header"}>
                      <h3 className={"title"}>{primaryCategory.title}</h3>
                      <h3 className={"subtitle"}>{category.title}</h3>
                    </div>
                    <div className={"card-recipe"}>
                      <ul className={"recipe-list"}>
                        {
                          MENU.recipes.filter(recipe => recipe.tags.includes(category.tag)).map(recipe => (
                            <li key={recipe.id} className={"recipe-item"}>
                              {recipe.sticker && <div className={"recipe-icon"}><img src={recipe.sticker} /></div>}
                              <div className={"recipe-name"}>{recipe.name}</div>
                              <div className={"recipe-gap"}></div>
                              <div className={"recipe-price"}>{SITE_DATA.selectedCurrency.shortCode} {recipe.price}</div>
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          )
        )}
      </div>
    </section>
  );
};
