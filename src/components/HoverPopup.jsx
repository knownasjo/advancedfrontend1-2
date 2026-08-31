import PopupControls from "./PopupControls";

export default function HoverPopup({
  image,
  title,
  isInMyList,
  onToggleMyList,
  children,
}) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[408px] rounded-2xl overflow-hidden bg-chill-surface shadow-2xl z-30">
      <img src={image} alt={title} className="w-full h-[254px] object-cover" />

      <div className="px-[29px] py-6">
        <PopupControls
          isInMyList={isInMyList}
          onToggleMyList={onToggleMyList}
        />
        {children}
      </div>
    </div>
  );
}
