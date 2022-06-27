import { Exercises } from "../../components";
import LandingSection from "./LandingSection";
import { MainLayout } from "../../components/layout";

const Home = () => {
  return (
    <MainLayout showNavbar={false}>
      <LandingSection />
      <Exercises limit={6} />
    </MainLayout>
  );
};

export default Home;
