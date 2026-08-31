import CarouselRow from "./CarouselRow";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, items, isInMyList, onToggleMyList }) {
  return (
    <CarouselRow
      title={title}
      items={items}
      renderItem={(item) => (
        <MovieCard
          {...item}
          isInMyList={isInMyList(item.id)}
          onToggleMyList={() => onToggleMyList(item)}
        />
      )}
      gapClassName="gap-6"
      arrowTopClassName="top-[81px]"
    />
  );
}
