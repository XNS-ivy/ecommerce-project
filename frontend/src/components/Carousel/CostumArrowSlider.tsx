import chevronIcon from "../../assets/icons/chevron.svg";
import { useSpring, animated } from "react-spring";

interface Props {
  onClick: () => void;
  type: "next" | "prev";
  isActive?: boolean;
}

export default function CostumArrowSlider(props: Props) {
  const animationNext = useSpring({
    opacity: props.isActive ? 1 : 0,
    transform: props.isActive ? "translateX(0%)" : "translateX(-80%)",
  });

  const animationPrev = useSpring({
    opacity: props.isActive ? 1 : 0,
    transform: props.isActive ? "translateX(0%)" : "translateX(80%)",
  });

  const basePosition =
    props.type === "next"
      ? "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
      : "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2";

  return (
    <div className={`absolute z-20 ${basePosition}`}>
      <animated.div
        style={props.type === "next" ? animationNext : animationPrev}
        className="rounded-full bg-white shadow-md w-10 h-10 cursor-pointer flex items-center justify-center"
        onClick={props.onClick}
      >
        <img
          src={chevronIcon}
          className={`w-6 transform ${props.type === "next" ? "rotate-90" : "-rotate-90"
            }`}
          alt={props.type === "next" ? "Next" : "Prev"}
        />
      </animated.div>
    </div>
  );
}
