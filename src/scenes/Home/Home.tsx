import { FC } from 'react';
import './Home.scss';
import { Header } from '../../components/Header/Header';
import { Landing } from '../../components/Landing/Landing';
import { About } from '../../components/About/About';
import { Specials } from '../../components/Specials/Specials';
import { Gallery } from '../../components/Gallery/Gallery';
import { Menu } from '../../components/Menu/Menu';
import { Apps } from '../../components/Apps/Apps';
import { Footer } from '../../components/Footer/Footer';
import { Copyright } from '../../components/Copyright/Copyright';

export const Home: FC<{}> = () => {
  return (
    <>
      <Header/>
      <Landing/>
      <About/>
      <Specials/>
      <Gallery/>
      <Menu/>
      <Apps/>
      <Footer/>
      <Copyright/>
    </>
  );
};
