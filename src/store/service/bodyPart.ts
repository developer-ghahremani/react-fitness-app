import BodyPartModel from "../../models/BodyPart.model";
import service from "./";

const bodyPart = service.injectEndpoints({
  endpoints: (build) => ({
    getBodyPart: build.query<BodyPartModel[], void>({
      query: () => ({ url: "/body-part", method: "GET" }),
    }),
  }),
});

export const { useGetBodyPartQuery } = bodyPart;
