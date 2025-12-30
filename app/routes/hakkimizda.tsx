import type { Route } from "./+types/hakkimizda";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hakkımızda | Turmak Makine" },
    { name: "description", content: "Turmak Makine kurumsal değerleri ve Gaziantep merkezli endüstriyel çözümleri." },
  ];
}

export default function HakkimizdaPage() {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. BİZ KİMİZ - Boşluklar (py) daraltıldı */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 space-y-4">
              <div>
                <span className="text-[#f6a732] font-bold tracking-widest uppercase text-[10px] px-2 py-0.5 bg-[#f6a732]/10 rounded">Biz Kimiz?</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Güvenilir Çözüm Ortağınız</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Turmak Makine olarak Gaziantep merkezli üretim tesislerimizde uzmanlaşıyoruz. 
                Her projemizde verimliliği ve yenilikçi mühendisliği esas alıyoruz.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-[#0078bd]">
                  <span className="block text-xl font-bold text-[#0078bd]">10+</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Yıllık Tecrübe</span>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-[#f6a732]">
                  <span className="block text-xl font-bold text-[#f6a732]">100+</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Mutlu Müşteri</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img 
                  src="/images/anahtar.jpg" 
                  alt="Turmak Makine" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. İLKELERİMİZ - Daha dar ve sade kartlar */}
      <section className="py-8 bg-gray-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">İlkelerimiz</h2>
            <div className="h-1 w-10 bg-[#f6a732] mx-auto mt-2 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {/* Vizyon, Misyon ve Değerler kartları p-6 ve text-sm ile küçültüldü */}
            {[
              { title: "Vizyon", color: "#0078bd", desc: "Teknolojik gelişmeleri üretime entegre ederek küresel bir oyuncu olmak." },
              { title: "Misyon", color: "#f6a732", desc: "Müşterilerimize özel, yüksek kaliteli ve sürdürülebilir çözümler sunmak." },
              { title: "Değerler", color: "#1f2937", desc: "Şeffaflık ve dürüstlükle sektörde güvenin simgesi olmayı sürdürüyoruz." }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-t-4 hover:shadow-md transition-all" style={{borderColor: item.color}}>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}