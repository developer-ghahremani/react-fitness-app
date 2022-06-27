import { ExerciseDetail, RelatedVideo } from "../../components";

import { MainLayout } from "../../components/layout";
import { parse } from "query-string";
import { useLocation } from "react-router-dom";

const Exercise = () => {
  const { search } = useLocation();
  const { id, muscle } = parse(search);

  if (!id || !muscle || typeof muscle !== "string" || typeof id !== "string")
    return null;
  return (
    <MainLayout showNavbar>
      <ExerciseDetail id={id} />
      <RelatedVideo
        title={
          <p className="text-4xl font-bold">
            Similar{" "}
            <strong className="font-bold text-red-600">Target muscle</strong>{" "}
            exercises.
          </p>
        }
        searchPhrase={muscle}
      />
    </MainLayout>
  );
};

export default Exercise;
