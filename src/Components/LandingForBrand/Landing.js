
import '../assets/css/animate.min.css';
import '../assets/css/bootstrap.min.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/slick.css';
import '../assets/css/nice-select.css';
import '../assets/css/leaflet.css';
import '../assets/css/mapbox-gl.min.css';
import '../assets/css/bootstrap-datepicker.css';
import '../assets/css/ion.rangeSlider.min.css';
import '../assets/css/default.css';
import '../assets/css/style.css';
import { InstagramFeedSection } from './InstagramFeedSection';
import { NavBar2 } from './Navbar2';
import BreadcrumbArea from './BreadcrumbArea';
//import { Search } from './Components/BlogSection/Search';
import { BlogSection } from './BlogSection';
import { FooterSubscibeArea } from './FooterSubscibeArea';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BrandLanding() {
  return (
    <>
      <NavBar2/>
      <BreadcrumbArea />
      <BlogSection />
      <InstagramFeedSection />
      <FooterSubscibeArea />
    </>
  );
}

export default BrandLanding;
