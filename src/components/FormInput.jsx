import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function FormInput({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === "password";

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-white mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={id}
          type={isPasswordField && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full rounded-full bg-transparent border px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-chill-primary transition-colors ${
            error ? "border-chill-danger" : "border-white/30"
          }`}
        />

        {isPasswordField && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
            aria-label={
              showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
            }
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        )}
      </div>

      {error && <p className="mt-1 text-xs text-chill-danger px-1">{error}</p>}
    </div>
  );
}
