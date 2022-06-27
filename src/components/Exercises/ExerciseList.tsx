import { LeftArrowIcon, RightArrowIcon } from "../icons";
import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import ExerciseItem from "../items/Exercise";
import ExerciseModel from "../../models/Exercise.model";
import ILoading from "../ILoading";
import { pageNames } from "../../constant";
import { useGetExercisesQuery } from "../../store/service/exercise";

type Props = {
  limit: number;
};
const ExerciseList = ({ limit }: Props) => {
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const page = new URLSearchParams(search).get("page") || "1";
  const bodyPart = new URLSearchParams(search).get("bodyPart") || "";

  const { isFetching, data, isError } = useGetExercisesQuery({
    page,
    bodyPart,
    limit,
  });

  const handleChangePage = (p: number) => {
    const query: any = parse(search);
    query.page = p;
    navigate(stringifyUrl({ url: pathname, query }));
  };

  const handleExerciseDetail = (ex: ExerciseModel) => {
    navigate(
      stringifyUrl({
        url: pageNames.exercise,
        query: {
          id: ex._id,
          name: ex.name,
          muscle: ex.muscle,
          equipment: ex.equipment,
          bodyPart: ex.bodyPart,
        },
      })
    );
  };

  if (isFetching || !data) return <ILoading />;
  return (
    <div>
      <p className="mt-4 text-2xl font-bold">Showing Results</p>
      <div className="md:grid-cols-3 grid grid-cols-1 gap-3 mt-4">
        {data.map((ex) => (
          <ExerciseItem
            onClick={handleExerciseDetail}
            exercise={ex}
            key={ex._id}
          />
        ))}
      </div>
      <div className="flex justify-end">
        {page !== "1" && (
          <LeftArrowIcon
            className="text-red-600 cursor-pointer"
            size={24}
            onClick={() => handleChangePage(+page - 1)}
          />
        )}
        <RightArrowIcon
          className="text-red-600 cursor-pointer"
          size={24}
          onClick={() => handleChangePage(+page + 1)}
        />
      </div>
    </div>
  );
};

export default ExerciseList;
