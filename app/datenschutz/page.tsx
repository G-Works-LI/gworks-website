export const metadata = {
  title: "Datenschutz | G-Works",
  description: "Datenschutzerklärung von G-Works.",
};

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>

          <div className="mt-12 rounded-[2rem] border border-black/10 bg-white p-8 shadow-xl shadow-black/5 md:p-12">
            <div className="space-y-10 text-lg leading-8 text-black/70">
              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  1. Verantwortlicher
                </h2>

                <p>
                  Verantwortlich für diese Website ist:
                  <br />
                  <br />
                  Fabian Graf
                  <br />
                  Im Gamander 20
                  <br />
                  9494 Schaan
                  <br />
                  Liechtenstein
                  <br />
                  <br />
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
                  2. Allgemeines
                </h2>

                <p>
                  Der Schutz personenbezogener Daten ist wichtig. Diese
                  Datenschutzerklärung informiert darüber, welche Daten beim
                  Besuch dieser Website und bei einer Kontaktaufnahme verarbeitet
                  werden können.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  3. Besuch der Website
                </h2>

                <p>
                  Beim Aufruf dieser Website können durch den technischen
                  Betrieb der Website automatisch Daten verarbeitet werden. Dazu
                  können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs,
                  aufgerufene Seiten, Browsertyp, Betriebssystem und technische
                  Zugriffsinformationen gehören.
                </p>

                <p className="mt-4">
                  Diese Daten werden verarbeitet, um die Website technisch
                  bereitzustellen, die Stabilität und Sicherheit zu gewährleisten
                  und Fehler erkennen zu können.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  4. Hosting
                </h2>

                <p>
                  Diese Website wird über Vercel bereitgestellt. Beim Besuch der
                  Website können technisch notwendige Daten durch den
                  Hosting-Anbieter verarbeitet werden, damit die Website
                  ausgeliefert und betrieben werden kann.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  5. Kontaktaufnahme per E-Mail
                </h2>

                <p>
                  Wenn per E-Mail Kontakt aufgenommen wird, werden die
                  übermittelten Angaben verarbeitet. Dazu können Name,
                  E-Mail-Adresse, Nachrichtentext, technische Angaben und weitere
                  freiwillig mitgeteilte Informationen gehören.
                </p>

                <p className="mt-4">
                  Die Verarbeitung erfolgt zur Bearbeitung der Anfrage,
                  Kommunikation und gegebenenfalls zur Vorbereitung oder
                  Durchführung eines Auftrags.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  6. Cookies und Tracking
                </h2>

                <p>
                  Diese Website verwendet aktuell keine eigenen Analyse-,
                  Marketing- oder Tracking-Cookies. Sollte dies später geändert
                  werden, wird diese Datenschutzerklärung entsprechend angepasst.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  7. Weitergabe von Daten
                </h2>

                <p>
                  Personenbezogene Daten werden nicht ohne Grund an Dritte
                  weitergegeben. Eine Weitergabe kann erfolgen, wenn dies zur
                  technischen Bereitstellung der Website, zur Bearbeitung einer
                  Anfrage, zur Durchführung eines Auftrags oder aufgrund
                  gesetzlicher Pflichten erforderlich ist.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  8. Speicherdauer
                </h2>

                <p>
                  Personenbezogene Daten werden nur so lange gespeichert, wie es
                  für den jeweiligen Zweck erforderlich ist oder gesetzliche
                  Aufbewahrungspflichten bestehen.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  9. Rechte betroffener Personen
                </h2>

                <p>
                  Betroffene Personen haben im Rahmen der geltenden
                  Datenschutzbestimmungen insbesondere Rechte auf Auskunft,
                  Berichtigung, Löschung, Einschränkung der Verarbeitung,
                  Datenübertragbarkeit und Widerspruch.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  10. Beschwerderecht
                </h2>

                <p>
                  Betroffene Personen haben das Recht, sich bei einer zuständigen
                  Datenschutzaufsichtsbehörde zu beschweren, wenn sie der Ansicht
                  sind, dass die Verarbeitung ihrer personenbezogenen Daten gegen
                  geltende Datenschutzvorschriften verstößt.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-black text-black">
                  11. Änderungen dieser Datenschutzerklärung
                </h2>

                <p>
                  Diese Datenschutzerklärung kann angepasst werden, wenn sich die
                  Website, verwendete Dienste oder rechtliche Anforderungen
                  ändern.
                </p>

                <p className="mt-4 text-sm text-black/45">
                  Stand: Juli 2026
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