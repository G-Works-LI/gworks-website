const rcLink = "/asw28";

const targetGroups = [
  "Modellbauer",
  "Handwerker",
  "Velowerkstätten",
  "Garagen",
  "Landwirte",
  "Haustechnik-Betriebe",
  "Kleine Maschinenbetriebe",
  "Hobbyisten",
];

const problemCases = [
  "Teil gebrochen",
  "Ersatzteil nicht mehr lieferbar",
  "Halter passt nicht",
  "Adapter fehlt",
  "Abdeckung beschädigt",
  "Sonderteil wird benötigt",
  "Idee soll als Prototyp getestet werden",
  "Bauteil muss verbessert werden",
];

const manufacturingWays = [
  {
    title: "3D-Druck",
    text: "Für Prototypen, Ersatzteile, Halterungen, Abdeckungen, Adapter und Kleinserien. Schnell, flexibel und ideal für funktionale Kunststoffteile.",
  },
  {
    title: "CNC-fähige CAD-Daten",
    text: "G-Works erstellt saubere CAD- und STEP-Daten für Bauteile, die bei Bedarf durch spezialisierte Partner CNC-gefertigt werden können.",
  },
  {
    title: "Technische Umsetzung",
    text: "Von der Idee über die Konstruktion bis zum brauchbaren Bauteil. Ziel ist nicht nur ein schönes Modell, sondern eine praktische Lösung.",
  },
];

const aboutPoints = [
  {
    title: "Praktisch gedacht",
    text: "Bauteile werden nicht nur gezeichnet, sondern für echte Anwendung entwickelt.",
  },
  {
    title: "Sauber konstruiert",
    text: "CAD-Modelle und STEP-Daten bilden die Grundlage für 3D-Druck oder weitere Fertigungswege.",
  },
  {
    title: "Lokal aufgebaut",
    text: "G-Works entsteht in Liechtenstein — klein, direkt und lösungsorientiert.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f6f3ee] text-[#171717]">
<header className="sticky top-0 z-50 w-full overflow-x-hidden border-b border-black/10 bg-[#f6f3ee]/90 backdrop-blur">
  <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
    <a href="#" className="group flex min-w-0 items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#171717] text-sm font-bold text-white shadow-sm">
        GW
      </div>
      <div className="min-w-0">
        <div className="truncate text-lg font-bold tracking-tight">
          G-Works
        </div>
        <div className="max-w-[220px] text-xs uppercase tracking-[0.18em] text-black/50 sm:max-w-none sm:tracking-[0.22em]">
          CAD · 3D-Druck · Technik
        </div>
      </div>
    </a>

    <a
      className="hidden rounded-full bg-[#171717] px-4 py-2 text-sm font-medium text-white transition hover:bg-black sm:inline-flex"
      href="#kontakt"
    >
      Kontakt
    </a>
  </div>

  <nav className="w-full overflow-x-auto border-t border-black/5 px-4 pb-3 sm:px-6">
    <div className="mx-auto flex w-max max-w-7xl items-center gap-5 whitespace-nowrap text-sm font-medium text-black/65 sm:gap-7">
      <a className="transition hover:text-black" href="#leistungen">
        Leistungen
      </a>
      <a className="transition hover:text-black" href="#ueber">
        Über G-Works
      </a>
      <a className="transition hover:text-black" href="#fertigungswege">
        Fertigungswege
      </a>
      <a className="transition hover:text-black" href="#anwendungen">
        Anwendungen
      </a>
      <a className="transition hover:text-black" href="#fuer-wen">
        Für wen?
      </a>
      <a className="transition hover:text-black" href="#ablauf">
        Ablauf
      </a>
      <a className="transition hover:text-black" href={rcLink}>
        G-Works RC
      </a>
      <a
        className="rounded-full bg-[#171717] px-4 py-2 text-white transition hover:bg-black sm:hidden"
        href="#kontakt"
      >
        Kontakt
      </a>
    </div>
  </nav>
</header>

      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,0,0.18),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.10),transparent_32%)]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-center md:gap-12 md:py-28">
          <div className="min-w-0">
            <p className="mb-5 inline-flex max-w-full rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm font-medium text-black/65 shadow-sm">
              Entwickelt in Liechtenstein
            </p>

            <h1 className="max-w-4xl text-[2.55rem] font-black leading-[0.98] tracking-tight text-[#171717] sm:text-5xl md:text-7xl">
              CAD Design &<br />
              3D-Druck für
              <span className="block text-[#ff7a00]">
                funktionale Bauteile.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/70 sm:text-lg md:text-xl">
              G-Works konstruiert und fertigt individuelle Bauteile,
              Prototypen, Ersatzteile und Kleinserien. Von der ersten Idee bis
              zum brauchbaren 3D-gedruckten Teil — entwickelt in Liechtenstein.
            </p>

            <div className="mt-9 flex w-full flex-col gap-4 sm:flex-row">
              <a
                href="#kontakt"
                className="w-full rounded-full bg-[#171717] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.16em]"
              >
                Anfrage starten
              </a>
              <a
                href="#leistungen"
                className="w-full rounded-full border border-black/15 bg-white/60 px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-black shadow-sm transition hover:-translate-y-0.5 hover:bg-white sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.16em]"
              >
                Leistungen ansehen
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <MiniStat value="CAD" label="Design" />
              <MiniStat value="3D" label="Druck" />
              <MiniStat value="STEP" label="Daten" />
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#ff7a00]/25 via-white/40 to-black/10 blur-2xl sm:-inset-6" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/55 p-4 shadow-2xl backdrop-blur sm:p-6">
              <img
                src="/images/windrad-cad-transparent.png"
                alt="G-Works CAD Windrad Konstruktion"
                className="h-auto w-full object-contain"
              />
              <div className="mt-5 rounded-2xl border border-black/10 bg-[#171717] p-5 text-white">
                <div className="text-xs uppercase tracking-[0.18em] text-white/50 sm:text-sm sm:tracking-[0.22em]">
                  Beispiel
                </div>
                <div className="mt-2 text-xl font-bold">
                  CAD-Konstruktion für funktionale Teile
                </div>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Aus einer Idee entsteht ein digitales Modell — und daraus ein
                  real nutzbares Bauteil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff7a00]">
            Leistungen
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Technische Lösungen für Teile, die fehlen, brechen oder nicht
            passen.
          </h2>
          <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
            G-Works verbindet CAD-Konstruktion, praktisches Denken und moderne
            Fertigung. Ziel ist ein Bauteil, das nicht nur gut aussieht, sondern
            im Alltag funktioniert.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="CAD Design"
            text="Konstruktion individueller Bauteile nach Idee, Skizze, Musterteil oder technischem Problem."
          />
          <ServiceCard
            title="3D-Druck"
            text="Fertigung von Prototypen, Ersatzteilen, Halterungen, Abdeckungen und Kleinserien."
          />
          <ServiceCard
            title="Ersatzteile & Verbesserungen"
            text="Nachbau, Anpassung oder Verbesserung von Teilen, die nicht mehr erhältlich sind oder besser funktionieren sollen."
          />
        </div>
      </section>

      <section id="ueber" className="w-full overflow-hidden bg-white/55 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-start">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff7a00]">
                Über G-Works
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Technische Lösungen, CAD-Konstruktion und praktische Fertigung
                aus Liechtenstein.
              </h2>
            </div>

            <div className="min-w-0">
              <div className="rounded-[2rem] border border-black/10 bg-[#f6f3ee] p-5 shadow-sm sm:p-7">
                <p className="text-base leading-8 text-black/70 sm:text-lg">
                  G-Works ist ein kleines technisches Projekt aus Liechtenstein
                  mit Fokus auf CAD Design, 3D-Druck, Prototypen, Ersatzteile
                  und funktionale Bauteile.
                </p>

                <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">
                  Im Mittelpunkt steht nicht die Massenproduktion, sondern die
                  praktische Lösung: ein Teil, das fehlt, nicht passt, gebrochen
                  ist oder verbessert werden soll.
                </p>

                <p className="mt-5 text-base leading-8 text-black/70 sm:text-lg">
                  Von der ersten Idee über die Konstruktion bis zum brauchbaren
                  Bauteil verbindet G-Works digitales Design mit handwerklichem
                  Verständnis und realer Anwendung.
                </p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {aboutPoints.map((item) => (
                  <div
                    key={item.title}
                    className="min-w-0 rounded-2xl border border-black/10 bg-white/70 p-5 shadow-sm"
                  >
                    <h3 className="font-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-black/60">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="fertigungswege"
        className="w-full overflow-hidden border-y border-black/10 bg-[#171717] px-4 py-16 text-white sm:px-6 sm:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:items-start">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff7a00]">
                Fertigungswege
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Nicht jedes Teil braucht denselben Weg.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">
                Manche Teile entstehen sinnvoll im 3D-Druck. Andere benötigen
                höhere Festigkeit, bessere Oberflächen oder engere Toleranzen.
                Dann können saubere CAD- und STEP-Daten die Grundlage für eine
                externe CNC-Fertigung sein.
              </p>
            </div>

            <div className="grid min-w-0 gap-5">
              {manufacturingWays.map((item) => (
                <div
                  key={item.title}
                  className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-lg sm:p-6"
                >
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/65">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-[#ff7a00]/30 bg-[#ff7a00]/10 p-6">
            <p className="text-lg font-bold text-white">
              Der Fertigungsweg richtet sich nach dem Bauteil.
            </p>
          </div>
        </div>
      </section>

      <section id="anwendungen" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-start">
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff7a00]">
              Anwendungen
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Wenn ein Teil fehlt, nicht passt oder nicht mehr lieferbar ist.
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              Ein einzelnes funktionales Bauteil kann oft mehr lösen als ein
              kompletter Neukauf. Genau dort setzt G-Works an.
            </p>
          </div>

          <div className="grid min-w-0 gap-3 sm:grid-cols-2">
            {problemCases.map((item) => (
              <div
                key={item}
                className="min-w-0 rounded-2xl border border-black/10 bg-white/70 px-5 py-4 font-semibold shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fuer-wen" className="w-full overflow-hidden bg-white/55 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff7a00]">
              Für wen ist G-Works?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
              Für Kunden und Betriebe, die praktische Lösungen für individuelle
              Bauteile benötigen.
            </h2>
            <p className="mt-5 text-base leading-8 text-black/65 sm:text-lg">
              G-Works ist interessant für alle, die ein Teil brauchen, das es
              nicht von der Stange gibt — egal ob Ersatzteil, Adapter,
              Halterung, Abdeckung oder Prototyp.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {targetGroups.map((item) => (
              <div
                key={item}
                className="min-w-0 rounded-2xl border border-black/10 bg-[#f6f3ee] px-5 py-4 font-bold shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#171717] text-white shadow-2xl">
          <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
            <div className="min-w-0 p-6 sm:p-8 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff7a00]">
                G-Works RC
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Spezialteile für RC-Segler.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">
                Neben allgemeinen CAD- und 3D-Drucklösungen entwickelt G-Works
                auch eigene RC-Modellbau-Komponenten — unter anderem für die
                Volantex ASW 28 V2.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={rcLink}
                  className="w-full rounded-full bg-[#ff7a00] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#ff8f26] sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.16em]"
                >
                  Zur ASW 28 Seite
                </a>
                <a
                  href="#kontakt"
                  className="w-full rounded-full border border-white/20 px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10 sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.16em]"
                >
                  Händleranfrage
                </a>
              </div>
            </div>

            <div className="min-w-0 border-t border-white/10 bg-white/[0.04] p-6 sm:p-8 md:border-l md:border-t-0 md:p-12">
              <div className="space-y-4">
                <RCItem text="Winglet-Systeme" />
                <RCItem text="Servo-Cover" />
                <RCItem text="Canopy Pins" />
                <RCItem text="Haubensicherung" />
                <RCItem text="Ruderhorn-Befestigungen" />
                <RCItem text="Akkuplatten & Spezialhalter" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ablauf" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff7a00]">
            Ablauf
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Einfacher Ablauf. Saubere Umsetzung.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          <Step
            number="01"
            title="Problem zeigen"
            text="Foto, Skizze, Musterteil oder kurze Beschreibung senden."
          />
          <Step
            number="02"
            title="Lösung planen"
            text="Machbarkeit, Material, Belastung und Fertigungsweg klären."
          />
          <Step
            number="03"
            title="CAD erstellen"
            text="Das Teil wird digital konstruiert und für die Fertigung vorbereitet."
          />
          <Step
            number="04"
            title="Teil fertigen"
            text="Fertigung im 3D-Druck oder Vorbereitung sauberer Daten für weitere Fertigungswege."
          />
        </div>
      </section>

      <section id="kontakt" className="w-full overflow-hidden px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-black/10 bg-white p-6 shadow-xl sm:p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff7a00]">
            Kontakt
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Hast du ein Teil, das fehlt oder besser werden soll?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-black/65 sm:text-lg">
            Sende eine kurze Beschreibung, Fotos oder eine Skizze. G-Works prüft
            dann, ob und wie sich daraus ein funktionales Bauteil entwickeln
            lässt.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:info@gworks.li?subject=Anfrage%20an%20G-Works"
              className="w-full rounded-full bg-[#171717] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.16em]"
            >
              info@gworks.li
            </a>
            <a
              href={rcLink}
              className="w-full rounded-full border border-black/15 bg-[#f6f3ee] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:-translate-y-0.5 hover:bg-white sm:w-auto sm:px-7 sm:text-sm sm:tracking-[0.16em]"
            >
              RC-Produkte ansehen
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full overflow-hidden border-t border-black/10 px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-sm text-black/55 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} G-Works · Entwickelt in Liechtenstein
          </div>
          <div className="flex gap-5">
            <a className="hover:text-black" href="/impressum">
              Impressum
            </a>
            <a className="hover:text-black" href="/datenschutz">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-0 rounded-2xl border border-black/10 bg-white/60 p-3 text-center shadow-sm backdrop-blur sm:p-4">
      <div className="text-lg font-black text-[#171717] sm:text-xl">
        {value}
      </div>
      <div className="mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-black/50 sm:text-xs sm:tracking-[0.18em]">
        {label}
      </div>
    </div>
  );
}

function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="min-w-0 rounded-[1.7rem] border border-black/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:p-7">
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-4 leading-7 text-black/65">{text}</p>
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
    <div className="min-w-0 rounded-[1.7rem] border border-black/10 bg-white/70 p-6 shadow-sm">
      <div className="text-sm font-black uppercase tracking-[0.22em] text-[#ff7a00]">
        {number}
      </div>
      <h3 className="mt-4 text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-black/65">{text}</p>
    </div>
  );
}

function RCItem({ text }: { text: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4">
      <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff7a00]" />
      <span className="min-w-0 font-semibold text-white/85">{text}</span>
    </div>
  );
}