import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import { BodyPartItem } from "../items";
import BodyPartModel from "../../models/BodyPart.model";
import ILoading from "../ILoading";
import { useGetBodyPartQuery } from "../../store/service/bodyPart";

const BodyParts = () => {
  const { data, isFetching, isError } = useGetBodyPartQuery();
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const bodyPart = new URLSearchParams(search).get("bodyPart") || "";

  const handleChangeBodyPart = (bodyPart: BodyPartModel) => {
    const query: any = parse(search);
    query.bodyPart = bodyPart.name === "all" ? "" : bodyPart.name;
    query.page = 1;
    navigate(stringifyUrl({ url: pathname, query }));
  };

  if (isFetching || !data) return <ILoading />;
  return (
    <div className="md:grid-cols-4 grid grid-cols-1 gap-4 mt-4">
      {[{ name: "all", _id: "" }, ...data].slice(0, 4).map((item, index) => (
        <BodyPartItem
          index={index}
          key={item._id}
          bodyPart={item}
          onClick={handleChangeBodyPart}
          isSelected={item.name === bodyPart}
        />
      ))}
    </div>
  );
};

export default BodyParts;
