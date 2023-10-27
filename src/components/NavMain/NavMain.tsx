import { FC, useEffect } from 'react';
import { Link, scrollSpy } from 'react-scroll';
import './NavMain.scss';
import { NAV } from 'src/constants/nav.constants';
import { Button } from 'src/components/UiComponents/Button/Button';

export const NavMain: FC<{}> = () => {
  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <nav className={"nav-bar"}>
      <ul className={"nav-list"}>
        {NAV.items.map((item, index) => (
          <li className="list-item" key={index}>
            <Link className={"item-link"} to={item.url} spy={true} smooth={true} offset={-150}>
              <span className={"link-text"}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Button className={"nav-cta"} variant="primary">{NAV.cta.text}</Button>
    </nav>
  );
};
