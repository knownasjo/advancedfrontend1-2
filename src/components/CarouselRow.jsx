import { useState, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useBreakpoint from "../hooks/useBreakpoint";

export default function CarouselRow({
  title,
  items,
  renderItem,
  gapClassName,
  arrowTopClassName,
}) {
  const { isMobile } = useBreakpoint();
  const [offset, setOffset] = useState(0);
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);

  function scroll(direction) {
    const wrapperWidth = wrapperRef.current.offsetWidth;
    const trackWidth = trackRef.current.scrollWidth;
    const minOffset = Math.min(0, wrapperWidth - trackWidth);
    const step = wrapperWidth * 0.8;

    const nextOffset = direction === "left" ? offset + step : offset - step;
    setOffset(Math.max(minOffset, Math.min(0, nextOffset)));
  }

  const arrowButtonClass = `absolute ${arrowTopClassName} -translate-y-1/2 z-40 w-11 h-11 flex items-center justify-center rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity`;

  return (
    <section className="mb-14">
      <h2 className="text-lg sm:text-xl font-bold px-3 sm:px-4 md:px-20 mb-3 sm:mb-5">
        {title}
      </h2>

      {isMobile ? (
        <div className="flex gap-3 overflow-x-auto no-scrollbar px-3 pb-2 snap-x snap-mandatory scroll-smooth">
          {items.map((item) => (
            <div key={item.title} className="snap-start">
              {renderItem(item)}
            </div>
          ))}
        </div>
      ) : (
        <div className="relative group px-4 md:px-20">
          <button
            onClick={() => scroll("left")}
            aria-label="Geser ke kiri"
            className={`${arrowButtonClass} left-1 md:left-4`}
          >
            <FiChevronLeft />
          </button>

          <div ref={wrapperRef}>
            <div
              ref={trackRef}
              className={`flex ${gapClassName} w-max transition-[left] duration-300 ease-out`}
              style={{ position: "relative", left: `${offset}px` }}
            >
              {items.map((item) => (
                <div key={item.title}>{renderItem(item)}</div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll("right")}
            aria-label="Geser ke kanan"
            className={`${arrowButtonClass} right-1 md:right-4`}
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
