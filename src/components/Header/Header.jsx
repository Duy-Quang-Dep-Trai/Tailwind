// Header.jsx (PHƯƠNG ÁN A)
import { useState } from "react";
import logo from "../../assets/logo.png";
import viewport from "../../assets/vietpost.png";
import icon from "../../assets/icon-cart.png";

const NAV = [
  { label: "Trang chủ", href: "#", active: true },
  { label: "Giới thiệu", href: "#" },
  { label: "Sản phẩm", href: "#" },
  { label: "Lịch sử", href: "#" },
  { label: "Liên hệ", href: "#" },
];

export default function Header() {
  const [openLang, setOpenLang] = useState(false);

  return (
    <header className="w-full bg-[#020D07]">
      {/* KHÔNG bọc container ở đây, vì trang đã có container chung */}
      <div
        className="w-full h-[80px] relative top-[2px] grid items-center"
        // 3 cột: 95 | 1fr | 430.211 -> giống Figma, nav fill ở giữa
        style={{ gridTemplateColumns: "95px 1fr 430.211px" }}
      >
        {/* Logo 95x48 (trái) */}
        <a href="/" className="h-12 flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[95px] h-[48px] block"
            width={95}
            height={48}
          />
        </a>

        {/* NAV ở giữa: không khoá w=662 nữa, chỉ center + gap=80 */}
        <nav className="flex justify-center">
          <ul className="flex items-center justify-center gap-[80px]">
            {NAV.map((it) => (
              <li key={it.label} className="relative">
                <a
                  href={it.href}
                  className={`font-[SVN-Gilroy] text-[16px] leading-[20px] ${
                    it.active
                      ? "font-bold text-white"
                      : "font-medium text-white/90 hover:text-white"
                  }`}
                >
                  {it.label}
                </a>
                {it.active && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-[10px] block h-[4px] w-[28px] rounded-[76px] bg-[#03B72A]" />
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Nhóm phải 430.211x32, gap 30 (phải) */}
        <div className="w-[430.211px] h-[32px] flex items-center justify-end gap-[30px]">
          <div className="w-[168px] h-[20px] flex items-center justify-center">
            <span className="font-[SVN-Gilroy] font-medium text-[14px] leading-[20px] text-white/90 text-center">
              nguyenvanA@gmail.com
            </span>
          </div>

          <button
            onClick={() => setOpenLang((v) => !v)}
            className="flex items-center h-[24px] w-[141.851px] px-[8px] rounded-[8px] hover:bg-white/5"
            aria-haspopup="menu"
            aria-expanded={openLang}
          >
            <img
              src="https://image.conooran.com/image/8448ec1092394e02b6b4d2227788d7f6.png"
              alt="VN"
              className="w-[30px] h-[20px] rounded mr-2"
            />
            <span className="font-[SVN-Gilroy] text-[14px] leading-[20px] text-white/90">
              Tiếng Việt
            </span>
            <svg
              className="ml-auto"
              width="12"
              height="12"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="M5 7l5 5 5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          <img
            src={icon}
            alt="Giỏ hàng"
            className="w-[25px] h-[24px] object-contain"
          />
          <img
            src={viewport}
            alt="avatar"
            className="w-[33.36px] h-[32px] rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
