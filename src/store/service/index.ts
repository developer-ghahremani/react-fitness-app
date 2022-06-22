import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const service = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://fitness.iran.liara.run/api" }),
  endpoints(build) {
    return {};
  },
  reducerPath: "serviceApi",
});

export default service;
