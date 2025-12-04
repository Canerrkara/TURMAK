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
              Sanayi Mahallesi, 60214 Nolu Cadde No: 15 <br />
              27100 Şehitkamil / Gaziantep
            </p>
          </div>

          {/* Telefon */}
<div className="mb-6">
  <h3 className="font-semibold text-lg">Telefon</h3>

  <a
    href="tel:+905458262928"
    className="text-blue-600 hover:underline text-lg block"
  >
    +90 545 826 29 28
  </a>

  <a
    href="tel:+905358224792"
    className="text-blue-600 hover:underline text-lg block"
  >
    +90 535 822 47 92
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
              href="https://wa.me/+905458262928"
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1125.4073696882465!2d37.45312113619839!3d37.078145498983716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e5909def97ed%3A0x3e40baf848d12635!2sSanayi%2C%2060214.%20Sk.%20No%3A15%2C%2027110%20%C5%9Eehitkamil%2FGaziantep!5e0!3m2!1str!2str!4v1764840918601!5m2!1str!2str"
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
