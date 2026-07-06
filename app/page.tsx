const rcLink = "/asw28";
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f3ee] text-[#151515]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f3ee]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
          <a href="#" className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#151515] text-sm font-black text-white">
              G
            </span>
            <span className="truncate text-lg font-black tracking-tight md:text-xl">
              G-Works
            </span>
          </a>

          {/* Desktop Navigation */}
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

          {/* Mobile Navigation */}
          <details className="group relative shrink-0 md:hidden">
            <summary className="flex cursor-pointer list-none items-center rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-bold shadow-sm">
              Menü
            </summary>

            <div className="absolute right-0 mt-3 w-[calc(100vw-2.5rem)] max-w-72 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl shadow-black/15">
              <nav className="flex flex-col p-2 text-sm font-semibold text-black/70">
                <a
                  href="#leistungen"
                  className="rounded-xl px-4 py-3 transition hover:bg-black/5 hover:text-black"
                >
                  Leistungen
                </a>
                <a
                  href="#anwendungen"
                  className="rounded-xl px-4 py-3 transition hover:bg-black/5 hover:text-black"
                >
                  Anwendungen
                </a>
                <a
                  href="#ablauf"
                  className="rounded-xl px-4 py-3 transition hover:bg-black/5 hover:text-black"
                >
                  Ablauf
                </a>
                <a
                  href={rcLink}
                  className="rounded-xl px-4 py-3 transition hover:bg-black/5 hover:text-black"
                >
                  G-Works RC
                </a>
                <a
                  href="#kontakt"
                  className="rounded-xl px-4 py-3 transition hover:bg-black/5 hover:text-black"
                >
                  Kontakt
                </a>
              </nav>
            </div>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 py-16 md:px-6 md:py-28 lg:py-32">
        {/* Feines technisches Raster */}
        <div className="absolute inset-0 opacity-[0.22] md:opacity-[0.28]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.055)_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:28px_28px]" />
        </div>

        {/* Dezente technische Markierungen */}
        <div className="absolute right-[-220px] top-[-210px] h-[360px] w-[360px] rounded-full border border-orange-500/20 md:right-[-180px] md:top-[-180px] md:h-[420px] md:w-[420px]" />
        <div className="absolute right-[20px] top-[110px] h-[90px] w-[90px] rounded-full border border-black/10 md:right-[90px] md:top-[120px] md:h-[120px] md:w-[120px]" />
        <div className="absolute bottom-[60px] left-[-130px] h-[220px] w-[220px] rounded-full border border-black/10 md:bottom-[90px] md:left-[-110px] md:h-[260px] md:w-[260px]" />

        <div className="relative mx-auto grid max-w-7xl min-w-0 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="min-w-0">
            <p className="mb-5 inline-flex max-w-full flex-wrap gap-x-2 gap-y-1 rounded-2xl border border-black/10 bg-white/80 px-4 py-2 text-xs font-medium leading-5 text-black/60 shadow-sm backdrop-blur sm:rounded-full sm:text-sm">
              <span>CAD-Design</span>
              <span>·</span>
              <span>3D-Druck</span>
              <span>·</span>
              <span>Prototypen</span>
              <span>·</span>
              <span>Ersatzteile</span>
            </p>

            <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">
              Technische Bauteile
              <br />
              <span className="text-orange-600">für echte Probleme.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 md:mt-8 md:text-lg md:leading-8">
              G-Works entwickelt individuelle CAD-Bauteile, 3D-gedruckte
              Prototypen, Ersatzteile und funktionale Speziallösungen —
              konstruiert und 3D-gedruckt in Liechtenstein.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
              <a
                href="#kontakt"
                className="w-full rounded-full bg-[#151515] px-7 py-4 text-center font-semibold text-white transition hover:bg-black sm:w-auto"
              >
                Projekt anfragen
              </a>

              <a
                href="#leistungen"
                className="w-full rounded-full border border-black/15 bg-white/80 px-7 py-4 text-center font-semibold text-black transition hover:border-black/30 sm:w-auto"
              >
                Leistungen ansehen
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 md:mt-12">
              <MiniStat number="CAD" label="Konstruktion" />
              <MiniStat number="FDM" label="3D-Druck" />
              <MiniStat number="LI" label="Liechtenstein" />
            </div>
          </div>

          {/* Technische Prozesskarte */}
          <div className="min-w-0 rounded-[1.5rem] border border-black/10 bg-white/80 p-4 shadow-xl shadow-black/5 backdrop-blur md:rounded-[2rem] md:p-5">
            <div className="relative overflow-hidden rounded-[1.25rem] border border-black/10 bg-[#fbfaf7] p-5 md:rounded-[1.5rem] md:p-8">
              <div className="absolute inset-0 opacity-[0.3] md:opacity-[0.35]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:22px_22px] md:bg-[size:24px_24px]" />
              </div>

              <div className="relative">
                <div className="mb-8 flex items-start justify-between gap-4 md:mb-10 md:gap-6">
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-600 md:tracking-[0.3em]">
                      Arbeitsweise
                    </p>

                    <h2 className="mt-3 max-w-[15rem] text-2xl font-black leading-[1.08] sm:max-w-none md:text-3xl">
                      Von der Idee zum fertigen Bauteil.
                    </h2>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-orange-500/40 bg-orange-500/10 text-lg font-black text-orange-600 md:h-16 md:w-16 md:text-xl">
                    3D
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
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

                <div className="mt-6 rounded-2xl border border-black/10 bg-[#151515] p-5 text-white md:mt-8">
                  <p className="text-sm text-white/55">
                    Konstruiert und gedruckt
                  </p>
                  <p className="mt-1 text-xl font-black md:text-2xl">
                    in Liechtenstein.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section
        id="leistungen"
        className="border-y border-black/10 bg-white px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-12">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Leistungen
              </p>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Konstruktion, Druck und funktionale Umsetzung.
              </h2>

              <p className="mt-5 text-base leading-7 text-black/60 md:mt-6 md:text-lg md:leading-8">
                Für Teile, die es nicht von der Stange gibt — oder die besser
                passen müssen als ein Standardprodukt.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 md:gap-6">
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
      <section id="anwendungen" className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end md:gap-6">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Anwendungen
              </p>

              <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Kleine Teile. Große Wirkung.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-black/60 md:text-lg md:leading-8">
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
                className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-black/5 md:p-6"
              >
                <div className="mb-6 h-2 w-10 rounded-full bg-orange-500 transition group-hover:w-16 md:mb-8" />
                <h3 className="text-lg font-black md:text-xl">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G-Works RC */}
      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-[#111111] text-white shadow-2xl shadow-black/20 md:rounded-[2rem]">
          <div className="relative grid gap-10 p-6 md:p-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="absolute inset-0 opacity-[0.18] md:opacity-[0.22]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.13)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.13)_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:26px_26px]" />
            </div>

            <div className="relative min-w-0">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                Spezialbereich
              </p>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                G-Works RC.
                <br />
                Modellbau-Teile mit Praxistest.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 md:mt-6 md:text-lg md:leading-8">
                RC-Modellbau bleibt ein Spezialgebiet von G-Works. Die ASW 28 V2
                Upgrade-Parts sind aktuell provisorisch über die bestehende
                G-Works RC Seite erreichbar.
              </p>

              <a
                href={rcLink}
                className="mt-7 inline-flex w-full justify-center rounded-full bg-orange-500 px-7 py-4 font-semibold text-black transition hover:bg-orange-400 sm:w-auto md:mt-8"
              >
                G-Works RC öffnen
              </a>
            </div>

            <div className="relative min-w-0 rounded-[1.25rem] border border-white/10 bg-white/5 p-5 backdrop-blur md:rounded-[1.5rem] md:p-7">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-2xl font-black">ASW 28 V2</h3>

                <span className="w-fit rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-300">
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
                className="mt-8 inline-flex w-full justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:text-orange-400 sm:w-auto"
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
        className="border-y border-black/10 bg-white px-5 py-16 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Ablauf
          </p>

          <h2 className="max-w-3xl text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Vom Problem zum passenden Bauteil.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-12 md:gap-6">
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
      <section id="kontakt" className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-xl shadow-black/5 md:rounded-[2rem] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-10">
            <div className="min-w-0">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
                Kontakt
              </p>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Du brauchst ein individuelles Bauteil?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-black/60 md:mt-6 md:text-lg md:leading-8">
                Sende eine Anfrage mit Foto, Skizze, Massangaben oder
                Beschreibung. Ich prüfe, ob sich dein Teil sinnvoll konstruieren
                und 3D-drucken lässt.
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-3 md:gap-4">
              <a
                href="mailto:info@gworks.li"
                className="w-full rounded-full bg-[#151515] px-7 py-4 text-center font-semibold text-white transition hover:bg-black"
              >
                Anfrage per E-Mail starten
              </a>

              <a
                href={rcLink}
                className="w-full rounded-full border border-black/15 bg-white px-7 py-4 text-center font-semibold text-black transition hover:border-black/30"
              >
                G-Works RC ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-5 py-8 text-center text-sm text-black/40 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
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
    <div className="min-w-0 rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur">
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
    <div className="flex min-w-0 flex-col gap-4 rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm sm:flex-row sm:items-start">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white sm:h-10 sm:w-10">
        {number}
      </div>

      <div className="min-w-0">
        <h3 className="break-words text-lg font-black leading-tight sm:text-base">
          {title}
        </h3>

        <p className="mt-2 break-words text-sm leading-6 text-black/55">
          {text}
        </p>
      </div>
    </div>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="min-w-0 rounded-[1.5rem] border border-black/10 bg-[#f8f7f3] p-6 transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-xl hover:shadow-black/5 md:p-7">
      <div className="mb-6 h-2 w-12 rounded-full bg-orange-500 md:mb-8" />
      <h3 className="text-xl font-black md:text-2xl">{title}</h3>
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
    <div className="min-w-0 rounded-[1.5rem] border border-black/10 bg-[#f8f7f3] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 md:p-7">
      <div className="mb-5 text-sm font-black text-orange-600 md:mb-6">
        {number}
      </div>
      <h3 className="text-xl font-black md:text-2xl">{title}</h3>
      <p className="mt-4 leading-7 text-black/60">{text}</p>
    </div>
  );
}