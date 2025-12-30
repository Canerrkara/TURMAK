import type { Route } from "./+types/iletisim";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "İletişim | Turmak Makine" },
    { name: "description", content: "Turmak Makine Gaziantep iletişim bilgileri, konum ve e-posta." },
  ];
}

export default function IletisimPage() {
  return (
    <div className="bg-white overflow-hidden">
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            
            {/* SOL TARAF: Bilgi Kartları */}
            <div className="lg:w-5/12 w-full space-y-6">
              
             
              {/* 1. ADRES - Mavi */}
              <div className="bg-white p-7 rounded-2xl shadow-sm border-t-4 border-[#0078bd] hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0078bd]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#0078bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Adresimiz</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">
                      Sanayi Mahallesi, 60214 Nolu Cadde No: 15 <br />
                      Şehitkamil / Gaziantep
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. TELEFON - Turuncu */}
              <div className="bg-white p-7 rounded-2xl shadow-sm border-t-4 border-[#f6a732] hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#f6a732]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#f6a732]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Bizi Arayın</h3>
                    <div className="space-y-1">
                      <a href="tel:+905458262928" className="text-lg font-bold text-gray-700 block hover:text-[#0078bd] transition">+90 545 826 29 28</a>
                      <a href="tel:+905358224792" className="text-lg font-bold text-gray-700 block hover:text-[#0078bd] transition">+90 535 822 47 92</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. MAIL - Mavi */}
              <div className="bg-white p-7 rounded-2xl shadow-sm border-t-4 border-[#0078bd] hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0078bd]/10 rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-[#0078bd]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">E-Posta</h3>
                    <a href="mailto:info@turmakisi.com.tr" className="text-lg font-bold text-[#0078bd] hover:underline transition">
                      info@turmakisi.com.tr
                    </a>
                  </div>
                </div>
              </div>

              {/* WHATSAPP BUTONU */}
              <div className="pt-2">
                <a
                  href="https://wa.me/905458262928"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-[#128C7E] transition-all transform hover:-translate-y-1 uppercase tracking-wider"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43 0 9.856-4.426 9.858-9.855.002-5.43-4.425-9.856-9.856-9.856-5.431 0-9.856 4.426-9.858 9.855 0 1.956.514 3.481 1.54 5.231l-.995 3.637 3.795-.995zm11.367-7.635c-.321-.16-.1.088-2.12-.924-.321-.16-.554-.24-.787.08-.232.321-.904 1.136-1.103 1.36-.199.224-.399.248-.72.088-.321-.16-1.355-.5-2.583-1.594-.954-.852-1.597-1.904-1.785-2.224-.188-.32-.02-.493.14-.652.144-.143.321-.376.481-.564.161-.188.216-.32.321-.536.104-.216.052-.4-.028-.56-.08-.16-.787-1.896-1.076-2.593-.282-.676-.569-.584-.787-.596-.204-.01-.437-.012-.67-.012-.232 0-.61.088-.928.433-.32.344-1.22 1.192-1.22 2.904 0 1.712 1.246 3.368 1.419 3.6.173.232 2.451 3.743 5.939 5.247.83.358 1.477.572 1.983.733.834.264 1.594.227 2.193.138.667-.1 2.05-.836 2.341-1.644.29-.808.29-1.504.204-1.644-.084-.144-.312-.232-.633-.392z"/></svg>
                  WHATSAPP İLE HIZLI ULAŞIN
                </a>
              </div>
            </div>

            {/* SAĞ TARAF: Harita (DOĞRU LİNK) */}
            <div className="lg:w-7/12 w-full relative">
              <div className="relative h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  title="Turmak Makine Konum"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1125.4073696882465!2d37.45312113619839!3d37.078145498983716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e5909def97ed%3A0x3e40baf848d12635!2sSanayi%2C%2060214.%20Sk.%20No%3A15%2C%2027110%20%C5%9Eehitkamil%2FGaziantep!5e0!3m2!1str!2str!4v1764840918601!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}