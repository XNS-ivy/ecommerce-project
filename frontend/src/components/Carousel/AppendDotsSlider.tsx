export default function AppendDotsSlider({ dots }: { dots: any }) {
  return (
    <div className="absolute bottom-0 w-full flex justify-start items-center pl-4 pb-4 h-5 z-10">
      <ul className="flex justify-center items-center">
        {dots.map((dot: any, index: number) => {
          const slickDotButton = dot.props.children;
          const slickOnClick = slickDotButton.props.onClick;

          const isActive = dot.props.className === "slick-active";

          return (
            <li key={index} className="mx-1">
              <button
                onClick={slickOnClick}
                className={`w-2 h-2 rounded-full transition-all duration-300
                  ${isActive ? "bg-white opacity-100 scale-110" : "bg-white opacity-50"}
                `}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
