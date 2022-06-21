import { IButton } from "../../../components/general";
import Logo from "./../../../assets/images/exercise.jpg";
import Navbar from "../../../components/layout/Main/Navbar";

const LandingSection = () => {
  return (
    <div className="flex flex-col md:flex-row mt-8 h-screen">
      <div className="flex-1 flex flex-col justify-between">
        <Navbar />
        <div>
          <p className="text-red-600 font-bold text-md">Fitness App</p>
          <p className="font-bold text-4xl my-3">
            Sweat, Smile
            <br />
            And Repeat
          </p>
          <p className="my-6">
            click out the most effective exercises personalized to you
          </p>
          <IButton className="bg-red-600 text-white px-2 py-1">
            Explore Exercises
          </IButton>
        </div>
        <div></div>
      </div>
      <div className="flex-[0.8] hidden md:block ">
        <img
          src={Logo}
          alt=""
          className="h-full rounded-tl-[100px] rounded-br-[100px] animate__animated animate__fadeInRight"
        />
      </div>
    </div>
  );
};

export default LandingSection;
