export default function IletisimPage() {
  return (
    <div className="container mx-auto px-6 py-16">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* SOL TARAF – BİLGİLER */}
        <div>
          <h2 className="text-3xl font-bold mb-6">İletişim Bilgileri</h2>

          {/* Adres */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Adres</h3>
            <p className="text-gray-700 mt-1 leading-relaxed">
              Örnek Mahallesi, Sanayi Cad. No: 25 <br />
              Organize Sanayi Bölgesi – Adana
            </p>
          </div>

          {/* Telefon */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Telefon</h3>
            <a
              href="tel:+905551112233"
              className="text-blue-600 hover:underline text-lg"
            >
              +90 555 111 22 33
            </a>
          </div>

          {/* Email */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">E-posta</h3>
            <a
              href="mailto:info@turmak.com"
              className="text-blue-600 hover:underline text-lg"
            >
              info@turmak.com
            </a>
          </div>

          {/* WHATSAPP BUTONU – İKON + YAZI */}
          <div className="mt-10">
            <a
              href="https://wa.me/905551112233"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 bg-green-500 text-white font-medium rounded-xl shadow-md hover:bg-green-600 transition w-fit"
            >
              {/* İKON KISMI */}
              <div className="w-7 h-7 flex items-center justify-center">
                <img
                  src="/images/whatsapp-icon.png"
                  alt="WhatsApp"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* YAZI */}
              <span className="whitespace-nowrap">
                WhatsApp’tan bize ulaşın
              </span>
            </a>
          </div>
        </div>

        {/* SAĞ TARAF – HARİTA */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3194.6927194788296!2d35.286!3d37.001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15288f501234567%3A0xabcd1234abcd5678!2sOrganize%20Sanayi%20B%C3%B6lgesi!5e0!3m2!1str!2str!4v1700000000000"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
