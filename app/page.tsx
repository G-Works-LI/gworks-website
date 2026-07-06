const rcLink = "https://www.gworks.ch";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#151515]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f3ee]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#151515] text-sm font-black text-white">
              G
            </span>
            <span className="text-xl font-black tracking-tight">G-Works</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-black/55 md:flex">
            <a href="#leistungen" className="transition hover:text-black">
              Leistungen
            </a>
            <a href="#anwendungen" className="transition hover:text-black">
              Anwendungen
            </a>
            <a href="#ablauf" className="transition hover:text-black">
              Ablauf
            </a>
            <a href={rcLink} className="transition hover:text-black">
              G-Works RC
            </a>
            <a href="#kontakt" className="transition hover:text-black">
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        {/* Feines technisches Raster */}
        <div className="absolute inset-0 opacity-[0.28]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.055)_1px,transparent_1px)] bg-[size:28px_28px]" />
        </div>

        {/* Dezente technische Markierungen */}
        <div className="absolute right-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full border border-orange-500/25" />
        <div className="absolute right-[90px] top-[120px] h-[120px] w-[120px] rounded-full border border-black/10" />
        <div className="absolute bottom-[90px] left-[-110px] h-[260px] w-[260px] rounded-full border border-black/10" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium text-black/60 shadow-sm backdrop-blur">
              CAD-Design · 3D-Druck · Prototypen · Ersatzteile
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
              Technische Bauteile
              <br />
              <span className="text-orange-600">für echte Probleme.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/65">
              G-Works entwickelt individuelle CAD-Bauteile, 3D-gedruckte
              Prototypen, Ersatzteile und funktionale Speziallösungen —
              konstruiert und 3D-gedruckt in Liechtenstein.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="rounded-full bg-[#151515] px-7 py-4 text-center font-semibold text-white transition hover:bg-black"
              >
                Projekt anfragen
              </a>

              <a
                href="#leistungen"
                className="rounded-full border border-black/15 bg-white/80 px-7 py-4 text-center font-semibold text-black transition hover:border-black/30"
              >
                Leistungen ansehen
              </a>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4">
              <MiniStat number="CAD" label="Konstruktion" />
              <MiniStat number="FDM" label="3D-Druck" />
              <MiniStat number="LI" label="Liechtenstein" />
            </div>
          </div>

          {/* Technische Prozesskarte */}
          <div className="rounded-[2rem] border border-black/10 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-black/10 bg-[#fbfaf7] p-8">
              <div className="absolute inset-0 opacity-[0.35]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
              </div>

              <div className="relative">
                <div className="mb-10 flex items-center justify-between gap-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange-600">
                      Arbeitsweise
                    </p>

                    <h2 className="mt-3 text-3xl font-black leading-tight">
                      Von der Idee
                      <br />
                      zum fertigen Bauteil.
                    </h2>
                  </div>

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10 text-xl font-black text-orange-600">
                    3D
                  </div>
                </div>

                <div className="space-y-4">
                  <ProcessLine
                    number="01"
                    title="Problem verstehen"
                    text="Foto, Skizze, Masse oder Beschreibung."
                  />

                  <ProcessLine
                    number="02"
                    title="CAD-Konstruktion"
                    text="Bauteil digital entwickeln und prüfen."
                  />

                  <ProcessLine
                    number="03"
                    title="Material und Druck"
                    text="Sinnvolle Materialwahl und FDM-Produktion."
                  />

                  <ProcessLine
                    number="04"
                    title="Fertiges Bauteil"
                    text="Einzelteil, Prototyp oder Kleinserie."
                  />
                </div>

                <div className="mt-8 rounded-2xl border border-black/10 bg-[#151515] p-5 text-white">
                  <p className="text-sm text-white/55">
                    Konstruiert und gedruckt
                  </p>
                  <p className="mt-1 text-2xl font-black">in Liechtenstein.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section
        id="leistungen"
        className="border-y border-black/10 bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Leistungen
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Konstruktion, Druck und funktionale Umsetzung.
              </h2>

              <p className="mt-6 text-lg leading-8 text-black/60">
                Für Teile, die es nicht von der Stange gibt — oder die besser
                passen müssen als ein Standardprodukt.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <ServiceCard
                title="CAD-Design"
                text="Funktionale Konstruktion von Ersatzteilen, Haltern, Adaptern, Abdeckungen und technischen Sonderlösungen."
              />

              <ServiceCard
                title="3D-Druck"
                text="FDM-Druck mit geeigneten Materialien für stabile, brauchbare Bauteile und Prototypen."
              />

              <ServiceCard
                title="Prototypen"
                text="Vom ersten Entwurf bis zum getesteten Teil — ideal für Einzelstücke, Speziallösungen und kleine Serien."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Anwendungen */}
      <section id="anwendungen" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Anwendungen
              </p>

              <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
                Kleine Teile. Große Wirkung.
              </h2>
            </div>

            <p className="max-w-xl text-lg leading-8 text-black/60">
              Oft löst ein präzise konstruiertes Einzelteil ein Problem, für das
              es kein fertiges Produkt gibt.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Ersatzteile",
              "Halterungen",
              "Adapter",
              "Abdeckungen",
              "Vorrichtungen",
              "Gehäuse",
              "Prototypen",
              "RC-Spezialteile",
            ].map((item) => (
              <div
                key={item}
                className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="mb-8 h-2 w-10 rounded-full bg-orange-500 transition group-hover:w-16" />
                <h3 className="text-xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G-Works RC */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#111111] text-white shadow-2xl shadow-black/20">
          <div className="relative grid gap-12 p-8 md:p-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="absolute inset-0 opacity-[0.22]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.13)_1px,transparent_1px)] bg-[size:26px_26px]" />
            </div>

            <div className="relative">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                Spezialbereich
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                G-Works RC.
                <br />
                Modellbau-Teile mit Praxistest.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                RC-Modellbau bleibt ein Spezialgebiet von G-Works. Die ASW 28 V2
                Upgrade-Parts sind aktuell provisorisch über die bestehende
                G-Works RC Seite erreichbar.
              </p>

              <a
                href={rcLink}
                className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-4 font-semibold text-black transition hover:bg-orange-400"
              >
                G-Works RC öffnen
              </a>
            </div>

            <div className="relative rounded-[1.5rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black">ASW 28 V2</h3>

                <span className="rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-300">
                  RC-Teile
                </span>
              </div>

              <ul className="space-y-4 text-white/65">
                <li>Winglet Schnellwechsel-System</li>
                <li>Servo-Cover Aero</li>
                <li>Canopy Pins mit Sollbruchstelle</li>
                <li>Haubensicherung vorne und hinten</li>
                <li>Upgrade-Kits</li>
              </ul>

              <a
                href={rcLink}
                className="mt-8 inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-400"
              >
                ASW 28 V2 Produkte ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section
        id="ablauf"
        className="border-y border-black/10 bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Ablauf
          </p>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Vom Problem zum passenden Bauteil.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <Step
              number="01"
              title="Anfrage"
              text="Foto, Skizze, Massangaben oder Beschreibung senden."
            />

            <Step
              number="02"
              title="Konstruktion"
              text="Das Bauteil wird im CAD entwickelt und auf Funktion geprüft."
            />

            <Step
              number="03"
              title="Druck"
              text="Der Prototyp wird 3D-gedruckt und bei Bedarf angepasst."
            />

            <Step
              number="04"
              title="Bauteil"
              text="Du erhältst ein Einzelteil, Ersatzteil oder eine Kleinserie."
            />
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Kontakt
              </p>

              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Du brauchst ein individuelles Bauteil?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/60">
                Sende eine Anfrage mit Foto, Skizze, Massangaben oder
                Beschreibung. Ich prüfe, ob sich dein Teil sinnvoll konstruieren
                und 3D-drucken lässt.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@gworks.li"
                className="rounded-full bg-[#151515] px-7 py-4 text-center font-semibold text-white transition hover:bg-black"
              >
                Anfrage per E-Mail starten
              </a>

              <a
                href={rcLink}
                className="rounded-full border border-black/15 bg-white px-7 py-4 text-center font-semibold text-black transition hover:border-black/30"
              >
                G-Works RC ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-black/40">
  <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
    <span>© G-Works · CAD-Design & 3D-Druck · Liechtenstein</span>

    <div className="flex gap-4">
      <a href="/impressum" className="transition hover:text-black">
        Impressum
      </a>
      <a href="/datenschutz" className="transition hover:text-black">
        Datenschutz
      </a>
    </div>
  </div>
</footer>
    </main>
  );
}

function MiniStat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur">
      <div className="text-lg font-black">{number}</div>
      <div className="mt-1 text-xs font-medium text-black/50">{label}</div>
    </div>
  );
}

function ProcessLine({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-4 rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white">
        {number}
      </div>

      <div>
        <h3 className="font-black">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-black/55">{text}</p>
      </div>
    </div>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.5rem] border border-black/10 bg-[#f8f7f3] p-7 transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-black/5">
      <div className="mb-8 h-2 w-12 rounded-full bg-orange-500" />
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-black/60">{text}</p>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-black/10 bg-[#f8f7f3] p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
      <div className="mb-6 text-sm font-black text-orange-600">{number}</div>
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-black/60">{text}</p>
    </div>
  );
}