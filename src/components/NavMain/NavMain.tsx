import { FC } from 'react';
import './NavMain.scss';
import { NAV } from 'src/constants/nav.constants';
import { Link } from 'react-router-dom';

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
      <button className={"btn primary nav-cta"}>{NAV.cta.text}</button>
    </nav>
  );
};
