import { Exercises } from "../../components";
import { MainLayout } from "../../components/layout";

const Exercise = () => {
  return (
    <MainLayout showNavbar>
      <Exercises limit={12} />
    </MainLayout>
  );
};

export default Exercise;
