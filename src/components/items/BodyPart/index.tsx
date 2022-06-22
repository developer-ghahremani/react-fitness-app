import BodyPartModel from "../../../models/BodyPart.model";

type Props = { bodyPart: BodyPartModel; index: number };

const BodyPart = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full border min-h-[12rem]">
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
