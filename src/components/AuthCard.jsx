import { FcGoogle } from "react-icons/fc";

export default function AuthCard({
  title,
  subtitle,
  children,
  submitLabel,
  onSubmit,
  socialLabel,
  onSocialClick,
  footerText,
  footerLinkText,
  onFooterLinkClick,
  extraLinkText,
  onExtraLinkClick,
}) {
  return (
    <div className="w-full max-w-md bg-chill-bg/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl">
      <div className="flex justify-center mb-6">
        <img
          src="/assets/logo-chill.png"
          alt="Chill"
          className="h-10 sm:h-12"
        />
      </div>

      <h1 className="text-2xl font-bold text-center mb-1">{title}</h1>
      <p className="text-sm text-white/60 text-center mb-6">{subtitle}</p>

      <form onSubmit={onSubmit}>
        {children}

        <div className="flex items-center justify-between mb-5 text-xs">
          <p className="text-white/60">
            {footerText}{" "}
            <button
              type="button"
              onClick={onFooterLinkClick}
              className="text-white font-semibold hover:underline"
            >
              {footerLinkText}
            </button>
          </p>

          {extraLinkText && (
            <button
              type="button"
              onClick={onExtraLinkClick}
              className="text-white/60 hover:text-white hover:underline"
            >
              {extraLinkText}
            </button>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-white/10 hover:bg-white/20 border border-white/20 py-3 text-sm font-semibold transition-colors"
        >
          {submitLabel}
        </button>

        <div className="flex items-center gap-3 my-4">
          <span className="flex-1 h-px bg-white/15" />
          <span className="text-xs text-white/40">Atau</span>
          <span className="flex-1 h-px bg-white/15" />
        </div>

        <button
          type="button"
          onClick={onSocialClick}
          className="w-full flex items-center justify-center gap-2 rounded-full border border-white/30 hover:bg-white/10 py-3 text-sm font-semibold transition-colors"
        >
          <FcGoogle className="text-lg" /> {socialLabel}
        </button>
      </form>
    </div>
  );
}
