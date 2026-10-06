import { CalendarDays } from "lucide-react";

const CALENDAR_ID = "81f99f28b34eedac95df12de0d4f2471a782571f5a357ed714818ff8b55dd7e1@group.calendar.google.com";
const EMBED_SRC = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(
  CALENDAR_ID
)}&mode=WEEK&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&showNav=1`;

export default function CalendarPage() {
  return (
    <div className="px-6 sm:px-8 md:px-10 lg:px-16 xl:px-28 py-10 md:py-20">
      <h1 className="flex items-center gap-2 font-serif text-2xl md:text-3xl font-bold mb-2 text-neutral-900">
        <CalendarDays size={24} style={{ color: "var(--accent-calendar)" }} />
        Calendar
      </h1>
      <div className="mb-6 h-[3px] w-10 rounded-full" style={{ backgroundColor: "var(--accent-calendar)" }} />

      <p className="text-sm md:text-base text-neutral-600 mb-6 leading-relaxed max-w-2xl">
        My live availability, synced from Google Calendar.
      </p>

      <div className="overflow-hidden rounded-xl border border-neutral-200">
        <iframe
          src={EMBED_SRC}
          title="Mahyar Fardinfar's availability calendar"
          className="h-[600px] w-full md:h-[650px]"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      <a
        href="https://calendar.google.com/calendar/u/0?cid=ODFmOTlmMjhiMzRlZWRhYzk1ZGYxMmRlMGQ0ZjI0NzFhNzgyNTcxZjVhMzU3ZWQ3MTQ4MThmZjhiNTVkZDdlMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-xs text-[#1d3557] hover:text-neutral-900 underline"
      >
        Open in Google Calendar
      </a>
    </div>
  );
}
