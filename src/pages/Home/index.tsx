import LandingSection from "./LandingSection";
import { MainLayout } from "../../components/layout";

const Home = () => {
  return (
    <MainLayout showNavbar={false}>
      <LandingSection />
    </MainLayout>
  );
};

export default Home;
