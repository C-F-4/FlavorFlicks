import { FC } from 'react';
import './Home.scss';
import { Header } from 'src/components/Header/Header';
import { Landing } from 'src/components/Landing/Landing';
import { About } from 'src/components/About/About';
import { Specials } from 'src/components/Specials/Specials';
import { Gallery } from 'src/components/Gallery/Gallery';
import { Menu } from 'src/components/Menu/Menu';
import { Apps } from 'src/components/Apps/Apps';
import { Footer } from 'src/components/Footer/Footer';
import { Copyright } from 'src/components/Copyright/Copyright';

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
