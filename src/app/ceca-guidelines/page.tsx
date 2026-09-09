import {
  FileText,
  Paperclip,
  CalendarClock,
  ClipboardCheck,
  Send,
  type LucideIcon,
} from "lucide-react";

interface Step {
  title: string;
  description: string;
  icon: LucideIcon;
}

const OUTREACH_STEPS: Step[] = [
  {
    title: "Secure CECA Forms",
    description:
      "Prepare FM-CEC-001 (Application), FM-CEC-002 (Participation Report), FM-CEC-004 (Terminal Report), and FM-CEC-005 (Reflection Report).",
    icon: FileText,
  },
  {
    title: "Attach Requirements",
    description:
      "Attach the VP/University President-approved letter request, parents' waiver, and Out-of-Campus Checklist to FM-CEC-001.",
    icon: Paperclip,
  },
  {
    title: "File & Follow Up",
    description:
      "Submit at least 1 week before the activity, then follow up at the CECA Office 2–3 days before its actual conduct.",
    icon: CalendarClock,
  },
  {
    title: "Conduct & Evaluate",
    description:
      "After the activity, complete the Terminal Report, Reflection Report, and Evaluation Guides for Louisians (FM-CEC-008) and Clients (FM-CEC-009).",
    icon: ClipboardCheck,
  },
  {
    title: "Submit All Requirements",
    description:
      "Submit the Narrative Report and softcopy of evaluation tallies within 10 working days, or the activity remains pending.",
    icon: Send,
  },
];

const SERVICE_LEARNING_STEPS: Step[] = [
  {
    title: "Secure CECA Forms",
    description:
      "Prepare FM-CEC-002 (Application), with the Student/Personal Waiver and the relevant Subject Syllabus provision attached.",
    icon: FileText,
  },
  {
    title: "Attach Requirements",
    description:
      "Attach the letter request, Program Flow, syllabus page, parents' waiver, and Out-of-Campus Checklist.",
    icon: Paperclip,
  },
  {
    title: "File & Follow Up",
    description:
      "Submit at least 1 week before the activity, then follow up at the CECA Office 2–3 days before its actual conduct.",
    icon: CalendarClock,
  },
  {
    title: "Conduct & Evaluate",
    description:
      "After the activity, complete the Terminal Report, Reflection Report, and Evaluation Guides for Students (FM-CEC-006) and Clients (FM-CEC-007).",
    icon: ClipboardCheck,
  },
  {
    title: "Submit All Requirements",
    description:
      "Submit Forms 1–4, both Evaluation Forms, evaluation tallies, and the Documentation Report within 10 working days.",
    icon: Send,
  },
];

const EXTENSION_STEPS: Step[] = [
  {
    title: "Secure CECA Forms",
    description:
      "Prepare FM-CEC-031 (Application), with the Student/Personal Waiver and relevant Subject Syllabus provision attached.",
    icon: FileText,
  },
  {
    title: "Attach Requirements",
    description:
      "Attach the VP/University President-approved letter request, parents' and/or personal waiver, and Out-of-Campus Checklist.",
    icon: Paperclip,
  },
  {
    title: "File & Follow Up",
    description:
      "Submit at least 1 week before the activity, then follow up at the CECA Office 2–3 days before its actual conduct.",
    icon: CalendarClock,
  },
  {
    title: "Conduct & Evaluate",
    description:
      "After the activity, complete the Terminal Report, Reflection Report, and Evaluation Guides for Louisians (FM-CEC-008) and Clients (FM-CEC-009).",
    icon: ClipboardCheck,
  },
  {
    title: "Submit All Requirements",
    description:
      "Submit the softcopy of evaluation tallies and Narrative Report Template to complete the activity record.",
    icon: Send,
  },
];

function StepperList({ steps }: { steps: Step[] }) {
  return (
    <ol className="relative">
      {steps.map((step, i) => {
        const Icon = step.icon;
        const isLast = i === steps.length - 1;
        return (
          <li key={step.title} className="relative flex gap-6 pb-10 last:pb-0">
            {/* Connector line */}
            {!isLast && (
              <span
                className="absolute left-[21px] top-11 h-[calc(100%-2.75rem)] w-px bg-gray-200"
                aria-hidden="true"
              />
            )}

            {/* Icon node */}
            <span className="relative z-10 flex h-11 w-11 flex-none items-center justify-center rounded-full border border-gray-200 bg-white text-usl">
              <Icon size={18} />
            </span>

            {/* Content */}
            <div className="pt-2">
              <p className="text-xs font-medium uppercase tracking-wider text-usl">
                Step {i + 1}
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function ServiceLearningPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      {/* Page header */}
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-usl">
          Service Learning, Outreach, Extension Programs
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          CECA Guidelines
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-500">
          A step-by-step overview of reserving and implementing each CECA
          program, from securing forms to submitting post-activity
          requirements.
        </p>
      </div>

      {/* Three-column steppers */}
      <div className="mt-16 grid gap-16 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Outreach Program
          </h2>
          <div className="mt-8">
            <StepperList steps={OUTREACH_STEPS} />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Service-Learning Program
          </h2>
          <div className="mt-8">
            <StepperList steps={SERVICE_LEARNING_STEPS} />
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Extension Program
          </h2>
          <div className="mt-8">
            <StepperList steps={EXTENSION_STEPS} />
          </div>
        </div>
      </div>
    </div>
  );
}