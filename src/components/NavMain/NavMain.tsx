import { FC } from 'react';
import './NavMain.scss';
import { NAV } from 'src/constants/nav.constants';
import { Link } from 'react-router-dom';

export const NavMain: FC<{}> = () => {
  return (
    <nav>
      {NAV.items.map((item, index) => (
        <li key={index}>
          <Link to={item.url}>
            {item.title}
          </Link>
        </li>
      ))}
    </nav>
  );
};
