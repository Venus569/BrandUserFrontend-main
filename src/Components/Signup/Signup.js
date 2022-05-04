
import { InstagramFeedSection } from './InstagramFeedSection';
import BreadcrumbArea from './BreadcrumbArea';
//import { Search } from './BlogSection/Search';
import { FooterSubscibeArea } from './FooterSubscibeArea';
import { SignupBlock } from './Signup/index';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Signup() {
  return (
    <>
      <BreadcrumbArea />
      <SignupBlock/>
      <InstagramFeedSection />
      <FooterSubscibeArea />
    </>
  );
}

export default Signup;
