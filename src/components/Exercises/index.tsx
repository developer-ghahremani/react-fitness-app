import BodyParts from "./BodyPart";
import ExerciseList from "./ExerciseList";
import { IButton } from "../general";
import React from "react";

type Props = {
  limit: number;
};
const Exercises = ({ limit }: Props) => {
  return (
    <div>
      <p className="mt-2 text-3xl font-bold text-center">
        Awesome Exercises you
        <br />
        Sould know
      </p>
      <div className=" flex mt-4">
        <input
          type="text"
          placeholder="Search exercise"
          className="flex-1 px-2 py-1 bg-white border"
        />
        <IButton className="px-8 text-white bg-red-600">Search</IButton>
      </div>
      <BodyParts />
      <ExerciseList limit={limit} />
    </div>
  );
};

export default Exercises;
