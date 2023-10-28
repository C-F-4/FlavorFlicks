import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import './Specials.scss';
import { RECIPES } from 'src/constants/recipes.constants';
import { MENU } from 'src/constants/menu.constants';
import { Button } from 'src/components/UiComponents/Button/Button';

export const Specials: FC<{}> = () => {
  const { t } = useTranslation();

  return (
    <section className={"special-container"}>
      {RECIPES.filter(recipe => !!recipe.isSpecial).map(recipe => (
        MENU.recipes.filter(item => item.id === recipe.id).map(dish => (
          <div className={"card"} key={dish.id}>
            <div className={"card-image"}>
              <img src={dish?.image} />
            </div>
            <div className={"card-body"}>
              <header className={"card-header"}>
                <h3 className={"title"}>{t('specials.title')}</h3>
                <h3 className={"subtitle"}>{recipe.title}</h3>
              </header>
              <p className={"summary"}>{
                recipe.highlight.split('\n').map(line => (<>{line}<br/></>))
              }</p>
              <div className={"card-foot"}>
                <Button variant="secondary">{t('specials.view')}</Button>
              </div>
            </div>
          </div>
        ))
      ))}
    </section>
  );
};
