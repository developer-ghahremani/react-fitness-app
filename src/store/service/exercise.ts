import ExerciseModel from "../../models/Exercise.model";
import service from "./";

const exerciseAPI = service.injectEndpoints({
  endpoints: (build) => ({
    getExercises: build.query<
      ExerciseModel[],
      {
        limit?: number | string;
        page?: number | string;
        bodyPart?: string;
      }
    >({
      query: ({ limit = 6, page, bodyPart }) => ({
        url: "/exercise",
        params: { limit, page, bodyPart },
      }),
    }),
    getExercise: build.query<ExerciseModel, { id: string }>({
      query: ({ id }) => ({ url: `/exercise/${id}` }),
    }),
  }),
});

export const { useGetExercisesQuery, useGetExerciseQuery } = exerciseAPI;
