import BodyPartModel from "../../../models/BodyPart.model";

type Props = {
  bodyPart: BodyPartModel;
  index: number;
  onClick?: (bodyPart: BodyPartModel) => void;
  isSelected?: boolean;
};

const BodyPart = (props: Props) => {
  const handleClick = () => {
    props.onClick && props.onClick(props.bodyPart);
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center w-full border min-h-[14rem] cursor-pointer ${
        props.isSelected ? "border-t-4 border-t-red-900" : ""
      }`}>
      <img
        // src={`/images/${props.bodyPart.name}.png`}
        src={`/images/all.png`}
        alt={`ALL`}
        className="w-16 h-16"
      />
      <p className="text-md font-bold">{props.bodyPart.name}</p>
    </div>
  );
};

export default BodyPart;
