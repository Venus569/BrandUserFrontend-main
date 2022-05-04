
import { InstagramFeedSection} from './InstagramFeedSection';
import BreadcrumbArea from './BreadcrumbArea';
//import { Search } from './BlogSection/Search';
import { BlogSection } from './BlogSection';
import { FooterSubscibeArea } from './FooterSubscibeArea';
import { NavBar } from '../Navbar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Videos() {
  return (
    <>
      <NavBar/>
      <BreadcrumbArea/>
      <BlogSection/>
      <InstagramFeedSection/>
      <FooterSubscibeArea/>
    </>
  );
}

export default Videos;
