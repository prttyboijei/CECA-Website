import { FolderOpen, ExternalLink, UploadCloud } from "lucide-react";

const DRIVE_FOLDER_URL =
"https://drive.google.com/drive/folders/1rsELayqdSwOzNJioiPQK7RXBEQKFJ4x0";

export default function RepositoryPage() {
return (
<div className="mx-auto max-w-6xl px-6 py-20">
{/* Page header */}
<div className="max-w-2xl">
<p className="text-sm font-medium uppercase tracking-wider text-usl">
Forms & Uploads
</p>
<h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
CECA Repository
</h1>
<p className="mt-4 text-base leading-relaxed text-slate-500">
This is the central hub for CECA forms, guidelines, and project
documentation. Browse existing reports and templates in our shared
Drive, or submit your project files using the form below.
</p>
</div>

{/* Drive link */}
<div className="mt-10 flex flex-col gap-6 rounded-lg border border-gray-200 bg-white p-8 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-start gap-4">
<span className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-usl-light text-usl">
<FolderOpen size={20} />
</span>
<div>
<h2 className="text-base font-semibold text-slate-900">
CECA Forms & Reports Drive
</h2>
<p className="mt-1 text-sm leading-relaxed text-slate-500">
Access official forms, templates, and past project reports.
</p>
</div>
</div>

<a
href={DRIVE_FOLDER_URL}
target="_blank"
rel="noopener noreferrer"
className="inline-flex flex-none items-center justify-center gap-2 rounded-md bg-usl px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-usl-dark"
>
Open Drive Folder
<ExternalLink size={16} />
</a>
</div>

{/* Submission section */}
<div className="mt-16 border-t border-gray-100 pt-16">
<div className="flex items-center gap-3">
<span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-usl-light text-usl">
<UploadCloud size={18} />
</span>
<h2 className="text-lg font-semibold text-slate-900">
Submit Project Files
</h2>
</div>
<p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
Fill out the form below to submit your project files, reports, or
documentation directly to CECA.
</p>

<div className="mt-8 overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
{/*
TODO: Replace the src below with your actual Google Form
"Embed HTML" iframe src URL, e.g.:
https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true
*/}
<iframe
src="https://docs.google.com/forms/d/e/PASTE_YOUR_FORM_ID_HERE/viewform?embedded=true"
width="100%"
height="800"
className="block border-0"
title="CECA Project Submission Form"
>
Loading form…
</iframe>
</div>
</div>
</div>
);
}
