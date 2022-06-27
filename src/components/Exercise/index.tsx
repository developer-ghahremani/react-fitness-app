import AllLogo from "./../../assets/images/all.png";
import ILoading from "../ILoading";
import { useGetExerciseQuery } from "../../store/service/exercise";

type Props = {
  id: string;
};

const Exercise = (props: Props) => {
  const { isFetching, data, isError } = useGetExerciseQuery({ id: props.id });

  if (isError) return <p>Error occured</p>;
  if (isFetching || !data) return <ILoading />;

  return (
    <div className="md:grid-cols-2 grid grid-cols-1 mt-16">
      <div>
        <img src={data.gifUrl} alt="" />
      </div>
      <div className="flex flex-col">
        <p className="text-4xl font-bold">
          {data.name
            .split(" ")
            .map(
              (item) =>
                item.charAt(0).toUpperCase() + item.slice(1, item.length)
            )
            .join(" ")}
        </p>
        {[
          { title: data.bodyPart },
          { title: data.muscle },
          { title: data.equipment },
        ].map((item) => (
          <div className="flex items-center mt-2">
            <div className="bg-opacity-30 flex items-center justify-center w-16 h-16 bg-yellow-200 rounded-full">
              <img src={AllLogo} className="w-8 h-8" alt="" />
            </div>
            <p className="mx-4 text-xl font-bold">
              {item.title[0].toUpperCase() +
                item.title.slice(1, item.title.length)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise;
