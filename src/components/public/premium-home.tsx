import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Compass,
  FileCheck2,
  GraduationCap,
  Medal,
  Phone,
  School,
  Trophy,
} from "lucide-react";

const programmes = [
  { index: "01", title: "National Srinivasa Ramanujan", subtitle: "Mathematics Olympiad", note: "Number sense, patterns, and the pleasure of an elegant proof.", href: "/olympiads/nsrmo", photo: "/images/stock/study.jpg" },
  { index: "02", title: "C.V. Raman", subtitle: "Science Olympiad", note: "Look closer at the world around us.", href: "/olympiads/cvrso", photo: "/images/stock/classroom.jpg" },
  { index: "03", title: "State English", subtitle: "Olympiad", note: "Read with precision. Write with a point of view.", href: "/olympiads/state-english-olympiad", photo: "/images/stock/exam.jpg" },
  { index: "04", title: "Abdul Kalam", subtitle: "General Knowledge", note: "Curiosity built for tomorrow.", href: "/olympiads/abdul-kalam-olympiad", photo: "/images/stock/books.jpg" },
  { index: "05", title: "State Cyber", subtitle: "Olympiad", note: "Logic and responsible problem solving.", href: "/olympiads/state-cyber-olympiad", photo: "/images/stock/desk.jpg" },
  { index: "06", title: "Srinivasa Ramanujan", subtitle: "Mathematics Olympiad", note: "Class-wise papers that reward careful thinking.", href: "/olympiads/srmo", photo: "/images/stock/classroom-2.jpg" },
];

const benefits = [
  { number: "01", title: "A record of effort", body: "Every participant receives a participation certificate—a lasting marker of showing up to a harder question.", icon: BadgeCheck },
  { number: "02", title: "See your thinking twice", body: "A duplicate OMR sheet lets students revisit their work and learn from the attempt after the exam.", icon: FileCheck2 },
  { number: "03", title: "Recognition that travels", body: "Awards and merit recognition celebrate careful thinking, not only the final score.", icon: Medal },
];

function OrbitMark() {
  return (
    <span className="orbit-mark" aria-hidden="true">
      <span className="orbit-mark__ring orbit-mark__ring--one" />
      <span className="orbit-mark__ring orbit-mark__ring--two" />
      <span className="orbit-mark__dot" />
    </span>
  );
}

export function PremiumHome() {
  return (
    <main id="top">
      <section className="srf-shell srf-hero">
        <div className="srf-hero__glow" aria-hidden="true" />
        <div className="srf-hero__glow srf-hero__glow--two" aria-hidden="true" />
        <div className="srf-hero__copy">
          <p className="eyebrow">Hyderabad · Official Olympiad Platform</p>
          <h1>
            For those
            <br />
            who find
            <br />
            <em>another</em>
            <br />
            way.
          </h1>
          <p className="srf-hero__lead">
            Srinivasa Ramanujan Foundation turns the first difficult question into a lifelong
            relationship with learning — through SRMO, CVRSO, SEO, AKO, NSRMO and SCO.
          </p>
          <div className="srf-hero__actions">
            <Link className="srf-button srf-button--gold" href="/exam-details">
              Explore 2026–27 <ArrowDown size={16} />
            </Link>
            <Link className="srf-button srf-button--outline" href="/school-registration">
              Register your school <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="srf-hero__index">
            <span /> A serious invitation to be curious
          </div>
        </div>
        <div className="srf-hero__panel">
          <Image src="/images/hero/library.jpg" alt="Students in an academic hall" fill sizes="50vw" priority />
          <div className="srf-hero__panel-shade" />
          <div className="srf-hero__equation">
            a² + b² = c²
            <small>every answer begins with looking</small>
          </div>
          <div className="srf-orbit-stage" aria-hidden="true">
            <div className="srf-orbit-stage__center">
              <strong>SRF</strong>
              <small>learn · question · grow</small>
            </div>
            <i className="srf-orbit-stage__point srf-orbit-stage__point--a" />
            <i className="srf-orbit-stage__point srf-orbit-stage__point--b" />
            <i className="srf-orbit-stage__point srf-orbit-stage__point--c" />
          </div>
        </div>
      </section>

      <div className="srf-shell srf-stats">
        {[
          ["06", "Olympiad doors"],
          ["02", "Exam levels"],
          ["₹150", "Standard fee"],
          ["29 Sep", "Registration closes"],
        ].map(([value, label]) => (
          <article className="srf-stat" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>

      <div className="srf-marquee" aria-label="SRF programme highlights">
        <div className="srf-marquee__track">
          {[0, 1].map((copy) => (
            <div className="srf-marquee__inner" key={copy} aria-hidden={copy === 1}>
              {["Registration open", "Mathematics", "Science", "English", "Cyber", "Certificates for every participant"].map((item) => (
                <span key={`${copy}-${item}`}>
                  <span>{item}</span>
                  <span className="srf-marquee__dot"> · </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="srf-section srf-section--deep" id="olympiads">
        <div className="srf-shell">
          <div className="srf-section__header">
            <div>
              <p className="eyebrow">The 2026–27 programme</p>
              <h2 className="srf-section-title">
                Six doors into
                <br />
                <em>deeper thinking.</em>
              </h2>
            </div>
            <p className="srf-section__intro">
              A structured set of Olympiads for school students—designed to reward the attempt, not just the answer.
            </p>
          </div>
          <div className="srf-bento">
            {programmes.map((item) => (
              <Link href={item.href} className="srf-bento-card" key={item.index}>
                <span className="srf-bento-card__photo">
                  <Image src={item.photo} alt="" fill sizes="40vw" />
                </span>
                <span className="srf-bento-card__index">{item.index} / 06</span>
                <h3>
                  {item.title}
                  <span>{item.subtitle}</span>
                </h3>
                <p>{item.note}</p>
              </Link>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 28 }}>
            <Link className="srf-button srf-button--outline" href="/exam-details">
              View the exam rhythm <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="srf-section srf-section--ink" id="calendar">
        <div className="srf-shell srf-calendar">
          <div className="srf-calendar__copy">
            <p className="eyebrow">Mark the margins</p>
            <h2 className="srf-section-title">
              The right
              <br />
              question,
              <br />
              <em>at the right time.</em>
            </h2>
            <p className="srf-calendar__note">
              Level 1 is the centre of the Olympiads. Students who qualify move on to a focused Level 2 experience.
            </p>
            <Link className="srf-button srf-button--gold" href="/school-registration" style={{ marginTop: 27 }}>
              Secure a school place <ArrowUpRight size={16} />
            </Link>
          </div>
          <div>
            <div className="srf-date-table">
              <div className="srf-date-row">
                <div className="srf-date-row__date">29 Sep</div>
                <div className="srf-date-row__label">
                  <strong>Registration deadline</strong>
                  School forms close for the 2026–27 cycle
                </div>
              </div>
              <div className="srf-date-row">
                <div className="srf-date-row__date">
                  04—07
                  <br />
                  Nov
                </div>
                <div className="srf-date-row__label">
                  <strong>Level 1 examinations</strong>
                  School-hosted sessions across the region
                </div>
              </div>
              <div className="srf-date-row">
                <div className="srf-date-row__date">06 Dec</div>
                <div className="srf-date-row__label">
                  <strong>Level 2 examination</strong>
                  For students advancing from Level 1
                </div>
              </div>
            </div>
            <div className="srf-fee">
              <strong>₹150</strong>
              <span>
                Standard participation fee
                <br />
                ₹30 is directed toward exam expenditure
              </span>
            </div>
            <div className="srf-date-meta">
              <span>
                <strong>Open now</strong>
                School registration
              </span>
              <span>
                <strong>Available</strong>
                Government-school support
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="srf-section" id="foundation">
        <div className="srf-shell srf-story">
          <aside className="srf-story__aside">
            <p className="eyebrow">The foundation</p>
            <span className="srf-quote-mark">“</span>
            <p>Ramanujan saw patterns where others saw noise. We build the room where a student can do the same.</p>
            <Image
              src="/images/hero/campus.jpg"
              alt="Academic campus"
              width={640}
              height={420}
              className="srf-story-photo"
            />
            <OrbitMark />
          </aside>
          <div className="srf-story__body">
            <p>SRF is an education foundation in Hyderabad with a simple belief: a child’s curiosity deserves a proper stage.</p>
            <p>
              Through structured Olympiads, participation certificates, awards, and school partnerships, we make academic
              confidence visible—and give young students a reason to keep asking.
            </p>
            <Link className="srf-button srf-button--outline" href="/about">
              Meet the SRF way <ArrowRight size={16} />
            </Link>
            <div className="srf-feature-grid" id="resources">
              <article className="srf-feature">
                <span className="srf-feature__label">A keepsake of showing up</span>
                <h3>Participation, made visible.</h3>
                <p>Each student receives a certificate to take home, share, and keep as a reminder of the question they chose to meet.</p>
                <span className="srf-document" aria-hidden="true" />
              </article>
              <article className="srf-feature srf-feature--dark">
                <span className="srf-feature__label">Look again</span>
                <h3>The duplicate OMR.</h3>
                <p>A second copy turns an answer sheet into a learning tool—something students and teachers can actually talk through.</p>
                <span className="srf-omr" aria-hidden="true">
                  <span className="srf-omr__head">
                    <b>SRF 26</b>
                    <b>OMR</b>
                  </span>
                  <span className="srf-omr__rows">
                    {["01", "02", "03", "04"].map((n) => (
                      <span className="srf-omr__row" key={n}>
                        {n}{" "}
                        <span className="srf-omr__bubbles">
                          <i />
                          <i />
                          <i />
                          <i />
                        </span>
                      </span>
                    ))}
                  </span>
                </span>
              </article>
            </div>
            <div className="srf-gallery-strip">
              {[
                ["/images/stock/students-1.jpg", "Students collaborating"],
                ["/images/stock/award.jpg", "Academic awards"],
                ["/images/gallery/event-1.jpg", "SRF ceremony"],
                ["/images/stock/graduation.jpg", "Achievement"],
                ["/images/hero/library.jpg", "Library"],
              ].map(([src, alt]) => (
                <figure key={src}>
                  <Image src={src} alt={alt} fill sizes="40vw" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="srf-section srf-section--ink" id="proof">
        <div className="srf-shell">
          <div className="srf-section__header">
            <div>
              <p className="eyebrow">Beyond the paper</p>
              <h2 className="srf-section-title">
                A little proof
                <br />
                goes <em>a long way.</em>
              </h2>
            </div>
            <p className="srf-section__intro">The exam ends. The evidence of effort, and the conversation it starts, stays.</p>
          </div>
          <div className="srf-proof-grid">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article className="srf-proof" key={benefit.number}>
                  <div className="srf-proof__number">{benefit.number}</div>
                  <Icon className="srf-proof__icon" size={20} />
                  <h3>{benefit.title}</h3>
                  <p>{benefit.body}</p>
                </article>
              );
            })}
          </div>
          <div className="srf-recognition">
            <Trophy size={18} color="#c9a227" />
            <strong>Recognition</strong>
            <span>·</span>
            <span>Merit awards</span>
            <span>·</span>
            <span>School honours</span>
            <span>·</span>
            <span>Participation certificates</span>
          </div>
        </div>
      </section>

      <section className="srf-section srf-section--deep" id="pathways">
        <div className="srf-shell srf-pathways">
          <div className="srf-pathways__intro">
            <p className="eyebrow">Choose your place in the room</p>
            <h2 className="srf-section-title">
              There is a
              <br />
              <em>way in.</em>
            </h2>
            <p>
              Whether you are opening a school door, looking for the next challenge, or helping a whole room take
              part—we would like to hear from you.
            </p>
            <Link className="srf-button srf-button--gold" href="/contact">
              Talk to SRF <Phone size={15} />
            </Link>
          </div>
          <div>
            <div className="srf-pathway-list">
              <Link className="srf-pathway" href="/school-registration">
                <span className="srf-pathway__icon">
                  <School size={19} />
                </span>
                <span className="srf-pathway__copy">
                  <strong>For schools</strong>
                  <span>Register your institution and host a considered exam day.</span>
                </span>
                <ArrowUpRight size={19} />
              </Link>
              <Link className="srf-pathway" href="/register">
                <span className="srf-pathway__icon">
                  <GraduationCap size={19} />
                </span>
                <span className="srf-pathway__copy">
                  <strong>For students</strong>
                  <span>Find the Olympiad that makes you want to know more.</span>
                </span>
                <ArrowUpRight size={19} />
              </Link>
              <Link className="srf-pathway" href="/coordinator-registration">
                <span className="srf-pathway__icon">
                  <Compass size={19} />
                </span>
                <span className="srf-pathway__copy">
                  <strong>For coordinators</strong>
                  <span>Become the steady hand behind a student’s first big attempt.</span>
                </span>
                <ArrowUpRight size={19} />
              </Link>
            </div>
            <div className="srf-links-strip">
              <Link href="/about">About</Link>
              <Link href="/awards">Results & awards</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/downloads">Downloads</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="srf-closing" id="contact">
        <div className="srf-orbit-mini" aria-hidden="true" />
        <div className="srf-shell srf-closing__inner">
          <div>
            <p className="eyebrow">A question worth asking</p>
            <h2>
              Begin with
              <br />
              <em>hello.</em>
            </h2>
          </div>
          <div className="srf-closing__contact">
            <p>For registration, partnerships, and the 2026–27 Olympiads, speak with the SRF team.</p>
            <a href="tel:9948481729">
              <Phone size={15} style={{ verticalAlign: "middle", marginRight: 8, color: "var(--srf-gold)" }} />
              9948481729
            </a>
            <br />
            <Link className="srf-button srf-button--gold" href="/contact" style={{ marginTop: 23 }}>
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
