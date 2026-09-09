import {
  HandCoins,
  ShieldAlert,
  Users,
  Church,
  HeartPulse,
  Scale,
  Sparkles,
  Accessibility,
  type LucideIcon,
} from "lucide-react";

interface Advocacy {
  title: string;
  school: string;
  icon: LucideIcon;
}

const ADVOCACIES: Advocacy[] = [
  {
    title: "Poverty Alleviation",
    school: "School of Accountancy, Business & Hospitality",
    icon: HandCoins,
  },
  {
    title: "Disaster Response and Risk Reduction Management",
    school: "School of Architecture, Computing, and Engineering",
    icon: ShieldAlert,
  },
  {
    title: "Civic Engagement and Indigenous Peoples Development",
    school: "School of Education, Criminology, Arts, and Psychology",
    icon: Users,
  },
  {
    title: "Faith Formation and Religious Dialogue",
    school: "Christian Faith Education",
    icon: Church,
  },
  {
    title: "Nutrition and Health Development",
    school: "School of Health and Allied Sciences",
    icon: HeartPulse,
  },
  {
    title: "Justice, Peace, and Integrity of Creation",
    school: "Basic Education School",
    icon: Scale,
  },
  {
    title: "Youth Empowerment",
    school: "Junior and Senior High School",
    icon: Sparkles,
  },
  {
    title: "Gender and Development",
    school: "Non-Teaching Personnel & School of Advanced Studies",
    icon: Accessibility,
  },
];

export default function AdvocaciesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Page header */}
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-usl">
          Advocacies
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Our CICM Advocacies
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-500">
          Eight advocacies guide our community engagement programs, each
          championed by a school within the university.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ADVOCACIES.map((advocacy) => {
          const Icon = advocacy.icon;
          return (
            <div
              key={advocacy.title}
              className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:border-usl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-usl-light text-usl">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-snug text-slate-900">
                  {advocacy.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {advocacy.school}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}