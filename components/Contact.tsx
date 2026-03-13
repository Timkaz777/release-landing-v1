export function Contact() {
  return (
    <section id="contact" className="section pt-8 sm:pt-10 lg:pt-12">
      <div className="shell">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-line/80 bg-panel p-8 text-center shadow-soft sm:p-10 lg:p-16">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title mx-auto mt-4 text-center">
            Start a strategic conversation
          </h2>
          <div className="divider mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-frost/78 sm:text-lg">
            We welcome dialogue around strategic partnerships, structuring
            discussions, and selected real-world asset participation
            opportunities.
          </p>
          <div className="mt-12 grid gap-8 border-t border-line/80 pt-8 sm:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-overline text-emerald/80">
                Email
              </p>
              <a
                href="mailto:chairman@musharaqahub.com"
                className="mt-2 inline-block text-lg text-mist transition hover:text-emerald"
              >
                chairman@musharaqahub.com
              </a>
            </div>
            <div>
              <p className="text-sm uppercase tracking-overline text-emerald/80">
                Location
              </p>
              <p className="mt-2 text-lg leading-8 text-mist">
                Astana International Financial Centre, Astana, Kazakhstan
              </p>
            </div>
          </div>
          <a href="mailto:chairman@musharaqahub.com" className="primary-button mt-12">
            Email our team
          </a>
          <p className="mt-6 text-sm leading-7 text-frost/58">
            For partnership and project-related inquiries, email is the most
            direct point of contact.
          </p>
        </div>
      </div>
    </section>
  );
}
