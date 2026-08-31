import { FiCheckCircle } from "react-icons/fi";

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-toast-in">
      <div className="flex items-center gap-2 bg-chill-surface border border-white/10 text-white text-sm font-medium px-5 py-3 rounded-full shadow-2xl">
        <FiCheckCircle className="text-chill-white shrink-0" />
        {message}
      </div>
    </div>
  );
}
