import { FC } from 'react';
import './NavMain.scss';
import { NAV } from 'src/constants/nav.constants';
import { Link } from 'react-router-dom';
import { Button } from 'src/components/UiComponents/Button/Button';

export const NavMain: FC<{}> = () => {
  return (
    <nav className={"nav-bar"}>
      <ul className={"nav-list"}>
        {NAV.items.map((item, index) => (
          <li className="list-item" key={index}>
            <Link className={"item-link"} to={item.url}>
              <span className={"link-text"}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Button className={"nav-cta"} variant="primary">{NAV.cta.text}</Button>
    </nav>
  );
};
