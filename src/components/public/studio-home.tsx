"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

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
  return (
    <div className="ms-home">
      <section className="ms-hero">
        <div className="ms-hero__copy">
          <p className="ms-hero__tag">Srinivasa Ramanujan Foundation · Hyderabad</p>
          <h1>Official Olympiad examinations for the 2026–27 academic year.</h1>
          <p className="ms-hero__dek">
            Six programmes for Classes 1–10, with a separate paper for each class. Level-1 is held at the student’s
            own school. Duplicate OMR sheets are issued, as with TSPSC.
          </p>
          <div className="ms-hero__cta">
            <Link className="ms-pill ms-pill--dark" href="/register">
              Student registration <ArrowRight size={16} />
            </Link>
            <Link className="ms-pill ms-pill--line" href="/school-registration">
              School registration
            </Link>
          </div>
          <ul className="ms-hero__facts">
            <li>
              <strong>29 Sep 2026</strong>
              <span>School forms close</span>
            </li>
            <li>
              <strong>04–07 Nov</strong>
              <span>Level-1 examinations</span>
            </li>
            <li>
              <strong>6 Dec 2026</strong>
              <span>Level-2 · Sunday</span>
            </li>
            <li>
              <strong>₹150</strong>
              <span>Fee (₹150 − ₹30 = ₹120)</span>
            </li>
          </ul>
        </div>
        <div className="ms-hero__media">
          <Image src="/images/hero/library.jpg" alt="Students in an examination setting" fill sizes="50vw" priority />
          <aside className="ms-schedule">
            <p>Level-1 timetable</p>
            <dl>
              <div>
                <dt>04 Nov</dt>
                <dd>SRMO, CVRSO</dd>
              </div>
              <div>
                <dt>05 Nov</dt>
                <dd>AKO</dd>
              </div>
              <div>
                <dt>06 Nov</dt>
                <dd>SEO, NSRMO</dd>
              </div>
              <div>
                <dt>07 Nov</dt>
                <dd>SCO</dd>
              </div>
            </dl>
          </aside>
        </div>
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
          programmes
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
            Open catalogue <ArrowRight size={16} />
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
            Register a school <ArrowRight size={16} />
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
            Student registration <ArrowRight size={16} />
          </Link>
        </article>
      </section>

      <section className="ms-proof">
        <div>
          <p className="ms-kicker">A book of memories</p>
          <h2>
            Every student
            <br /> is recognised.
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
        <p className="ms-kicker">Registrations open</p>
        <h2>Begin the 2026–27 cycle.</h2>
        <p>For registration, hall tickets and confirmation messages, contact the Hyderabad office.</p>
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
