import ExerciseModel from "../../../models/Exercise.model";
import React from "react";

type Props = { exercise: ExerciseModel };

const ExerciseItem = (props: Props) => {
  return (
    <div className="border-t-2 border-red-600">
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
