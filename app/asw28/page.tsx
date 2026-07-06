const products = [
  {
    title: "Winglet Schnellwechsel-System",
    text: "Servicefreundlicher Austausch nach Transport oder Beschädigung.",
    image: "/images/winglet-mit-adapter-v6.jpg",
    link: "#kontakt",
  },
  {
    title: "Haubensicherung hinten und vorne",
    text: "Mechanische Sicherung mit Federmechanik für zuverlässigen Halt.",
    image: "/images/haubenbefestigung-hinten-und-vorne-v2.jpg",
    link: "#kontakt",
  },
  {
    title: "Akkuplatte mit Klettverschlussschlitz",
    text: "Leichte Zusatzsicherung zum Aufkleben möglich.",
    image: "/images/akkuplatte-v3.jpg",
    link: "#kontakt",
  },
  {
    title: "Servo-Cover",
    text: "Aerodynamische Servo-Abdeckungen für die ASW 28 V2.",
    image: "/images/servo-cover-v5.jpg",
    link: "#kontakt",
  },
  {
    title: "Spinner mit Nase",
    text: "Ersatz- und Designteil mit markanter G-Works Optik.",
    image: "/images/spinner-mit-nase-v4.jpg",
    link: "#kontakt",
  },
  {
    title: "Canopy Pins",
    text: "Sicherheitsstifte mit definierter Sollbruchstelle.",
    image: "/images/canopystifte-v2.jpg",
    link: "#kontakt",
  },
];

const benefits = [
  {
    title: "Praxiserprobt",
    text: "Entwickelt direkt am Modell und im realen Einsatz getestet.",
  },
  {
    title: "Servicefreundlich",
    text: "Bauteile für einfachere Wartung, Reparatur und Montage.",
  },
  {
    title: "Händlergeeignet",
    text: "Kleinserien, Sets und Produktpakete sind möglich.",
  },
  {
    title: "PETG-HF",
    text: "Zähes Material für funktionale, belastbare Bauteile.",
  },
];

const kits = [
  {
    title: "Basic Kit",
    image: "/images/basic-kit-v4.jpg",
    items: [
      "Winglets mit Adapter",
      "Canopy Pins",
      "Canopysicherung vorne und hinten",
    ],
  },
  {
    title: "Performance Kit",
    image: "/images/performance-kit-v2.jpg",
    items: ["Winglet System", "Haubensicherung hinten", "Canopy Pins"],
    recommended: true,
  },
  {
    title: "Full Kit",
    image: "/images/full-kit-v2.jpg",
    items: ["Alle Komponenten kombiniert", "Maximale Verbesserung"],
  },
];

export const metadata = {
  title: "G-Works RC | ASW 28 V2 Upgrade Parts",
  description:
    "G-Works RC entwickelt 3D-gedruckte Upgrade Parts, Kits und Sonderlösungen für die Volantex ASW 28 V2.",
};

export default function ASW28Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-white">
      {/* Aufbau Hinweis */}
      <div className="bg-orange-500 px-4 py-3 text-center text-xs font-black leading-5 text-black sm:text-sm">
        Diese Seite befindet sich aktuell im Aufbau – Inhalte, Produktbilder und
        Sets werden laufend erweitert.
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0b]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-black">
              G
            </span>
            <span className="truncate text-lg font-black tracking-tight md:text-xl">
              G-Works <span className="text-orange-500">RC</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
            <a href="/" className="transition hover:text-orange-400">
              G-Works
            </a>
            <a href="#produkte" className="transition hover:text-orange-400">
              Produkte
            </a>
            <a href="#kits" className="transition hover:text-orange-400">
              Kits
            </a>
            <a href="#montage" className="transition hover:text-orange-400">
              Montage
            </a>
            <a href="#kontakt" className="transition hover:text-orange-400">
              Kontakt
            </a>
          </nav>

          <details className="group relative shrink-0 md:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white shadow-sm">
              Menü
            </summary>

            <div className="absolute right-0 mt-3 w-[calc(100vw-2.5rem)] max-w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#151515] shadow-2xl shadow-black/40">
              <nav className="flex flex-col p-2 text-sm font-semibold text-white/70">
                <a href="/" className="rounded-xl px-4 py-3 hover:bg-white/5">
                  G-Works
                </a>
                <a
                  href="#produkte"
                  className="rounded-xl px-4 py-3 hover:bg-white/5"
                >
                  Produkte
                </a>
                <a
                  href="#kits"
                  className="rounded-xl px-4 py-3 hover:bg-white/5"
                >
                  Kits
                </a>
                <a
                  href="#montage"
                  className="rounded-xl px-4 py-3 hover:bg-white/5"
                >
                  Montage
                </a>
                <a
                  href="#kontakt"
                  className="rounded-xl px-4 py-3 hover:bg-white/5"
                >
                  Kontakt
                </a>
              </nav>
            </div>
          </details>
        </div>
      </header>

      {/* Hero Bild */}
      <section className="px-5 py-8 md:px-6 md:py-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-orange-500/20 bg-[#111] shadow-2xl shadow-black/40 md:rounded-[2rem]">
          <div className="relative min-h-[360px] md:min-h-[520px]">
            <img
              src="/images/modell-asw-28-v2-volantex-v5.jpg"
              alt="Volantex ASW 28 V2"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.28em] text-orange-400 md:text-sm">
                G-Works RC
              </p>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight md:text-7xl">
                Upgrade Parts für die{" "}
                <span className="text-orange-500">ASW 28 V2.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
                Praxiserprobte 3D-gedruckte Zubehörteile für bessere
                Haltbarkeit, einfachere Wartung und mehr Sicherheit.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#produkte"
                  className="w-full rounded-full bg-orange-500 px-7 py-4 text-center font-bold text-black transition hover:bg-orange-400 sm:w-auto"
                >
                  Produkte ansehen
                </a>

                <a
                  href="#kontakt"
                  className="w-full rounded-full border border-white/20 px-7 py-4 text-center font-bold text-white transition hover:border-orange-400 hover:text-orange-400 sm:w-auto"
                >
                  Anfrage starten
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="border-y border-white/10 bg-[#111] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-orange-400">
              ASW 28 V2
            </p>

            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Speziell entwickelt zur Behebung typischer Schwachstellen.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg md:leading-8">
              Die G-Works RC Bauteile entstehen aus realen Modellbau-Problemen:
              Montage, Haltbarkeit, Servicefreundlichkeit, Schutz und bessere
              Integration am Flugmodell.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black p-3">
            <img
              src="/images/modell-asw-28-v2-volantex-v4.jpg"
              alt="Volantex ASW 28 V2 Modell"
              className="h-auto w-full rounded-[1rem] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Vorteile */}
      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Warum G-Works RC?
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-[#181818] p-6"
              >
                <div className="mb-6 h-2 w-12 rounded-full bg-orange-500" />
                <h3 className="text-xl font-black text-orange-400">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-white/65">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STL */}
      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-orange-500/30 bg-gradient-to-br from-orange-500/15 to-[#181818] p-6 shadow-2xl shadow-black/30 md:rounded-[2rem] md:p-10">
          <p className="mb-4 inline-flex rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-orange-300">
            Digitale STL-Dateien
          </p>

          <h2 className="text-3xl font-black tracking-tight text-orange-400 md:text-5xl">
            STL-Dateien zum Selbstdruck.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
            Viele G-Works Designs sind auch als STL-Dateien erhältlich. Diese
            eignen sich für Kunden, die Teile selbst drucken möchten.
          </p>

          <div className="mt-8 rounded-[1.25rem] border border-orange-500/25 bg-black/35 p-5 md:p-6">
            <h3 className="text-xl font-black text-orange-400">
              Wichtiger Hinweis
            </h3>

            <p className="mt-4 leading-7 text-white/65">
              Die STL-Dateien enthalten keine optimierten Druckprofile,
              Slicer-Einstellungen oder produktionsspezifischen
              Verstärkungs-Setups. Die finale Stabilität hängt von Drucker,
              Material, Druckausrichtung und Slicer-Einstellungen ab.
            </p>
          </div>
        </div>
      </section>

      {/* Produkte */}
      <section id="produkte" className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-orange-400">
                Produkte
              </p>

              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Upgrade Parts für die ASW 28 V2.
              </h2>
            </div>

            <p className="max-w-xl leading-7 text-white/60">
              Einzelteile und Sets für typische Problemstellen am Modell.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <a
                href={product.link}
                key={product.title}
                className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#181818] text-white no-underline transition hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <div className="bg-[#111] p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-64 w-full rounded-[1rem] object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-black">{product.title}</h3>
                  <p className="mt-3 leading-7 text-white/65">
                    {product.text}
                  </p>
                  <p className="mt-5 font-black text-orange-400">
                    Anfrage / Details →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CAD Bild */}
      <section className="border-y border-white/10 bg-[#0b0b0b] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-orange-500/20 shadow-2xl shadow-black/40 md:rounded-[2rem]">
          <img
            src="/images/engineering-cad-hero.jpg"
            alt="G-Works CAD Engineering"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* Kits */}
      <section id="kits" className="bg-[#111] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-orange-400">
            Upgrade Sets
          </p>

          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Abgestimmte Kits für verschiedene Ausbaustufen.
          </h2>

          <p className="mt-6 max-w-3xl leading-7 text-white/65 md:text-lg md:leading-8">
            Die Komponenten können als abgestimmte Upgrade-Kits angeboten
            werden, um typische Schwachstellen gezielt zu verbessern.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {kits.map((kit) => (
              <div
                key={kit.title}
                className={`relative overflow-hidden rounded-[1.5rem] bg-[#181818] ${
                  kit.recommended
                    ? "border-2 border-orange-500 shadow-2xl shadow-orange-500/15"
                    : "border border-white/10"
                }`}
              >
                {kit.recommended && (
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-orange-500 px-4 py-2 text-xs font-black text-black">
                    Empfohlen
                  </div>
                )}

                <div className="bg-[#111] p-3">
                  <img
                    src={kit.image}
                    alt={kit.title}
                    className="h-64 w-full rounded-[1rem] object-contain lg:object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black">{kit.title}</h3>

                  <ul className="mt-6 space-y-3 text-white/65">
                    {kit.items.map((item) => (
                      <li key={item} className="border-b border-white/10 pb-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-black text-orange-400">
              Jetzt Händler werden oder direkt anfragen
            </p>

            <a
              href="#kontakt"
              className="mt-6 inline-flex w-full justify-center rounded-full bg-orange-500 px-7 py-4 font-black text-black no-underline transition hover:bg-orange-400 sm:w-auto"
            >
              Händleranfrage starten
            </a>
          </div>
        </div>
      </section>

      {/* Montage */}
      <section id="montage" className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-orange-400">
            Montage
          </p>

          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Montage & Bauanleitung.
          </h2>

          <p className="mt-6 max-w-3xl leading-7 text-white/65 md:text-lg md:leading-8">
            Für alle G-Works Upgrade-Teile werden aktuell bebilderte
            Montageanleitungen erstellt. Ziel ist eine einfache, sichere und
            reproduzierbare Installation direkt am Modell.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <GuideCard
              title="Vorbereitung"
              items={[
                "Bauteile auf Beschädigungen prüfen",
                "Kontaktflächen reinigen",
                "Passung vor Montage trocken testen",
              ]}
            />

            <GuideCard
              title="Montage"
              items={[
                "Bauteile spannungsfrei einsetzen",
                "Keine Gewalt anwenden",
                "Kleber oder Schrauben nach Anleitung verwenden",
              ]}
            />

            <GuideCard
              title="Kontrolle"
              items={[
                "Sitz und Funktion prüfen",
                "Bewegliche Teile testen",
                "Vor jedem Flug Sichtkontrolle durchführen",
              ]}
            />
          </div>

          <p className="mt-10 text-center font-black leading-7 text-orange-400">
            Detaillierte Einbauanleitungen und Beispielbilder werden aktuell
            erstellt.
          </p>
        </div>
      </section>

      {/* Sonderlösungen */}
      <section className="border-t border-white/10 bg-[#0f0f0f] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-orange-400">
            Engineering
          </p>

          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            CAD Design & Sonderlösungen.
          </h2>

          <p className="mt-6 max-w-3xl leading-7 text-white/65 md:text-lg md:leading-8">
            Neben eigenen Upgrade-Teilen entwickeln wir auch individuelle
            CAD-Lösungen für andere RC-Modelle und spezielle Anwendungen.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Nicht mehr lieferbare Ersatzteile",
              "Mechaniken & Sonderteile",
              "Modellspezifische Anpassungen",
              "Kleinserien & Sonderanfertigungen",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-[#181818] p-6"
              >
                <h3 className="text-xl font-black text-orange-400">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Bild */}
      <section className="border-y border-white/10 bg-[#0b0b0b] px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] border border-orange-500/20 shadow-2xl shadow-black/40 md:rounded-[2rem]">
          <img
            src="/images/windrad-engineering-v2.jpg"
            alt="G-Works Engineering Projekte"
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-[#111] px-5 py-16 text-center md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-orange-400">
            Kontakt
          </p>

          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Händleranfrage oder Direktanfrage.
          </h2>

          <p className="mt-6 leading-7 text-white/65 md:text-lg md:leading-8">
            Interesse an einer Zusammenarbeit, einem Upgrade-Kit oder einer
            Sonderlösung für dein Modell? Kontaktiere G-Works direkt.
          </p>

          <a
            href="mailto:fabian.graf@live.de"
            className="mt-8 inline-flex w-full justify-center rounded-full bg-orange-500 px-7 py-4 font-black text-black no-underline transition hover:bg-orange-400 sm:w-auto"
          >
            E-Mail senden
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
          <span>© G-Works RC · ASW 28 V2 Upgrade Parts · Liechtenstein</span>

          <div className="flex gap-4">
            <a href="/impressum" className="transition hover:text-white">
              Impressum
            </a>
            <a href="/datenschutz" className="transition hover:text-white">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function GuideCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-[#181818] p-6">
      <h3 className="text-xl font-black text-orange-400">{title}</h3>

      <ul className="mt-5 space-y-3 text-white/65">
        {items.map((item) => (
          <li key={item} className="border-b border-white/10 pb-3 last:border-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}