import { useState } from "react";
import useBreakpoint from "../hooks/useBreakpoint";
import HoverPopup from "./HoverPopup";

export default function PosterCard({
  id,
  title,
  image,
  topTen,
  episodeBaru,
  ageRating,
  episodeInfo,
  genres,
  isInMyList,
  onToggleMyList,
}) {
  const { isMobile, isTablet } = useBreakpoint();
  const [isHovered, setIsHovered] = useState(false);

  const showPopup = isHovered && !isMobile;

  let cardSizeClass = "w-[234px] h-[365px]";
  if (isMobile) cardSizeClass = "w-[150px] h-[234px]";
  else if (isTablet) cardSizeClass = "w-[200px] h-[312px]";

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
          <div className="flex items-center gap-2 mb-3">
            <span className="border border-white/40 rounded px-2 py-1 text-xs text-white/90">
              {ageRating}
            </span>
            <span className="text-sm text-white/80">{episodeInfo}</span>
          </div>

          <p className="text-xs text-white/60">{genres.join(" \u2022 ")}</p>
        </HoverPopup>
      ) : (
        <div className="absolute inset-0 rounded-lg overflow-hidden bg-chill-surface">
          <img src={image} alt={title} className="w-full h-full object-cover" />

          {topTen && (
            <div className="absolute top-0 right-4 w-[31px] h-12 bg-chill-danger text-white text-[10px] font-bold text-center leading-tight flex flex-col items-center justify-center rounded-b">
              <span>Top</span>
              <span>10</span>
            </div>
          )}

          {episodeBaru && (
            <div className="absolute top-2 left-2 bg-chill-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
              Episode Baru
            </div>
          )}
        </div>
      )}
    </div>
  );
}
