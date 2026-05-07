import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";

const RoundedProgBar = ({percentage}) => {

    function getColors(percentage) {
      if (percentage >= 70) return { path: "#21D07A", trail: "#204529" };
      if (percentage >= 40) return { path: "#f59e0b", trail: "#3d2e0a" };
      return { path: "#ef4444", trail: "#3d0f0f" };
    }

    const colors = getColors(percentage);

  return (
    <div className="w-16 font-semibold hover:scale-[1.1] transition-all">
      <CircularProgressbarWithChildren
        value={percentage}
        background
        backgroundPadding={6}
        strokeWidth={6}
        styles={buildStyles({
          rotation: 1,
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
          pathTransition: "none",
          backgroundColor: "#081C22",
          pathColor: colors.path,
          trailColor: colors.trail,
        })}
      >
        <div className="flex items-center text-white">
          {percentage && <span className="text-[1.5rem]">{percentage}</span>}
          <span className="font-medium text-[.6rem]">%</span>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default RoundedProgBar;
