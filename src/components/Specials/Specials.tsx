import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './Specials.scss';
import { RECIPES } from 'src/constants/recipes.constants';
import { MENU } from 'src/constants/menu.constants';

export const Specials: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={"special-container"}>
      {RECIPES.filter(recipe => !!recipe.isSpecial).map(recipe => {
        const dish = MENU.recipes.find(item => item.id === recipe.id);
        return (
          <div className={"card"} key={recipe.id}>
            <div className={"card-image"}>
              <img src={dish?.image} />
            </div>
            <div className={"card-body"}>
              <header className={"card-header"}>
                <h3 className={"title"}>{t('specials.title')}</h3>
                <h3 className={"subtitle"}>{recipe.title}</h3>
              </header>
              <p className={"summary"}>{recipe.highlight}</p>
            </div>
          </div>
      )})}
    </section>
  );
};
