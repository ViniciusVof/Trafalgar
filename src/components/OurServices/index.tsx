import { ServiceCard } from "../ServiceCard";
import { Title } from "../Title";
import {
  BackgroundService,
  GroupDotsContainer,
  Information,
  ServicesContainer,
  Wrapper,
} from "./styles";

import SearchServiceIMG from "../../assets/searchServicesImage.svg";
import PharmacyServiceIMG from "../../assets/pharmacyServicesImage.svg";
import ConsultationServiceIMG from "../../assets/consultationServicesImage.svg";
import DetailsServiceIMG from "../../assets/detailsServicesImage.svg";
import EmergencyServiceIMG from "../../assets/emergencyServicesImage.svg";
import TrackingServiceIMG from "../../assets/trackingServicesImage.svg";

import BackgroundServiceIMG from "../../assets/backgroundServices.svg";
import GroupDotsIMG from "../../assets/groupDots.svg";

import { Button } from "../Button";
import { ReactSVG } from "react-svg";

export function OurServices() {
  return (
    <Wrapper>
      <BackgroundService>
        <ReactSVG src={BackgroundServiceIMG} />
      </BackgroundService>
      <Title centralized>Our Services</Title>
      <Information>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </Information>

      <ServicesContainer>
        <GroupDotsContainer>
          <ReactSVG src={GroupDotsIMG} />
        </GroupDotsContainer>
        <ServiceCard
          image={SearchServiceIMG}
          title="Search doctor"
          text="Choose your doctor from thousands of specialist, general, and trusted hospitals"
        />
        <ServiceCard
          image={PharmacyServiceIMG}
          title="Online pharmacy"
          text="Buy your medicines with our mobile application with a simple delivery system"
        />
        <ServiceCard
          image={ConsultationServiceIMG}
          title="Consultation"
          text="Free consultation with our trusted doctors and get the best recomendations"
        />
        <ServiceCard
          image={DetailsServiceIMG}
          title="Details info"
          text="Free consultation with our trusted doctors and get the best recomendations"
        />
        <ServiceCard
          image={EmergencyServiceIMG}
          title="Emergency care"
          text="You can get 24/7 urgent care for yourself or your children and your lovely family"
        />
        <ServiceCard
          image={TrackingServiceIMG}
          title="Tracking"
          text="Track and save your medical history and health data"
        />
      </ServicesContainer>

      <Button variant="secondary">Learn more</Button>
    </Wrapper>
  );
}
