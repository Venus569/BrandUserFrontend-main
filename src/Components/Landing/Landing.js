

import { InstagramFeedSection } from './InstagramFeedSection';
import { NavBar2 } from './Navbar2';
//import BreadcrumbArea from './BreadcrumbArea';
//import { Search } from './Components/BlogSection/Search';
import { BlogSection } from './BlogSection';
import { FooterSubscibeArea } from './FooterSubscibeArea';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Landing() {
  return (
    <>
      <NavBar2/>
      <BlogSection />
      <InstagramFeedSection />
      <FooterSubscibeArea />
    </>
  );
}

export default Landing;
