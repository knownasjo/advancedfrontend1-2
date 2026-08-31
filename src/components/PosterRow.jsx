import CarouselRow from "./CarouselRow";
import PosterCard from "./PosterCard";

export default function PosterRow({
  title,
  items,
  isInMyList,
  onToggleMyList,
}) {
  return (
    <CarouselRow
      title={title}
      items={items}
      renderItem={(item) => (
        <PosterCard
          {...item}
          isInMyList={isInMyList(item.id)}
          onToggleMyList={() => onToggleMyList(item)}
        />
      )}
      gapClassName="gap-7"
      arrowTopClassName="top-[182px]"
    />
  );
}
