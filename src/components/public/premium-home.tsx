"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Phone } from "lucide-react";
import { olympiads } from "@/lib/content/olympiads";

const work = [
  { slug: "srmo", photo: "/images/stock/study.jpg", kicker: "Mathematics" },
  { slug: "cvrso", photo: "/images/stock/classroom.jpg", kicker: "Science" },
  { slug: "state-english-olympiad", photo: "/images/stock/exam.jpg", kicker: "Language" },
  { slug: "abdul-kalam-olympiad", photo: "/images/stock/books.jpg", kicker: "Knowledge" },
  { slug: "nsrmo", photo: "/images/stock/lecture.jpg", kicker: "National" },
  { slug: "state-cyber-olympiad", photo: "/images/stock/desk.jpg", kicker: "Cyber" },
];

const features = [
  {
    index: "01",
    title: "Feed",
    display: "Olympiads",
    body: "Six programmes. One calendar. A social-diary of academic ambition for Classes 1–10 — mathematics, science, English, knowledge and cyber.",
    href: "/olympiads",
    cta: "Open the catalogue",
    photo: "/images/hero/library.jpg",
  },
  {
    index: "02",
    title: "Friends",
    display: "Schools",
    body: "Host Level-1 in your own campus. Register the institution, seat the room, and give every student a considered exam day.",
    href: "/school-registration",
    cta: "Register a school",
    photo: "/images/stock/school.jpg",
  },
  {
    index: "03",
    title: "Slot",
    display: "Students",
    body: "Pick a door. Pay once. Carry a hall ticket, a duplicate OMR, and a certificate that proves you showed up to a harder question.",
    href: "/register",
    cta: "Start registration",
    photo: "/images/stock/students-1.jpg",
  },
];

export function PremiumHome() {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const onMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 28;
      const y = (event.clientY / window.innerHeight - 0.5) * 18;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="srf-studio">
      <section className="srf-studio-hero" ref={stage}>
        <div className="srf-studio-hero__grid" aria-hidden="true" />
        <p className="srf-studio-hero__live">
          <i /> Live · 2026–27 cycle · Hyderabad
        </p>
        <h1 className="srf-studio-hero__title">
          <span>A new way</span>
          <span>of designing,</span>
          <span>
            discovering <em>&amp; sharing</em>
          </span>
          <span>brilliance.</span>
        </h1>
        <p className="srf-studio-hero__lead">
          Srinivasa Ramanujan Foundation. Official Olympiads for students who would rather find another way.
        </p>
        <div className="srf-studio-hero__actions">
          <Link className="srf-button srf-button--gold" href="/register">
            Join the cycle <ArrowUpRight size={18} />
          </Link>
          <Link className="srf-button srf-button--ghost" href="#work">
            Scroll to explore <ArrowDown size={18} />
          </Link>
        </div>

        <article className="srf-chip srf-chip--a">
          <small>NOV</small>
          <strong>04–07</strong>
          <span>Level 1 window</span>
        </article>
        <article className="srf-chip srf-chip--b">
          <small>SEP</small>
          <strong>29</strong>
          <span>Registration</span>
        </article>
        <article className="srf-chip srf-chip--c">
          <small>FEE</small>
          <strong>₹150</strong>
          <span>Per Olympiad</span>
        </article>
        <article className="srf-chip srf-chip--d">
          <small>DEC</small>
          <strong>06</strong>
          <span>Level 2</span>
        </article>
        <article className="srf-chip srf-chip--e">
          <small>CLASS</small>
          <strong>1–10</strong>
          <span>Own school centre</span>
        </article>
      </section>

      <div className="srf-ticker" aria-hidden="true">
        <div className="srf-ticker__track">
          {[0, 1].map((copy) => (
            <div className="srf-ticker__row" key={copy}>
              {["SRMO", "CVRSO", "SEO", "AKO", "NSRMO", "SCO", "Certificates", "Duplicate OMR"].map((item) => (
                <span key={`${copy}-${item}`}>
                  {item} <b>✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="srf-numbers">
        <div className="srf-shell srf-numbers__grid">
          {[
            ["06", "Olympiads launched"],
            ["02", "Levels of paper"],
            ["10", "Class-wise rooms"],
            ["1729", "The Hardy number"],
            ["₹150", "Standard fee"],
            ["29 Sep", "Last school form"],
          ].map(([n, label]) => (
            <article key={label}>
              <strong>{n}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="srf-work" id="work">
        <div className="srf-shell srf-work__head">
          <p className="srf-kicker">The things we’ve made</p>
          <h2>
            Six doors.
            <em> One year.</em>
          </h2>
        </div>
        <div className="srf-hscroll">
          {work.map((item, index) => {
            const olympiad = olympiads.find((entry) => entry.slug === item.slug)!;
            return (
              <Link className="srf-hcard" href={`/olympiads/${item.slug}`} key={item.slug}>
                <Image src={item.photo} alt="" fill sizes="70vw" />
                <div className="srf-hcard__shade" />
                <div className="srf-hcard__meta">
                  <span>0{index + 1} / 06 · {item.kicker}</span>
                  <h3>{olympiad.shortName}</h3>
                  <p>{olympiad.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="srf-features">
        {features.map((feature) => (
          <article className="srf-feature-row" key={feature.index}>
            <div className="srf-feature-row__title">
              <span>{feature.index}</span>
              <h2>{feature.display}</h2>
              <p className="srf-feature-row__ghost">{feature.title}</p>
            </div>
            <div className="srf-feature-row__copy">
              <p>{feature.body}</p>
              <Link href={feature.href}>
                {feature.cta} <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="srf-feature-row__media">
              <Image src={feature.photo} alt="" fill sizes="40vw" />
            </div>
          </article>
        ))}
      </section>

      <section className="srf-mosaic">
        <div className="srf-mosaic__copy">
          <p className="srf-kicker">A book of memories</p>
          <h2>
            Every
            <br />
            student
            <br />
            <em>counts.</em>
          </h2>
          <p>
            Participation certificates. Duplicate OMR sheets. School honours. The exam ends. The evidence of effort stays.
          </p>
          <Link className="srf-button srf-button--gold" href="/awards">
            See recognition <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="srf-mosaic__grid">
          {[
            "/images/stock/award.jpg",
            "/images/gallery/event-1.jpg",
            "/images/stock/graduation.jpg",
            "/images/gallery/event-3.jpg",
            "/images/hero/campus.jpg",
            "/images/stock/trophy.jpg",
          ].map((src) => (
            <figure key={src}>
              <Image src={src} alt="" fill sizes="30vw" />
            </figure>
          ))}
        </div>
      </section>

      <section className="srf-end">
        <p className="srf-kicker">Join the revolution</p>
        <h2>
          Just
          <em> slot it.</em>
        </h2>
        <p>Registration, hall tickets, results and certificates — one Hyderabad foundation, one 2026–27 cycle.</p>
        <div className="srf-end__row">
          <Link className="srf-button srf-button--gold" href="/register">
            Student registration
          </Link>
          <Link className="srf-button srf-button--ghost" href="/school-registration">
            School registration
          </Link>
          <a className="srf-end__phone" href="tel:9948481729">
            <Phone size={16} /> 9948481729
          </a>
        </div>
      </section>
    </div>
  );
}
