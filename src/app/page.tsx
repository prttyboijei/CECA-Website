"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  HeartHandshake,
  BookOpen,
  FileUp,
  ArrowRight,
  Users,
  Quote,
} from "lucide-react";

const HERO_IMAGES = [
  "/657849587_1438059825032068_3125084866051623626_n.jpg",
  "/710890257_1496489275855789_2012904386844049093_n.jpg",
  "/788413725_3223615934693407_6665821256180396007_n.png.jpeg",
];

// PLACEHOLDER — replace with real figures once available
const IMPACT_STATS = [
  { value: "1,200+", label: "Students engaged in service learning" },
  { value: "35", label: "Partner communities across the region" },
  { value: "8", label: "Core advocacy areas" },
  { value: "6", label: "Schools actively participating" },
];

// PLACEHOLDER — replace with real testimonial/story
const STORY = {
  quote:
    "Placeholder quote — replace with a real reflection from a student, faculty member, or community partner about their CECA experience.",
  name: "Full Name",
  role: "Program / School, Year",
};

// PLACEHOLDER — replace with real partner names/logos
const PARTNERS = [
  "Partner Organization 1",
  "Partner Organization 2",
  "Partner Organization 3",
  "Partner Organization 4",
  "Partner Organization 5",
  "Partner Organization 6",
];

// Splits "1,200+" into { number: 1200, suffix: "+" } so we can count up to it
function parseStatValue(raw: string) {
  const match = raw.match(/^([\d,]+)(.*)$/);
  if (!match) return { number: 0, suffix: raw };
  return { number: parseInt(match[1].replace(/,/g, ""), 10), suffix: match[2] };
}

// Counts up from 0 to its target once it scrolls into view
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const { number, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200; // fast count-up
          const startTime = performance.now();

          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * number));
            if (progress < 1) requestAnimationFrame(step);
            else setDisplay(number);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [number]);

  return (
    <div>
      <p ref={ref} className="text-4xl font-semibold text-white sm:text-5xl">
        {display.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{label}</p>
    </div>
  );
}

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* ============================================ */}
      {/* 01 — HERO: pulled up with negative margin so  */}
      {/* it reaches the true top corner, behind navbar */}
      {/* ============================================ */}
      <section className="relative left-1/2 -mt-24 h-[600px] w-screen -translate-x-1/2 overflow-hidden bg-slate-900 sm:-mt-28 sm:h-[650px]">
        {HERO_IMAGES.map((imgSrc, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
            >
              <div
                className={`relative h-full w-full transition-transform ease-linear ${
                  isActive ? "scale-100 duration-[5000ms]" : "scale-110 duration-0"
                }`}
              >
                <img
                  src={imgSrc}
                  alt={`CECA Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-12 left-6 z-20 max-w-4xl space-y-6 pr-6 md:left-16">
          <p className="max-w-2xl text-base leading-relaxed text-slate-100 drop-shadow md:text-lg">
            The University Community Engagement and CICM Advocacies (CECA)
            Office bridges academic excellence with community needs. Join us
            in making a sustainable impact.
          </p>
          <div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 font-semibold text-blue-900 shadow-lg transition-colors hover:bg-blue-50"
            >
              Meet the Team <Users className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 02 — INTRODUCTION */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-wider text-blue-900">
          Our Purpose
        </p>
        <p className="mt-6 text-2xl font-medium leading-relaxed text-slate-800 sm:text-3xl">
          Education is not complete within classroom walls. CECA exists to
          carry the university&apos;s knowledge, values, and people out into
          the communities that need them most, and to bring what those
          communities teach us back into the university.
        </p>
      </section>

      {/* 03 — OUR WORK */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-blue-900">
              Our Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              Three ways we engage
            </h2>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Service-Learning Program
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                This is a teaching-learning strategy that integrates meaningful community service with instruction and reflection 
                to boost learners’ learning experience, teach active citizenship, and empower individuals and communities.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Outreach Program
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Activities falling under these are theoretically unconsidered as extension programs, as they generally involve 
                one-time and immediate need assistance to victims of disasters, calamities and other insistent needs in the community. 
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900">
                Extension Program
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Higher education institutions are mandated to render extension service hand in hand with instruction, research and production. This is in 
                recognition of the vital role colleges and universities play in the development of communities, especially the underserved and the depressed. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 04 — INITIATIVES: colors neutralized to gray/ */}
      {/* slate — red/blue/green removed per feedback   */}
      {/* ============================================ */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-blue-900">
            Initiatives
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Get Involved
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
            Explore our programs and find out how you can contribute to our
            mission.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
              <HeartHandshake className="h-7 w-7 text-slate-700" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              Our Advocacies
            </h3>
            <p className="mb-8 flex-grow text-slate-600">
              From poverty alleviation to disaster response, discover the 8
              core areas where our partner schools are making a difference.
            </p>
            <Link
              href="/advocacies"
              className="mt-auto inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-900"
            >
              Explore Advocacies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
              <BookOpen className="h-7 w-7 text-slate-700" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              CECA Guidelines
            </h3>
            <p className="mb-8 flex-grow text-slate-600">
              Learn how we integrate community service with academic
              instruction for both Basic Education and College students.
            </p>
            <Link
              href="/service-learning"
              className="mt-auto inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-900"
            >
              View Guidelines <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100">
              <FileUp className="h-7 w-7 text-slate-700" />
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-900">
              Forms & Uploads
            </h3>
            <p className="mb-8 flex-grow text-slate-600">
              Submit your project files directly to the CECA Google Drive
              and access required templates and documents.
            </p>
            <Link
              href="/repository"
              className="mt-auto inline-flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-900"
            >
              Access Repository <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 05 — IMPACT: numbers now count up fast on     */}
      {/* scroll into view via AnimatedStat             */}
      {/* ============================================ */}
      <section className="border-t border-gray-100 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-wider text-blue-300">
              Impact
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              The difference, in numbers
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-4">
            {IMPACT_STATS.map((stat) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 06 — STORIES */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Quote className="mx-auto h-8 w-8 text-blue-900" />
        <p className="mt-8 text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl">
          &ldquo;{STORY.quote}&rdquo;
        </p>
        <div className="mt-8">
          <p className="text-sm font-semibold text-slate-900">
            {STORY.name}
          </p>
          <p className="text-sm text-slate-500">{STORY.role}</p>
        </div>
      </section>

      {/* 07 — PARTNERS */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-400">
            In Partnership With
          </p>
          <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
            {PARTNERS.map((partner) => (
              <p
                key={partner}
                className="text-center text-sm font-medium text-slate-500"
              >
                {partner}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — CTA */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Ready to get involved?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
          Whether you&apos;re a student, faculty member, or community
          partner, there&apos;s a place for you in CECA&apos;s work.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/repository"
            className="inline-flex items-center gap-2 rounded-full bg-blue-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Submit a Project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-8 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-blue-900 hover:text-blue-900"
          >
            Meet the Team
          </Link>
        </div>
      </section>

      {/* 09 — FOOTER lives in the shared layout */}
    </main>
  );
}