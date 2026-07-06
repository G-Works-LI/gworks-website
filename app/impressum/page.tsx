export const metadata = {
  title: "Impressum | G-Works",
  description: "Impressum von G-Works.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#151515]">
      <header className="border-b border-black/10 bg-[#f5f3ee]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
          <a href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#151515] text-sm font-black text-white">
              G
            </span>
            <span className="text-xl font-black tracking-tight">G-Works</span>
          </a>

          <a
            href="/"
            className="rounded-full border border-black/15 bg-white px-5 py-2 text-sm font-semibold text-black transition hover:border-black/30"
          >
            Zurück zur Startseite
          </a>
        </div>
      </header>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-orange-600">
            Rechtliches
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            Impressum
          </h1>

          <div className="mt-12 rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 md:p-12">
            <div className="space-y-10 text-lg leading-8 text-black/70">
              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  Verantwortlich für den Inhalt
                </h2>

                <p>
                  Fabian Graf
                  <br />
                  Im Gamander 20
                  <br />
                  9494 Schaan
                  <br />
                  Liechtenstein
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  Kontakt
                </h2>

                <p>
                  E-Mail:{" "}
                  <a
                    href="mailto:info@gworks.li"
                    className="font-semibold text-orange-700 underline underline-offset-4"
                  >
                    info@gworks.li
                  </a>
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  Angebot
                </h2>

                <p>
                  G-Works bietet CAD-Design, 3D-Druck, Prototyping,
                  Ersatzteile und technische Speziallösungen an. Der Bereich
                  G-Works RC umfasst zusätzlich Lösungen und Bauteile für den
                  RC-Modellbau.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  Haftung für Inhalte
                </h2>

                <p>
                  Die Inhalte dieser Website wurden mit Sorgfalt erstellt.
                  Für die Richtigkeit, Vollständigkeit und Aktualität der
                  Inhalte kann jedoch keine Gewähr übernommen werden.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  Haftung für externe Links
                </h2>

                <p>
                  Diese Website kann Links zu externen Websites enthalten. Auf
                  deren Inhalte hat der Betreiber keinen Einfluss. Für die
                  Inhalte externer Seiten sind ausschließlich deren Betreiber
                  verantwortlich.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  Urheberrecht
                </h2>

                <p>
                  Die auf dieser Website veröffentlichten Inhalte, Texte,
                  Bilder, Grafiken und Designs unterliegen dem Urheberrecht.
                  Eine Verwendung, Vervielfältigung oder Weitergabe ist nur mit
                  Zustimmung des Betreibers erlaubt, sofern gesetzlich nichts
                  anderes vorgesehen ist.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-6 py-8 text-center text-sm text-black/40">
        © G-Works · CAD-Design & 3D-Druck · Liechtenstein
      </footer>
    </main>
  );
}