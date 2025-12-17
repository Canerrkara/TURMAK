import type { Product } from "../data/products";
import { NavLink } from "react-router";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="
        group relative overflow-hidden rounded-2xl
        border border-gray-200 bg-white
        shadow-sm transition-all duration-300
        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]
      "
    >
      {/* Görsel */}
      <div className="relative h-56 w-full bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Hafif alt gradient (görseli kapatmaz) */}
        <div
          className="
            pointer-events-none absolute inset-x-0 bottom-0 h-20
            bg-gradient-to-t from-black/35 to-transparent
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
          "
        />

        {/* Küçük CTA buton (alt-sol, minimal) */}
        <NavLink
          to="/iletisim"
          className="
            absolute left-4 bottom-4
            inline-flex items-center justify-center
            rounded-full px-4 py-2 text-sm font-semibold
            bg-[#0078bd] text-white hover:opacity-90
            shadow-sm ring-1 ring-black/10
            opacity-0 translate-y-2
            transition-all duration-300
            group-hover:opacity-100 group-hover:translate-y-0
            hover:bg-white
          "
          aria-label="İletişim sayfasına git"
        >
          İletişim
        </NavLink>
      </div>

      {/* Metin */}
      <div className="p-5 text-center">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>

        {/* Hover’da kısa bilgi (alt bölümde, sade) */}
        <p
          className="
            mt-3 text-sm text-gray-600
            opacity-0 max-h-0 overflow-hidden
            transition-all duration-300
            group-hover:opacity-100 group-hover:max-h-20
          "
        >
          {product.description}
        </p>
      </div>
    </div>
  );
}
