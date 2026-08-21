"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight, Phone } from "lucide-react";

const programmes = [
  {
    code: "SRMO",
    name: "Srinivasa Ramanujan Mathematics Olympiad",
    pattern: "50 questions · Maths 40 + Reasoning 10",
    date: "04 Nov 2026",
    href: "/olympiads/srmo",
    photo: "/images/stock/study.jpg",
  },
  {
    code: "CVRSO",
    name: "C.V. Raman Science Olympiad",
    pattern: "50 questions · Science 30 + G.K. 20",
    date: "04 Nov 2026",
    href: "/olympiads/cvrso",
    photo: "/images/stock/classroom.jpg",
  },
  {
    code: "AKO",
    name: "Abdul Kalam Olympiad",
    pattern: "Maths 10 + Science 10 + English 10 + G.K. 10 + Reasoning 10",
    date: "05 Nov 2026",
    href: "/olympiads/abdul-kalam-olympiad",
    photo: "/images/stock/books.jpg",
  },
  {
    code: "SEO",
    name: "State English Olympiad",
    pattern: "English 30 + G.K. & Current Affairs 20",
    date: "06 Nov 2026",
    href: "/olympiads/state-english-olympiad",
    photo: "/images/stock/exam.jpg",
  },
  {
    code: "NSRMO",
    name: "National Srinivasa Ramanujan Mathematics Olympiad",
    pattern: "50 questions · Maths 40 + Reasoning 10",
    date: "06 Nov 2026",
    href: "/olympiads/nsrmo",
    photo: "/images/stock/lecture.jpg",
  },
  {
    code: "SCO",
    name: "State Cyber Olympiad",
    pattern: "Computer 40 + Reasoning 10 · Telugu 10",
    date: "07 Nov 2026",
    href: "/olympiads/state-cyber-olympiad",
    photo: "/images/stock/desk.jpg",
  },
];

export function StudioHome() {
  const stage = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = stage.current;
    if (!node) return;
    const move = (event: MouseEvent) => {
      node.style.setProperty("--x", `${(event.clientX / window.innerWidth - 0.5) * 36}px`);
      node.style.setProperty("--y", `${(event.clientY / window.innerHeight - 0.5) * 22}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="ms-home" data-template="milkshake-timeframe">
      <section className="ms-hero" ref={stage}>
        <p className="ms-hero__tag">
          <i /> SRF Olympiads 2026–27 · from srmoe.com
        </p>
        <h1>
          <b>A (SERIOUS)</b>
          Year
          <em>in Olympiads</em>
        </h1>
        <p className="ms-hero__dek">
          Srinivasa Ramanujan Foundation, Hyderabad. Separate paper for each class. Level-1 in the student’s own
          school. Duplicate OMR sheet — like TSPSC.
        </p>
        <div className="ms-hero__cta">
          <Link className="ms-pill ms-pill--dark" href="/register">
            Join the cycle <ArrowUpRight size={18} />
          </Link>
          <a className="ms-textlink" href="#made">
            Scroll to explore <ArrowDown size={16} />
          </a>
        </div>

        <aside className="ms-float ms-float-a">
          <small>NOV</small>
          <strong>04</strong>
          <span>SRMO · CVRSO</span>
        </aside>
        <aside className="ms-float ms-float-b">
          <small>NOV</small>
          <strong>05</strong>
          <span>AKO</span>
        </aside>
        <aside className="ms-float ms-float-c">
          <small>NOV</small>
          <strong>06</strong>
          <span>SEO · NSRMO</span>
        </aside>
        <aside className="ms-float ms-float-d">
          <small>NOV</small>
          <strong>07</strong>
          <span>SCO</span>
        </aside>
        <aside className="ms-float ms-float-e">
          <small>DEC</small>
          <strong>06</strong>
          <span>Level-2 Sunday</span>
        </aside>
        <aside className="ms-float ms-float-f">
          <small>FEE</small>
          <strong>150</strong>
          <span>−30 = ₹120</span>
        </aside>
      </section>

      <div className="ms-marquee" aria-label="Official SRF notice">
        <div>
          {Array.from({ length: 2 }).map((_, i) => (
            <p key={i}>
              SRF OLYMPIADS 2026-27 · SRMO, CVRSO LEVEL-1 EXAM 04-11-2026 · AKO LEVEL-1 05-11-2026 · SEO, NSRMO
              06-11-2026 · SCO 07-11-2026 · GOVT. SCHOOLS NO ENTRANCE FEE FOR 25 MEMBERS FROM EACH SCHOOL · SCHOOLS
              MAY SEND REGISTRATION FORMS BY SEPTEMBER 29th 2026 · LEVEL-1 CENTRE: STUDENT’S OWN SCHOOL · LEVEL-2:
              SUNDAY 6 DECEMBER 2026 · DUPLICATE OMR LIKE TSPSC · FEE ₹150 (₹30 MAY BE DEDUCTED) · 9948481729 ✦
            </p>
          ))}
        </div>
      </div>

      <section className="ms-stats">
        {[
          ["06", "Olympiads"],
          ["02", "Levels"],
          ["10", "Class papers"],
          ["29 Sep", "Last school form"],
          ["₹150", "Exam fee"],
          ["TSPSC", "Duplicate OMR"],
        ].map(([n, l]) => (
          <article key={l}>
            <strong>{n}</strong>
            <span>{l}</span>
          </article>
        ))}
      </section>

      <section className="ms-made" id="made">
        <p className="ms-kicker">The things we’ve made</p>
        <h2>
          Latest
          <em> programmes</em>
        </h2>
        <div className="ms-rail">
          {programmes.map((item, index) => (
            <Link className="ms-card" href={item.href} key={item.code}>
              <Image src={item.photo} alt="" fill sizes="80vw" />
              <div>
                <span>
                  0{index + 1} / 06 · {item.date}
                </span>
                <h3>{item.code}</h3>
                <p>{item.name}</p>
                <small>{item.pattern}</small>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="ms-split">
        <article>
          <span>01</span>
          <h2>Feed</h2>
          <h3>Olympiads</h3>
          <p>
            SRMO, CVRSO, SEO, AKO, NSRMO and SCO. 50-question papers. Separate paper for each class. Those who have
            not received confirmation mail/SMS — please contact SRF.
          </p>
          <Link href="/olympiads">
            Open catalogue <ArrowUpRight size={16} />
          </Link>
        </article>
        <article>
          <span>02</span>
          <h2>Friends</h2>
          <h3>Schools</h3>
          <p>
            Send registration forms by 29 September 2026. Level-1 is hosted at the student’s own school. Government
            schools: no entrance fee for 25 members from each school.
          </p>
          <Link href="/school-registration">
            Register a school <ArrowUpRight size={16} />
          </Link>
        </article>
        <article>
          <span>03</span>
          <h2>Slot</h2>
          <h3>Students</h3>
          <p>
            Examination fee ₹150 for each Olympiad covering Level I & II, irrespective of class. ₹30 may be deducted
            towards examination expenditure (₹150 − ₹30 = ₹120).
          </p>
          <Link href="/register">
            Student registration <ArrowUpRight size={16} />
          </Link>
        </article>
      </section>

      <section className="ms-proof">
        <div>
          <p className="ms-kicker">A book of memories</p>
          <h2>
            Every
            <br /> day
            <br /> <em>counts.</em>
          </h2>
          <p>
            SRF is the one and only foundation that gives a duplicate OMR sheet like TSPSC. Level-2 exam centres will
            be finalised by SRF.
          </p>
          <Link className="ms-pill ms-pill--gold" href="/exam-details">
            See the rhythm
          </Link>
        </div>
        <div className="ms-mosaic">
          {["/images/stock/award.jpg", "/images/gallery/event-1.jpg", "/images/stock/graduation.jpg", "/images/hero/campus.jpg", "/images/stock/trophy.jpg", "/images/gallery/event-3.jpg"].map(
            (src) => (
              <figure key={src}>
                <Image src={src} alt="" fill sizes="30vw" />
              </figure>
            ),
          )}
        </div>
      </section>

      <section className="ms-end">
        <p className="ms-kicker">Join the revolution</p>
        <h2>
          Just
          <em> slot it.</em>
        </h2>
        <p>For registration, hall tickets and confirmation messages — speak with the Hyderabad team.</p>
        <div className="ms-end__row">
          <Link className="ms-pill ms-pill--dark" href="/register">
            Register now
          </Link>
          <a href="tel:9948481729">
            <Phone size={16} /> 9948481729
          </a>
          <a href="tel:9908313951">9908313951</a>
        </div>
      </section>
    </div>
  );
}
