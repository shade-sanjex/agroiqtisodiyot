import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FileText, CheckCircle } from 'lucide-react';

export default function Requirements() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-4 md:mb-6">
                <FileText className="h-12 w-12 md:h-16 md:w-16 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Jurnal talablari
              </h1>
              <p className="text-base md:text-lg text-muted-foreground">
                Maqola tayyorlash va yuborish uchun qo'llanma
              </p>
            </div>
          </div>
        </section>

        {/* Requirements Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
              {/* Journal Info */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 md:p-6 rounded-lg border border-primary/30">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                  "AGROIQTISODIYOT" jurnali haqida
                </h2>
                <div className="space-y-3 text-sm md:text-base">
                  <p>
                    <strong>"AGROIQTISODIYOT"</strong> ilmiy-amaliy agroiqtisodiy jurnali 2017 yil iyun oyidan boshlab nashr etila boshlandi. Unda iqtisodiyot mavzusidagi maqolalar bilan qatnashish mumkin. Jurnal har chorakda bir marotaba chop etiladi. Bayramlar, ilmiy anjumanlar va festivallar munosabati bilan jurnalning maxsus soni ham chop etilishi mumkin.
                  </p>
                  
                </div>
              </div>

              {/* General Requirements */}
              <div className="bg-card p-4 md:p-6 rounded-lg border border-border">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />
                  Umumiy talablar
                </h2>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Jurnal har chorakda bir marotaba chop etiladi</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Maqolalar kamida <strong>8 betdan</strong> iborat bo'lishi kerak</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>A4 o'lchamida</strong> oq qog'ozda, <strong>1,5 interval</strong> bilan tayyorlanishi</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>14 shriftda Times New Roman</strong> shriftida yozilishi</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>O'zbek, rus, ingliz</strong> tillarida annotatsiya va kalit so'zlar bo'lishi kerak</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mualliflarning to'liq ismi va sharifi, lavozimi, ilmiy darajasi va unvoni, manzili, telefon raqami va elektron pochta manzili ko'rsatilishi kerak</span>
                  </li>
                </ul>
              </div>

              {/* Submission */}
              <div className="bg-card p-4 md:p-6 rounded-lg border border-border">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6" />
                  Maqola yuborish
                </h2>
                <p className="text-sm md:text-base">
                  Ushbu jurnalda e'lon qilingan maqolalar bilan <strong>Oziq-ovqat va kishloq xo'jaligi soxasida strategik rivojlanish va tadqiqotlar xalqaro markazi</strong> veb-saytida <a href="http://www.agroiqtisodiyot.uz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline"><strong>www.agroiqtisodiyot.uz</strong></a> orqali tanishishingiz mumkin.
                </p>
              </div>

              {/* Important Notes */}
              <div className="bg-card p-4 md:p-6 rounded-lg border border-border">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">Muhim eslatmalar:</h2>
                <ul className="space-y-3 text-sm md:text-base">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Maqolalarda <span className="text-red-600 dark:text-red-400 font-semibold">akademik halollik, boshqa manballardan o'zlashtirilgan ma'lumotlarga havola va fakt hamda raqamlarning haqiqiyligiga alohida e'tibor</span> berilishi talab etiladi
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Tahririyat fikrlari mualliflarning fikri va qarashlariga mos kelmasligi mumkin</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
