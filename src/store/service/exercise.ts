import ExerciseModel from "../../models/Exercise.model";
import service from "./";

const exerciseAPI = service.injectEndpoints({
  endpoints: (build) => ({
    getExercises: build.query<
      ExerciseModel[],
      { limit?: number | string; page?: number | string }
    >({
      query: ({ limit = 6, page }) => ({
        url: "/exercise",
        params: { limit, page },
      }),
    }),
  }),
});

export const { useGetExercisesQuery } = exerciseAPI;
