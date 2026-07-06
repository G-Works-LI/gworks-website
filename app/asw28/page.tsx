export default function ASW28Page() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      {/* Header */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="text-xl font-bold tracking-wide">
            G-Works <span className="text-orange-500">RC</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="/" className="transition hover:text-orange-400">
              Startseite
            </a>
            <a href="#parts" className="transition hover:text-orange-400">
              Produkte
            </a>
            <a href="#kits" className="transition hover:text-orange-400">
              Kits
            </a>
            <a href="#contact" className="transition hover:text-orange-400">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.24),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
              ASW 28 V2 · Upgrade Parts · G-Works RC
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Upgrade-Parts für die{" "}
              <span className="text-orange-500">ASW 28 V2.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
              Funktionale 3D-gedruckte Bauteile für die Volantex ASW 28 V2 —
              entwickelt aus einem echten Modellbauprojekt, konstruiert im CAD,
              gedruckt, montiert und praktisch getestet.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#parts"
                className="rounded-full bg-orange-500 px-7 py-4 text-center font-semibold text-black transition hover:bg-orange-400"
              >
                Produkte ansehen
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:border-orange-400 hover:text-orange-400"
              >
                Anfrage starten
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl">
            <div className="aspect-square rounded-[1.5rem] border border-orange-500/20 bg-gradient-to-br from-white/10 to-orange-500/10 p-8">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 h-2 w-24 rounded-full bg-orange-500" />
                  <h2 className="text-3xl font-bold leading-tight">
                    Developed from real flight model experience.
                  </h2>
                  <p className="mt-4 text-white/65">
                    Nicht nur gezeichnet — gebaut, angepasst und getestet.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-white/75">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    Winglets
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    Servo-Cover
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    Canopy Pins
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                    Upgrade Kits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Parts */}
      <section id="parts" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Produkte
          </p>

          <h2 className="max-w-3xl text-4xl font-black md:text-5xl">
            Funktionale Upgrade-Parts für die ASW 28 V2.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
            Die Teile sind für Modellbauer gedacht, die ihre ASW 28 V2 technisch
            verbessern, reparieren oder sauberer ausstatten möchten.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              title="Winglet Schnellwechsel-System"
              text="Adapter- und Winglet-System für saubere Montage, definierte Positionierung und einfachen Austausch."
            />

            <ProductCard
              title="Servo-Cover Aero"
              text="Flache aerodynamische Servoabdeckungen für Querruder und Wölbklappen mit sauberer Optik."
            />

            <ProductCard
              title="Canopy Pins"
              text="Haubenstifte mit definierter Sollbruchstelle als praktische Ersatz- und Sicherungslösung."
            />

            <ProductCard
              title="Haubensicherung vorne"
              text="Aufklebe-Teil zur vorderen Haubenführung und besseren Positionierung der Kabinenhaube."
            />

            <ProductCard
              title="Haubensicherung hinten"
              text="Drehbare Verriegelungslösung mit Federmechanik für sichere, servicefreundliche Haubenbefestigung."
            />

            <ProductCard
              title="Ruderhorn-Verstärkung"
              text="Verstärkte Befestigungslösung für Ruderhörner und belastete Anlenkpunkte."
            />

            <ProductCard
              title="Akkuplatte"
              text="Plattformlösung zur sauberen Akkuaufnahme und besseren Nutzung des vorhandenen Rumpfraums."
            />

            <ProductCard
              title="Spinner Designteil"
              text="Optisches und funktionales Designteil für eine sauberere Frontansicht."
            />

            <ProductCard
              title="STL Files"
              text="Digitale Dateien für ausgewählte Bauteile. Empfohlen für erfahrene Nutzer mit eigenem 3D-Drucker."
            />
          </div>
        </div>
      </section>

      {/* Kits */}
      <section id="kits" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Upgrade Kits
          </p>

          <h2 className="max-w-3xl text-4xl font-black md:text-5xl">
            Sets für verschiedene Ausbaustufen.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <KitCard
              title="Basic Kit"
              items={[
                "Canopy Pins",
                "Ruderhorn-Verstärkung",
                "Haubensicherung vorne",
              ]}
            />

            <KitCard
              title="Performance Kit"
              items={[
                "Winglet Schnellwechsel-System",
                "Haubensicherung hinten",
                "Canopy Pins",
              ]}
            />

            <KitCard
              title="Full Kit"
              items={[
                "Winglet-System",
                "Servo-Cover Aero",
                "Canopy Pins",
                "Haubensicherung vorne & hinten",
                "Ruderhorn-Verstärkung",
                "Akkuplatte",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Development */}
      <section className="border-y border-white/10 px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              Entwicklung
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Aus der Praxis entwickelt.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-white/70">
            <p>
              Die ASW 28 V2 Teile entstanden nicht als reine CAD-Übung, sondern
              aus echten Problemstellen am Modell: Montage, Haltbarkeit,
              Servicefreundlichkeit, Optik und Flugpraxis.
            </p>

            <p>
              Jedes Bauteil wurde mit Blick auf einfache Montage, sinnvollen
              Materialeinsatz und praktische Belastung entwickelt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-orange-500/30 bg-orange-500/10 p-8 md:p-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
            Kontakt
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            Interesse an ASW 28 V2 Teilen?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Sende eine Anfrage für einzelne Bauteile, Upgrade-Kits, STL-Dateien
            oder Händlerkonditionen.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@gworks.li"
              className="rounded-full bg-orange-500 px-7 py-4 text-center font-semibold text-black transition hover:bg-orange-400"
            >
              Anfrage per E-Mail starten
            </a>

            <a
              href="/"
              className="rounded-full border border-white/20 px-7 py-4 text-center font-semibold text-white transition hover:border-orange-400 hover:text-orange-400"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/40">
        © G-Works RC · ASW 28 V2 Upgrade Parts · Liechtenstein
      </footer>
    </main>
  );
}

function ProductCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 transition hover:border-orange-500/50">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-4 leading-7 text-white/65">{text}</p>
    </div>
  );
}

function KitCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[1.5rem] border border-orange-500/20 bg-orange-500/10 p-7">
      <h3 className="text-2xl font-bold">{title}</h3>

      <ul className="mt-6 space-y-4 text-white/70">
        {items.map((item) => (
          <li key={item} className="border-b border-white/10 pb-3 last:border-0">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}