import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import centerBuilding from '@/assets/center-building.jpg';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${centerBuilding})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/70" />
          </div>
          
          <div className="relative container mx-auto px-4 text-center text-white z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Markaz Haqida</h1>
            <p className="text-base md:text-lg lg:text-xl">O'zbekiston qishloq xo'jaligi rivojlanishining yetakchi markazi</p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Markaz Haqida</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Oziq-ovqat va Qishloq Xo'jaligi Sohasida Strategik Rivojlanish va Tadqiqotlar Xalqaro Markazi (ISCAD) 
                O'zbekiston Respublikasi Qishloq xo'jaligi vazirligi huzuridagi davlat tashkiloti hisoblanadi. 
                Markaz O'zbekiston qishloq xo'jaligi sektoridagi islohotlarni qo'llab-quvvatlash, oziq-ovqat xavfsizligini 
                ta'minlash va barqaror rivojlanishga erishish maqsadida tashkil etilgan. ISCAD mintaqaviy va xalqaro 
                miqyosda ilmiy-tadqiqot faoliyatini olib boradi, strategik tahlillar va tavsiyalar ishlab chiqadi.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 mt-12">Asosiy Vazifalar</h2>
              <div className="grid gap-6 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Ilmiy Tadqiqotlar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Qishloq xo'jaligi mahsulotlari ishlab chiqarish, qayta ishlash va oziq-ovqat xavfsizligini 
                      ta'minlash bo'yicha fundamental va amaliy tadqiqotlarni olib borish.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Strategik Rejalashtirish</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      O'zbekiston qishloq xo'jaligi sektorining barqaror rivojlanishi uchun uzoq muddatli 
                      strategiyalar ishlab chiqish va amalga oshirishga ko'maklashish.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Innovatsion Texnologiyalar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Zamonaviy agrotexnologiyalar, sun'iy intellekt va raqamli yechimlarni qishloq xo'jaligi 
                      amaliyotiga joriy etish bo'yicha tadqiqotlar olib borish.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Xalqaro Hamkorlik</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Jahon miqyosidagi ilmiy markazlar, universitetlar va xalqaro tashkilotlar bilan hamkorlik 
                      qilish orqali tajriba almashish va qo'shma loyihalar amalga oshirish.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ta'lim va Malaka Oshirish</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Qishloq xo'jaligi mutaxassislari, tadqiqotchilar va fermerlar uchun o'quv dasturlari, 
                      seminarlar va treninglar tashkil etish.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">Bizning Jamoa</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                ISCAD jamoasi yuqori malakali tadqiqotchilar, agronlar, iqtisodchilar va xalqaro mutaxassislardan 
                iborat bo'lib, ular qishloq xo'jaligi, oziq-ovqat sanoati, ekologiya va barqaror rivojlanish sohasida 
                boy tajribaga ega. Markaz xodimlari mintaqaviy va xalqaro loyihalar ustida faol ishlab, zamonaviy 
                agrotexnologiyalar va ilmiy yondashuvlarni O'zbekiston amaliyotiga joriy etishga hissa qo'shmoqda.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">Aloqa Ma'lumotlari</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4 text-base md:text-lg">
                    <div>
                      <p className="font-semibold text-primary mb-2">Manzil:</p>
                      <p className="text-muted-foreground">
                        100140, Toshkent viloyati, Qibray tumani, Universitet ko'chasi, 2 uy.<br />
                        Oziq-ovqat va kishloq xo'jaligi soxasida strategik rivojlanish va tadqiqotlar xalqaro markazi (ISCAD)
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">Telefon:</p>
                      <p className="text-muted-foreground">
                        <a href="tel:+998712605230" className="hover:text-primary transition-colors">
                          (+0371) 2605230
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">Faks:</p>
                      <p className="text-muted-foreground">(+0371) 2605230</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">Elektron pochta:</p>
                      <p className="text-muted-foreground">
                        <a href="mailto:ooqxssrtxm@agro.uz" className="hover:text-primary transition-colors">
                          ooqxssrtxm@agro.uz
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">Veb-sayt:</p>
                      <p className="text-muted-foreground">
                        <a href="http://www.iscad.uz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                          www.iscad.uz
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;