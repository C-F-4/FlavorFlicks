import { FC } from 'react';
import styles from './NavMain.module.scss';
import { NAV } from 'src/constants/nav.constants';
import { Link } from 'react-router-dom';

export const NavMain: FC<{}> = () => {
  return (
    <nav className={styles.siteNav}>
      <ul className={styles.navList}>
        {NAV.items.map((item, index) => (
          <li className={styles.listItem} key={index}>
            <Link to={item.url} className={styles.itemLink}>
              <span className={styles.linkText}>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <button className={`${styles.btn} ${styles.primary} ${styles.siteCta}`}>{NAV.cta.text}</button>
    </nav>
  );
};
