import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiUser, FiStar, FiLogOut } from "react-icons/fi";

const PROFILE_MENU = [
  { label: "Profil Saya", icon: <FiUser /> },
  { label: "Ubah Premium", icon: <FiStar /> },
  { label: "Keluar", icon: <FiLogOut /> },
];

const NAV_LINKS = [
  { label: "Series", to: "#" },
  { label: "Film", to: "#" },
  { label: "Daftar Saya", to: "/daftar-saya" },
];

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="relative z-30 w-full bg-chill-bg">
      <div className="h-[60px] sm:h-[70px] md:h-[94px] flex items-center justify-between px-3 sm:px-4 md:px-20 gap-2">
        <div className="flex items-center gap-3 sm:gap-6 md:gap-16 min-w-0">
          <Link to="/">
            <img
              src="/assets/logo-chill.png"
              alt="Chill"
              className="h-5 sm:h-6 md:h-9 shrink-0"
            />
          </Link>

          <nav className="flex items-center gap-2.5 sm:gap-5 md:gap-10 min-w-0 overflow-hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-xs sm:text-sm text-white hover:text-white/80 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative shrink-0">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1"
            aria-haspopup="true"
            aria-expanded={dropdownOpen}
          >
            <img
              src="/assets/avatar-profile.png"
              alt="Profil"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
            <FiChevronDown
              className={`text-white text-sm transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-[44px] sm:top-[50px] w-36 sm:w-40 max-w-[calc(100vw-24px)] bg-chill-surface rounded-lg shadow-xl overflow-hidden">
              {PROFILE_MENU.map((item) => (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-white hover:text-chill-primary hover:bg-white/5 text-left transition-colors"
                >
                  {item.icon} {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
