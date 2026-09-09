"use client";

import { useState } from "react";
import {
  User,
  ShieldCheck,
  X,
  Mail,
  Facebook,
  Award,
  Briefcase,
  GraduationCap,
  Target,
  Compass,
  ExternalLink,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  email?: string;
  facebook?: string;
  yearsOfService?: string;
  department?: string;
  bio?: string;
  education?: string;
}

const OBJECTIVES = [
  "Develop programs addressing local/global challenges aligned with CICM advocacies and SDGs.",
  "Forge collaborative relationships with local organizations.",
  "Provide educational resources promoting compassion and justice.",
  "Integrate sustainable practices into community projects.",
  "Offer training fostering active citizenship.",
];

const TEAM: TeamMember[] = [
  {
    name: "Lily Ann B. Dela Cruz, MSIT",
    role: "CECA Director",
    photo: "/teamPhotosd/771708556_1448207863805071_3175677601360076030_n.png.jpeg",
    email: "ldelacruz@usl.edu.ph",
    facebook: "https://www.facebook.com/anndlx",
    yearsOfService: "20 Years at USL",
    department: "School of Architecture, Computing & Engineering",
    education: "Master of Science in Information Technology",
    bio: "Leads the overall strategic direction of the CECA office, overseeing institutional outreach, community development partnerships, and CICM advocacy alignment across all university departments.",
  },
  {
    name: "Sharlotte A. Ferrer, MST",
    role: "SECAP CECA Coordinator / NSTP Coordinator",
    photo: "/teamPhotosd/772664447_2076629869594437_3471196285558330476_n.png.jpeg",
    email: "sferrer@usl.edu.ph",
    facebook: "https://www.facebook.com/prettyshar.ferrer",
    yearsOfService: "2 Years at USL",
    department: "SECAP & NSTP",
    education: "Master of Science in Teaching",
    bio: "Coordinates community extension programs for SECAP while managing NSTP civic welfare activities to engage students in active citizenship and social outreach.",
  },
  {
    name: "Roselyn N. Lemi, MBA",
    role: "SABH CECA Coordinator",
    photo: "/teamPhotosd/772697128_1786985275631988_1657642765555364604_n.png.jpeg",
    email: "rlemi@usl.edu.ph",
    facebook: "https://www.facebook.com/roz.lemi",
    yearsOfService: "7 Years at USL",
    department: "School of Accountancy, Business & Hospitality",
    education: "Master of Business Administration",
    bio: "Drives business-oriented community immersion initiatives, entrepreneurship workshops, and financial literacy projects for partner communities.",
  },
  {
    name: "Engr. Marvin G. Silva, MEE",
    role: "SACE CECA Coordinator",
    photo: "/teamPhotosd/770738451_2144085110323138_8147387940198901083_n.png.jpeg",
    email: "msilva@usl.edu.ph",
    facebook: "https://www.facebook.com/marvin.silva.3110",
    yearsOfService: "10 Years at USL",
    department: "School of Architecture, Computing & Engineering",
    education: "Master of Engineering Education",
    bio: "Spearheads technological and engineering extension projects, including sustainable infrastructure support and digital literacy outreach.",
  },
  {
    name: "Krystelle Mae G. Batalla, MSN",
    role: "SHAS CECA Coordinator",
    photo: "/teamPhotosd/765724107_1398475512136032_265949527708179849_n.png.jpeg", // Note: fixed file extension based on your first file
    email: "kbatalla@usl.edu.ph",
    facebook: "https://www.facebook.com/km.batsy",
    yearsOfService: "6 Years at USL",
    department: "School of Health & Allied Sciences",
    education: "Master of Science in Nursing",
    bio: "Coordinates medical missions, health awareness campaigns, and community wellness programs in rural and underserved areas.",
  },
  {
    name: "Marlowe A. Tambauan",
    role: "BES CECA Coordinator",
    photo: "/teamPhotosd/772485480_1097732199262657_2646197674335570773_n.png.jpeg",
    email: "mtambauan@usl.edu.ph",
    facebook: "https://www.facebook.com/marlowe.tambauan",
    yearsOfService: "5 Years at USL",
    department: "Basic Education School",
    education: "Bachelor of Secondary Education",
    bio: "Engages basic education students and faculty in values-formed community services and youth leadership extension activities.",
  },
  {
    name: "Jennifer C. Bangi, MARS",
    role: "CECA Coordinator / Non-Teaching Personnel",
    photo: "/teamPhotosd/772137739_1551793635786311_3834446196019177502_n.png.jpeg",
    email: "jbangi@usl.edu.ph",
    facebook: "https://www.facebook.com/jen.casibang",
    yearsOfService: "9 Years at USL",
    department: "Non-Teaching Personnel Outreach",
    education: "Master of Arts in Religious Studies",
    bio: "Facilitates spiritual, moral, and values-enrichment community projects in collaboration with non-teaching staff and ecclesiastical partners.",
  },
  {
    name: "Geolo Liban, RCRIM",
    role: "CECA Assistant",
    photo: "/teamPhotosd/771874027_1380079547407184_784676638503816545_n.png-2.jpeg",
    email: "gliban@usl.edu.ph",
    facebook: "https://www.facebook.com/GeoloLiban.csb",
    yearsOfService: "2 Years at USL",
    department: "CECA Administrative Office",
    education: "Registered Criminologist",
    bio: "Provides crucial administrative, logistical, and field support for all CECA office operations and community outreach events.",
  },
];

export default function AboutPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Dynamically separate the director from the rest of the staff
  const director = TEAM.find((m) => m.role.includes("Director"));
  const orderedNames = [
    "Sharlotte A. Ferrer, MST",
    "Roselyn N. Lemi, MBA",
    "Engr. Marvin G. Silva, MEE",
    "Krystelle Mae G. Batalla, MSN",
    "Marlowe A. Tambauan",
    "Jennifer C. Bangi, MARS",
  ];

  const mainStaff = orderedNames
    .map((name) => TEAM.find((member) => member.name === name))
    .filter((member): member is TeamMember => Boolean(member));

  const secondaryStaff = TEAM.filter((member) => member.name === "Geolo Liban, RCRIM");

  // Helper to auto-generate the pill badge based on the role string
  const getBadge = (role: string) => {
    const match = role.match(/^(SECAP|SABH|SACE|SHAS|BES)/);
    if (match) return match[0];
    if (role.toLowerCase().includes("assistant")) return "Assistant";
    if (role.toLowerCase().includes("non-teaching")) return "Non-Teaching";
    return "Admin";
  };

  const getBadgeClasses = (role: string) => {
    const normalized = role.toUpperCase();
    if (normalized.includes("SECAP")) return "bg-blue-100 text-blue-700 border-blue-200";
    if (normalized.includes("SACE")) return "bg-red-100 text-red-700 border-red-200";
    if (normalized.includes("SHAS")) return "bg-emerald-100 text-emerald-700 border-emerald-200";
    if (normalized.includes("SABH")) return "bg-amber-100 text-amber-700 border-amber-200";
    if (normalized.includes("BES")) return "bg-orange-100 text-orange-700 border-orange-200";
    if (normalized.includes("ASSISTANT") || normalized.includes("NON-TEACHING"))
      return "bg-slate-200 text-slate-700 border-slate-300";
    return "bg-slate-100 text-slate-700 border-slate-200";
  };

  return (
    <div className="min-h-screen bg-slate-50/50 pb-24">
      {/* HEADER SECTION WITH SEPARATION */}
      <section className="border-b border-slate-200/80 bg-white py-16 shadow-sm">
        <div className="mx-auto max-w-6xl px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-900 border border-blue-100">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
            About Us
          </div>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Our Vision, Mission, and Objectives
          </h1>
          <p className="mt-4 max-w-3xl text-base text-slate-600 sm:text-lg leading-relaxed">
            Guiding the University of Saint Louis in community engagement, CICM values, and transformative social responsibility.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 pt-16">
        {/* VISION & MISSION CARDS */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-50/50 blur-2xl"></div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-900">
                <Compass className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">Vision</h2>
            </div>
            <p className="mt-5 text-base leading-relaxed text-slate-600 text-justify relative z-10">
              The University Community Engagement and CICM Advocacies Office envisions its extension programs as a driving force for
              sustainable development, empowering communities through knowledge-sharing, capacity-building, and meaningful
              partnerships. By integrating academic expertise with community needs, the university seeks to foster social responsibility,
              innovation, and inclusive growth, contributing to the overall well-being and progress of the communities it serves.
            </p>
          </div>

          {/* Mission Card */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-indigo-50/50 blur-2xl"></div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-900">
                <Target className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900">Mission</h2>
            </div>
            <p className="mt-5 text-base leading-relaxed text-slate-600 text-justify relative z-10">
              The University&apos;s Community Engagement and CICM Advocacies (CECA) Office is committed to promoting transformative education,
              social responsibility, compassion, and justice through active community collaboration. Guided by CICM values, we integrate
              education, research, and service to empower individuals, foster sustainable development, and address local and global challenges
              for the common good.
            </p>
          </div>
        </div>

        {/* OBJECTIVES CARD SECTION */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-900">
              <Award className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900">Strategic Objectives</h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-1">
            {OBJECTIVES.map((objective, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 transition-all hover:border-slate-200 hover:bg-slate-50"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-900 text-xs font-bold text-white shadow-sm">
                  {i + 1}
                </span>
                <p className="text-base font-medium leading-relaxed text-slate-700">
                  {objective}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="mt-20">
          <div className="text-center space-y-3">
            <span className="inline-block rounded-full bg-slate-200/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
              Leadership & Faculty
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Meet the CECA Team</h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500">
              Click on any team member card to view their complete background, contact information, and institutional role.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {/* Executive Director Card */}
            {director && (
              <div className="mx-auto max-w-2xl">
                <div
                  onClick={() => setSelectedMember(director)}
                  className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl md:flex md:items-center md:gap-8 md:text-left"
                >
                  {director.photo ? (
                    <img
                      src={director.photo}
                      alt={director.name}
                      className="mx-auto h-28 w-28 shrink-0 rounded-2xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105 md:mx-0"
                    />
                  ) : (
                    <div className="mx-auto flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-blue-900 text-white shadow-md md:mx-0">
                      <User className="h-12 w-12 stroke-[1.5]" />
                    </div>
                  )}
                  <div className="mt-6 md:mt-0 space-y-2.5 flex-1">
                   
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                      {director.name}
                    </h3>
                    <p className="text-sm font-medium text-slate-600">{director.role}</p>
                    <p className="text-xs text-blue-600 font-semibold pt-1 flex items-center justify-center md:justify-start gap-1">
                      Click to view full bio <ExternalLink className="w-3 h-3" />
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Main Coordinators Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mainStaff.map((member) => (
                <div
                  key={member.name}
                  onClick={() => setSelectedMember(member)}
                  className="group cursor-pointer flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="h-14 w-14 rounded-2xl object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
                          <User className="h-7 w-7 stroke-[1.5]" />
                        </div>
                      )}
                      <span className={`rounded-lg border px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase ${getBadgeClasses(member.role)}`}>
                        {getBadge(member.role)}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold leading-snug text-slate-900 group-hover:text-blue-900 transition-colors">
                        {member.name}
                      </h4>
                      <p className="mt-1.5 text-xs font-medium leading-relaxed text-slate-500">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span>USL Tuguegarao</span>
                    <span className="text-blue-600 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View profile &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary Staff Row */}
            {secondaryStaff.length > 0 && (
              <div className="flex justify-center pt-2">
                {secondaryStaff.map((member) => (
                  <div
                    key={member.name}
                    onClick={() => setSelectedMember(member)}
                    className="group cursor-pointer w-full max-w-md rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                  >
                    <div className="flex items-center gap-5">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="h-14 w-14 rounded-2xl object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-600">
                          <User className="h-7 w-7 stroke-[1.5]" />
                        </div>
                      )}
                      <div className="flex-1">
                        <span className={`inline-block mb-1 rounded-lg border px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase ${getBadgeClasses(member.role)}`}>
                          {getBadge(member.role)}
                        </span>
                        <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                          {member.name}
                        </h4>
                        <p className="text-xs text-slate-500">{member.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DETAILED FACULTY MODAL POPUP */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300">
          <div
            className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 transform animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Banner */}
            <div className="h-28 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 p-6 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="h-8 w-8 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content Container */}
            <div className="px-8 pb-8 pt-0 -mt-12 max-h-[85vh] overflow-y-auto">
              {/* Profile Image & Name */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5">
                {selectedMember.photo ? (
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="h-24 w-24 rounded-2xl object-cover ring-4 ring-white shadow-lg bg-white"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-slate-900 text-white ring-4 ring-white shadow-lg">
                    <User className="h-10 w-10 stroke-[1.5]" />
                  </div>
                )}
                <div className="text-center sm:text-left mt-4 sm:mt-0">
                  <h3 className="text-xl font-bold text-slate-900">{selectedMember.name}</h3>
                  <p className="text-xs font-semibold text-blue-900">{selectedMember.role}</p>
                </div>
              </div>

              {/* Bio & Details Grid */}
              <div className="mt-6 space-y-5">
                {/* Department & Experience Pill Group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 border border-slate-100">
                    <Briefcase className="h-4 w-4 text-blue-900 shrink-0" />
                    <div>
                      <p className="text-slate-400 font-medium">Department</p>
                      <p className="font-semibold text-slate-700 truncate">{selectedMember.department || "USL CECA"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 border border-slate-100">
                    <Award className="h-4 w-4 text-emerald-600 shrink-0" />
                    <div>
                      <p className="text-slate-400 font-medium">Experience</p>
                      <p className="font-semibold text-slate-700">{selectedMember.yearsOfService || "Faculty Member"}</p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                {selectedMember.education && (
                  <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-3.5 border border-slate-100 text-xs">
                    <GraduationCap className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-400 font-medium">Educational Background</p>
                      <p className="font-semibold text-slate-800">{selectedMember.education}</p>
                    </div>
                  </div>
                )}

                {/* Personal Bio */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">About & Responsibilities</h4>
                  <p className="text-sm leading-relaxed text-slate-600 bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                    {selectedMember.bio || "Dedicated faculty coordinator promoting active community participation and academic excellence at the University of Saint Louis."}
                  </p>
                </div>

                {/* Social & Contact Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  {selectedMember.email && (
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-900 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-800 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                      Email Faculty
                    </a>
                  )}
                  {selectedMember.facebook && (
                    <a
                      href={selectedMember.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                      Facebook Profile
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}