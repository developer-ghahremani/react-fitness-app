import ExerciseModel from "../../../models/Exercise.model";
import React from "react";

type Props = {
  exercise: ExerciseModel;
  onClick: (exerecise: ExerciseModel) => void;
};

const ExerciseItem = (props: Props) => {
  const handleClick = () => {
    props.onClick(props.exercise);
  };

  return (
    <div
      onClick={handleClick}
      className="border-t-2 border-red-600 cursor-pointer">
      <img src={props.exercise.gifUrl} className="w-full" alt="" />
      <div className="flex">
        <p className="rounded-xl px-4 text-white bg-pink-400">
          {props.exercise.bodyPart}
        </p>
        <p className="rounded-xl px-4 mx-1 text-white bg-yellow-400">
          {props.exercise.muscle}
        </p>
      </div>
      <p className="text-lg font-bold">{props.exercise.name}</p>
    </div>
  );
};

export default ExerciseItem;
