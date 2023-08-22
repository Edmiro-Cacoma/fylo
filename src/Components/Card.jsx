
import { fadeInVariants } from "../utils/motion";
import MotionComponent from "./MotionComponent";

const Card = ({ imageUrl, title, description, index, width, height }) => {
  const getMaxWidht = (index) => {
    switch (index) {
      case 0:
        return "max-w-card-1";
      case 1:
        return "max-w-card-2";
      default:
        return "max-w-card-default";
    }
  };

  return (
    <MotionComponent
      as="div"
      variants={fadeInVariants("up", 0.5, 0.8)}
      className={`text-center ${getMaxWidht(index)}`}
    >
      <div>
        <img
          src={imageUrl}
          width={width}
          height={height}
          alt=""
          className="mx-auto"
        />
      </div>
      <div>
        <h3 className="mt-4 mb-2 font-raleway text-xl font-bold leading-[1.4375rem]">
       {title}
        </h3>
        <p className="leading-[150%]">{description}</p>
      </div>
    </MotionComponent>
  );
};
export default Card;
