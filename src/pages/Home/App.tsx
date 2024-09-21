import { Header } from "../../components/Header";
import { MainBanner } from "../../components/MainBanner";
import { OurServices } from "../../components/OurServices";
import { SectionItem } from "../../components/SectionItem";

import Illustration2IMG from "../../assets/illustration2.svg";
import Illustration3IMG from "../../assets/illustration3.svg";

import { Button } from "../../components/Button";
function App() {
  return (
    <>
      <Header />
      <MainBanner />
      <OurServices />
      <SectionItem
        title="Leading healthcare providers"
        text="Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver"
        button={<Button variant="secondary">Learn More</Button>}
        leftIllustration={Illustration2IMG}
        showGroupDotsBottom
      />

      <SectionItem
        title="Download our mobile apps"
        text="Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"
        button={<Button variant="secondary">Download</Button>}
        leftIllustration={Illustration3IMG}
        showGroupDotsBottom
      />
    </>
  );
}

export default App;
