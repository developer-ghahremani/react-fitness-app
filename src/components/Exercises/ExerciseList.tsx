import ExerciseItem from "../items/Exercise";
import ILoading from "../ILoading";
import React from "react";
import { useGetExercisesQuery } from "../../store/service/exercise";
import { useLocation } from "react-router-dom";

const ExerciseList = () => {
  const { search } = useLocation();

  const page = new URLSearchParams(search).get("page");

  const { isFetching, data, isError } = useGetExercisesQuery({
    page: page || 1,
  });

  if (isFetching || !data) return <ILoading />;
  return (
    <div>
      <p className="mt-4 text-2xl font-bold">Showing Results</p>
      <div className="md:grid-cols-3 grid grid-cols-1 gap-3 mt-4">
        {data.map((ex) => (
          <ExerciseItem exercise={ex} key={ex._id} />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
