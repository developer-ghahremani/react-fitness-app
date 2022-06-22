import { BodyPartItem } from "../items";
import ILoading from "../ILoading";
import { useGetBodyPartQuery } from "../../store/service/bodyPart";

const BodyParts = () => {
  const { data, isFetching, isError } = useGetBodyPartQuery();

  if (isFetching || !data) return <ILoading />;
  return (
    <div className="md:grid-cols-4 grid grid-cols-1 gap-4 mt-4">
      {data.slice(0, 4).map((bodyPart, index) => (
        <BodyPartItem index={index} bodyPart={bodyPart} key={bodyPart._id} />
      ))}
    </div>
  );
};

export default BodyParts;
