import { FC, useEffect, useState } from 'react';
import { Link, scrollSpy } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import './NavMain.scss';
import { NAV } from 'src/constants/nav.constants';
import { Button } from 'src/components/UiComponents/Button/Button';
import { Modal, ModalState } from 'src/components/UiComponents/Modal/Modal';

export const NavMain: FC<{}> = () => {
  const { t } = useTranslation();
  const [reserveModalState, setReserveModalState] = useState(ModalState.Close);

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
      <Modal type={"secondary"} state={reserveModalState} onClose={() => { setReserveModalState(ModalState.Close); }}>
        <header className={"modal-content"}>
          <h3 className={"modal-head"}>{t('nav.reserve.head')}</h3>
          <p className={"modal-body"}>{t('nav.reserve.text')}</p>
        </header>
      </Modal>
      <Button className={"nav-cta"} variant="primary" onClick={() => setReserveModalState(ModalState.Open) }>{NAV.cta.text}</Button>
    </nav>
  );
};
