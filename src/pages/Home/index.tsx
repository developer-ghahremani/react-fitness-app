import { Exercises } from "../../components";
import LandingSection from "./LandingSection";
import { MainLayout } from "../../components/layout";

const Home = () => {
  return (
    <MainLayout showNavbar={false}>
      {/* <LandingSection /> */}
      <Exercises />
    </MainLayout>
  );
};

export default Home;
