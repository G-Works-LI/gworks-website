export default function HomePage() {
  const services = [
    {
      title: "CAD Konstruktion",
      text: "Entwicklung von funktionalen Bauteilen, Gehäusen, Haltern, Adaptern und individuellen Lösungen – sauber aufgebaut und praxistauglich umgesetzt.",
      tag: "01",
    },
    {
      title: "3D-Druck",
      text: "Prototypen, Einzelteile und Kleinserien mit Fokus auf Funktion, Passform und schneller Umsetzung.",
      tag: "02",
    },
    {
      title: "Optimierung & Ersatzteile",
      text: "Bestehende Bauteile verbessern, nachbauen oder anpassen – ideal für Reparaturen, Weiterentwicklungen und Speziallösungen.",
      tag: "03",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Problem verstehen",
      text: "Foto, Skizze, Maße oder kurze Beschreibung genügen oft schon für einen klaren Start.",
    },
    {
      step: "02",
      title: "CAD entwickeln",
      text: "Das Bauteil wird konstruiert, abgestimmt und auf Funktion, Stabilität und Herstellbarkeit ausgelegt.",
    },
    {
      step: "03",
      title: "3D drucken",
      text: "Prototyp oder Endteil wird gefertigt – schnell, sauber und passend zum Einsatzzweck.",
    },
    {
      step: "04",
      title: "Testen & verbessern",
      text: "Wenn nötig wird weiter optimiert, bis das Teil im praktischen Einsatz überzeugt.",
    },
  ];

  const highlights = [
    "Individuelle Lösungen statt Standardteile",
    "Schnelle Umsetzung von Idee bis Prototyp",
    "Funktion im Fokus",
    "Entwickelt in Liechtenstein",
  ];

  return (
    <main className="min-h-screen bg-[#f6f3ed] text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f6f3ed]/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl font-bold text-white shadow-sm">
              G
            </div>
            <div>
              <div className="text-[15px] font-semibold tracking-[0.14em] text-neutral-500 uppercase">
                G-Works
              </div>
              <div className="text-[26px] font-black leading-none">G-Works</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            <a href="#leistungen" className="text-sm font-medium text-neutral-700 hover:text-black">
              Leistungen
            </a>
            <a href="#ablauf" className="text-sm font-medium text-neutral-700 hover:text-black">
              Ablauf
            </a>
            <a href="#projekte" className="text-sm font-medium text-neutral-700 hover:text-black">
              Projekte
            </a>
            <a href="#kontakt" className="text-sm font-medium text-neutral-700 hover:text-black">
              Kontakt
            </a>
          </nav>

          <a
            href="mailto:info@gworks.li"
            className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Anfrage senden
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-black/10">
        {/* technische Hintergrundebene */}
        <div className="pointer-events-none absolute inset-0">
          {/* Grundraster */}
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)",
              backgroundSize: "38px 38px",
            }}
          />

          {/* CAD-Kreise rechts oben */}
          <div className="absolute -right-10 top-[-40px] h-[260px] w-[260px] rounded-full border border-[#ff6a00]/20" />
          <div className="absolute right-[90px] top-[70px] h-[110px] w-[110px] rounded-full border border-black/12" />
          <div className="absolute right-[160px] top-[140px] h-[36px] w-[36px] rounded-full border border-black/12" />

          {/* technische Linien links unten */}
          <div className="absolute left-[-80px] bottom-[120px] h-[220px] w-[220px] rounded-full border border-black/10" />
          <div className="absolute left-[70px] bottom-[180px] h-[90px] w-[90px] rounded-full border border-black/10" />
          <div className="absolute left-[120px] bottom-[220px] h-[12px] w-[12px] rounded-full bg-[#ff6a00]/70" />

          {/* feine Maßlinien */}
          <div className="absolute left-[8%] top-[22%] h-px w-[220px] bg-black/10" />
          <div className="absolute left-[8%] top-[22%] h-2 w-2 -translate-y-1/2 rounded-full bg-black/20" />
          <div className="absolute left-[calc(8%+220px)] top-[22%] h-2 w-2 -translate-y-1/2 rounded-full bg-black/20" />

          <div className="absolute right-[10%] bottom-[22%] h-px w-[200px] bg-[#ff6a00]/20" />
          <div className="absolute right-[10%] bottom-[22%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#ff6a00]/35" />
          <div className="absolute right-[calc(10%+200px)] bottom-[22%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#ff6a00]/35" />

          {/* Mini Label */}
          <div className="absolute left-[7%] top-[30%] rounded-full border border-black/10 bg-white/60 px-2 py-1 text-[10px] font-semibold tracking-[0.18em] text-neutral-500 backdrop-blur-sm">
            X/Y · CAD
          </div>
          <div className="absolute right-[13%] top-[28%] rounded-full border border-[#ff6a00]/20 bg-white/60 px-2 py-1 text-[10px] font-semibold tracking-[0.18em] text-[#ff6a00] backdrop-blur-sm">
            Ø 24 · M3
          </div>

          {/* leichte Circuit-Linien */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.12]"
            viewBox="0 0 1600 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M120 850 H280 V760 H460"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-black"
            />
            <circle cx="120" cy="850" r="5" className="fill-black" />
            <circle cx="280" cy="760" r="5" className="fill-black" />
            <circle cx="460" cy="760" r="5" className="fill-black" />

            <path
              d="M1330 170 H1480 V300 H1540"
              fill="none"
              stroke="#ff6a00"
              strokeWidth="1.5"
            />
            <circle cx="1330" cy="170" r="5" fill="#ff6a00" />
            <circle cx="1480" cy="300" r="5" fill="#ff6a00" />
            <circle cx="1540" cy="300" r="5" fill="#ff6a00" />
          </svg>
        </div>

        <div className="relative mx-auto grid max-w-[1320px] items-center gap-14 px-5 py-16 md:px-6 md:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          {/* links */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex flex-wrap items-center gap-3 rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-neutral-600 shadow-sm">
              <span>CAD-Design</span>
              <span className="opacity-40">·</span>
              <span>3D-Druck</span>
              <span className="opacity-40">·</span>
              <span>Prototypen</span>
              <span className="opacity-40">·</span>
              <span>Ersatzteile</span>
            </div>

            <h1 className="max-w-[760px] text-[54px] font-black leading-[0.93] tracking-[-0.04em] md:text-[82px] lg:text-[92px]">
              <span className="block">CAD Design &</span>
              <span className="block">3D-Druck</span>
              <span className="block text-[#ff5a00]">für funktionale</span>
              <span className="block text-[#ff5a00]">Bauteile.</span>
            </h1>

            <p className="mt-8 max-w-[720px] text-[20px] leading-[1.7] text-neutral-700 md:text-[22px]">
              G-Works konstruiert und fertigt individuelle Bauteile, Prototypen,
              Ersatzteile und Kleinserien. Von der ersten Idee bis zum
              brauchbaren 3D-gedruckten Teil – entwickelt in Liechtenstein.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:info@gworks.li"
                className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
              >
                Projekt anfragen
              </a>
              <a
                href="#ablauf"
                className="inline-flex items-center justify-center rounded-full border border-black/12 bg-white px-8 py-4 text-lg font-semibold text-black shadow-sm transition hover:bg-black hover:text-white"
              >
                So funktioniert es
              </a>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 bg-white/80 px-4 py-4 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* rechts mockup */}
          <div className="relative z-10">
            <div className="relative mx-auto max-w-[620px] rounded-[34px] border border-black/10 bg-white p-5 shadow-[0_30px_80px_rgba(0,0,0,0.10)] md:p-6">
              <div className="rounded-[28px] border border-black/10 bg-[#f7f4ef] p-5">
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#ff6a00] px-4 py-1.5 text-sm font-black uppercase tracking-[0.18em] text-white">
                    CAD Entwicklung
                  </span>
                  <span className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm font-semibold text-neutral-500">
                    Konstruktion
                  </span>
                  <span className="rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm font-semibold text-neutral-500">
                    Prototyp
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-[24px] border border-black/8 bg-[#ece9e4]">
                  <div
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                    }}
                  />
                  <img
                    src="/images/windrad-engineering-v3.jpg"
                    alt="Technische CAD-Darstellung"
                    className="relative z-10 h-[320px] w-full object-contain p-6 md:h-[430px]"
                  />

                  <div className="absolute left-4 top-4 rounded-full border border-black/10 bg-white/85 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-neutral-500 backdrop-blur">
                    WIREFRAME
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-full border border-[#ff6a00]/20 bg-white/85 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-[#ff6a00] backdrop-blur">
                    TECHNICAL VIEW
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {[
                    { n: "01", t: "CAD" },
                    { n: "02", t: "Druck" },
                    { n: "03", t: "Bauteil" },
                  ].map((item) => (
                    <div
                      key={item.n}
                      className="rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
                    >
                      <div className="text-xs font-bold tracking-[0.25em] text-neutral-400">
                        {item.n}
                      </div>
                      <div className="mt-3 text-[18px] font-black text-neutral-900">
                        {item.t}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 rounded-[22px] bg-[#111] p-5 text-white">
                <div className="text-lg font-semibold">Technische Entwicklung</div>
                <div className="mt-1 text-sm text-white/70">
                  Von der Idee bis zum einsetzbaren Teil.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section
        id="leistungen"
        className="relative border-b border-black/10 bg-white px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 max-w-[760px]">
            <div className="mb-4 inline-flex rounded-full border border-[#ff6a00]/20 bg-[#fff4ec] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#ff6a00]">
              Leistungen
            </div>
            <h2 className="text-[40px] font-black leading-tight tracking-[-0.03em] md:text-[58px]">
              Konstruktion, Druck und praxisnahe Lösungen.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600 md:text-[20px]">
              G-Works verbindet technisches Denken, saubere Konstruktion und
              anwendungsorientierten 3D-Druck.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-[28px] border border-black/10 bg-[#f7f4ef] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff6a00] text-lg font-black text-white">
                  {service.tag}
                </div>
                <h3 className="text-[28px] font-black leading-tight tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="mt-4 text-[17px] leading-8 text-neutral-600">
                  {service.text}
                </p>

                <div className="mt-8 h-px w-full bg-black/8" />
                <div className="mt-5 text-sm font-semibold text-neutral-500">
                  Funktional · Präzise · Individuell
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section
        id="ablauf"
        className="relative overflow-hidden border-b border-black/10 bg-[#f6f3ed] px-5 py-16 md:px-6 md:py-24"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative mx-auto max-w-[1320px]">
          <div className="mb-12 max-w-[760px]">
            <div className="mb-4 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-neutral-600">
              Ablauf
            </div>
            <h2 className="text-[40px] font-black leading-tight tracking-[-0.03em] md:text-[58px]">
              Von der Idee zum fertigen Bauteil.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600 md:text-[20px]">
              Klar, schnell und ohne unnötige Umwege – genau so soll Entwicklung
              funktionieren.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.step}
                className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#ff6a00] text-[28px] font-black text-white shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-[30px] font-black leading-tight tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-4 text-[17px] leading-8 text-neutral-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJEKTE / SHOWCASE */}
      <section
        id="projekte"
        className="border-b border-black/10 bg-white px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-[1320px]">
          <div className="mb-12 max-w-[760px]">
            <div className="mb-4 inline-flex rounded-full border border-[#ff6a00]/20 bg-[#fff4ec] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#ff6a00]">
              Projekte
            </div>
            <h2 className="text-[40px] font-black leading-tight tracking-[-0.03em] md:text-[58px]">
              Beispiele aus Entwicklung und Anwendung.
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600 md:text-[20px]">
              Technische Lösungen, visuell sauber präsentiert und funktional
              gedacht.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="overflow-hidden rounded-[30px] border border-black/10 bg-[#f7f4ef] shadow-sm">
              <div className="flex items-center justify-between border-b border-black/8 px-6 py-5">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-[#ff6a00]">
                    Featured
                  </div>
                  <div className="mt-1 text-[30px] font-black">CAD / Engineering</div>
                </div>
                <div className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-neutral-500">
                  Konzept bis Bauteil
                </div>
              </div>

              <div className="grid items-center gap-6 p-6 md:grid-cols-[0.95fr_1.05fr]">
                <div>
                  <h3 className="text-[34px] font-black leading-tight tracking-[-0.03em]">
                    Technische Visualisierung als Teil des Auftritts.
                  </h3>
                  <p className="mt-4 text-[17px] leading-8 text-neutral-600">
                    CAD, Konstruktion und Entwicklung dürfen auf der Website
                    sichtbar werden. Dadurch wirkt G-Works präziser, technischer
                    und professioneller.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <span className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
                      CAD
                    </span>
                    <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-neutral-600">
                      Konstruktion
                    </span>
                    <span className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-neutral-600">
                      Visualisierung
                    </span>
                  </div>
                </div>

                <div className="overflow-hidden rounded-[24px] border border-black/8 bg-[#ece9e4]">
                  <img
                    src="/images/windrad-engineering-v3.jpg"
                    alt="Technische Darstellung"
                    className="h-full w-full object-contain p-5"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[30px] border border-black/10 bg-[#111] p-8 text-white shadow-sm">
                <div className="text-xs font-black uppercase tracking-[0.22em] text-[#ff6a00]">
                  Warum G-Works?
                </div>
                <h3 className="mt-3 text-[34px] font-black leading-tight tracking-[-0.03em]">
                  Technisch denken. Praktisch lösen.
                </h3>
                <p className="mt-4 text-[16px] leading-8 text-white/75">
                  Nicht nur hübsche Modelle, sondern brauchbare Teile mit klarer
                  Funktion und sauberer Ausführung.
                </p>
              </div>

              <div className="rounded-[30px] border border-black/10 bg-[#f7f4ef] p-8 shadow-sm">
                <div className="text-xs font-black uppercase tracking-[0.22em] text-neutral-500">
                  Einsatzbereiche
                </div>
                <ul className="mt-5 space-y-4 text-[17px] leading-8 text-neutral-700">
                  <li>• Prototypen für Entwicklung und Test</li>
                  <li>• Ersatzteile und Sonderteile</li>
                  <li>• Halterungen, Adapter und Gehäuse</li>
                  <li>• Kleinserien und funktionale Einzelstücke</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section
        id="kontakt"
        className="relative overflow-hidden bg-[#f6f3ed] px-5 py-16 md:px-6 md:py-24"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[8%] top-[18%] h-[180px] w-[180px] rounded-full border border-[#ff6a00]/15" />
          <div className="absolute left-[8%] bottom-[12%] h-[120px] w-[120px] rounded-full border border-black/10" />
        </div>

        <div className="relative mx-auto max-w-[1320px]">
          <div className="rounded-[34px] border border-black/10 bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)] md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[760px]">
                <div className="mb-4 inline-flex rounded-full border border-[#ff6a00]/20 bg-[#fff4ec] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#ff6a00]">
                  Kontakt
                </div>
                <h2 className="text-[40px] font-black leading-tight tracking-[-0.03em] md:text-[58px]">
                  Lassen wir Ihre Idee Form annehmen.
                </h2>
                <p className="mt-5 text-lg leading-8 text-neutral-600 md:text-[20px]">
                  Sie haben eine Idee, ein defektes Teil, einen Prototypen oder
                  eine technische Fragestellung? Dann schreiben Sie mir.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="mailto:info@gworks.li"
                  className="inline-flex items-center justify-center rounded-full bg-black px-8 py-4 text-lg font-semibold text-white transition hover:opacity-90"
                >
                  info@gworks.li
                </a>
                <a
                  href="https://www.gworks.li"
                  className="inline-flex items-center justify-center rounded-full border border-black/12 bg-[#f7f4ef] px-8 py-4 text-lg font-semibold text-black transition hover:bg-black hover:text-white"
                >
                  www.gworks.li
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-black/8 bg-[#f7f4ef] p-5">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500">
                  Standort
                </div>
                <div className="mt-3 text-[22px] font-black">Liechtenstein</div>
              </div>
              <div className="rounded-2xl border border-black/8 bg-[#f7f4ef] p-5">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500">
                  Fokus
                </div>
                <div className="mt-3 text-[22px] font-black">
                  Funktionale Bauteile
                </div>
              </div>
              <div className="rounded-2xl border border-black/8 bg-[#f7f4ef] p-5">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-neutral-500">
                  Leistung
                </div>
                <div className="mt-3 text-[22px] font-black">
                  CAD & 3D-Druck
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-[#f6f3ed] px-5 py-8 md:px-6">
        <div className="mx-auto flex max-w-[1320px] flex-col gap-3 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} G-Works</div>
          <div className="flex flex-wrap gap-5">
            <a href="/impressum" className="hover:text-black">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-black">
              Datenschutz
            </a>
            <a href="mailto:info@gworks.li" className="hover:text-black">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}