

import { InstagramFeedSection } from './InstagramFeedSection';
import { NavBar } from '../Navbar';
//import BreadcrumbArea from './BreadcrumbArea';
//import { Search } from './Components/BlogSection/Search';
import { BlogSection } from './BlogSection';
import { FooterSubscibeArea } from './FooterSubscibeArea';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Landing() {
  return (
    <>
      <NavBar/>
      <BlogSection />
      <InstagramFeedSection />
      <FooterSubscibeArea />
    </>
  );
}

export default Landing;
