import { useState } from "react";
import { FiStar } from "react-icons/fi";
import useBreakpoint from "../hooks/useBreakpoint";
import HoverPopup from "./HoverPopup";

export default function MovieCard({
  id,
  title,
  image,
  rating,
  episodeLabel,
  progress,
  duration,
  genres,
  isInMyList,
  onToggleMyList,
}) {
  const { isMobile, isTablet } = useBreakpoint();
  const [isHovered, setIsHovered] = useState(false);

  const showPopup = isHovered && !isMobile;

  let cardSizeClass = "w-[302px] aspect-[302/162]";
  if (isMobile) cardSizeClass = "w-[78vw] max-w-[420px] aspect-video";
  else if (isTablet) cardSizeClass = "w-[280px] aspect-[302/162]";

  return (
    <div
      className={`relative shrink-0 ${cardSizeClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showPopup ? (
        <HoverPopup
          image={image}
          title={title}
          isInMyList={isInMyList}
          onToggleMyList={onToggleMyList}
        >
          <p className="text-sm font-semibold mb-2">
            &ldquo;{episodeLabel}&rdquo;
          </p>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 h-1 rounded-full bg-white/20 overflow-hidden">
              <div
                className="h-full bg-chill-primaryLight"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-white/60 whitespace-nowrap">
              {duration}
            </span>
          </div>

          <p className="text-xs text-white/60">{genres.join(" \u2022 ")}</p>
        </HoverPopup>
      ) : (
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-chill-surface">
          <img src={image} alt={title} className="w-full h-full object-cover" />

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/90 to-transparent">
            <p className="text-sm font-semibold truncate">{title}</p>
            <p className="text-xs flex items-center gap-1 text-white/90 shrink-0 ml-2">
              <FiStar className="text-yellow-400" /> {rating}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
