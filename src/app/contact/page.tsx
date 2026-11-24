import { ContactForm } from "./form";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Borngreat Opoku for web development, AI solutions, and digital product projects.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 px-6">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  Let's Build Something Meaningful.
                </h2>
                <p className="text-lg text-muted leading-relaxed max-w-xl">
                  Have an idea, a business challenge or a digital product in
                  mind? Let's explore how technology can bring it to life.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    title: "Email",
                    value: "hello@borgtech.dev",
                    href: "mailto:hello@borgtech.dev",
                  },
                  {
                    title: "WhatsApp",
                    value: "WhatsApp",
                    href: "https://wa.me/",
                  },
                  {
                    title: "Location",
                    value: "Available for remote collaboration worldwide",
                  },
                ].map((contact) => (
                  <div
                    key={contact.title}
                    className="flex items-start gap-4 p-6 rounded-xl border border-border bg-surface/50 backdrop-blur-sm hover-lift"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {contact.title}
                      </h3>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-muted hover:text-primary transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-muted">{contact.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface/50 backdrop-blur-sm rounded-2xl border border-border p-8 lg:p-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
