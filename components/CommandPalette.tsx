"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const EMAIL = "rajshekar.r.c2003@gmail.com";

type Item = { label: string; icon: string; action: () => void };
type Group = { label: string; items: Item[] };

function smoothScrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [focusedIdx, setFocusedIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const toastRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setFocusedIdx(0);
  }, []);

  function showToast() {
    const t = toastRef.current;
    if (!t) return;
    t.classList.add("show");
    setTimeout(() => t.classList.remove("show"), 1800);
  }

  const groups: Group[] = [
    {
      label: "Navigate",
      items: [
        { label: "Home",           icon: "◆", action: () => smoothScrollTo("home") },
        { label: "About",          icon: "◆", action: () => smoothScrollTo("about") },
        { label: "Skills",         icon: "◆", action: () => smoothScrollTo("skills") },
        { label: "Education",      icon: "◆", action: () => smoothScrollTo("education") },
        { label: "Experience",     icon: "◆", action: () => smoothScrollTo("experience") },
        { label: "Projects",       icon: "◆", action: () => smoothScrollTo("projects") },
        { label: "Certifications", icon: "◆", action: () => smoothScrollTo("certs") },
        { label: "Contact",        icon: "◆", action: () => smoothScrollTo("contact") },
      ],
    },
    {
      label: "Actions",
      items: [
        {
          label: "Copy email",
          icon: "@",
          action: () => { navigator.clipboard.writeText(EMAIL); showToast(); },
        },
        {
          label: "Open GitHub",
          icon: "↗",
          action: () => window.open("https://github.com/Rajshekar2003", "_blank"),
        },
        {
          label: "Open LinkedIn",
          icon: "↗",
          action: () => window.open("https://www.linkedin.com/in/rajshekarrc", "_blank"),
        },
        {
          label: "Download Resume",
          icon: "↗",
          action: () => window.open("/resume", "_blank"),
        },
      ],
    },
  ];

  const q = query.toLowerCase();
  const filteredGroups = groups
    .map((g) => ({ ...g, items: g.items.filter((item) => item.label.toLowerCase().includes(q)) }))
    .filter((g) => g.items.length > 0);

  const flatItems = filteredGroups.flatMap((g) => g.items);

  // Keep refs current every render so keyboard handler never has stale closures
  const openRef = useRef(false);
  const flatItemsRef = useRef<Item[]>([]);
  const focusedIdxRef = useRef(0);
  openRef.current = open;
  flatItemsRef.current = flatItems;
  focusedIdxRef.current = focusedIdx;

  // Listen for open-cmdk event dispatched by Navbar
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-cmdk", handler);
    return () => window.removeEventListener("open-cmdk", handler);
  }, []);

  // Auto-focus + reset when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setFocusedIdx(0);
    }
  }, [open]);

  // Reset focused index when query changes
  useEffect(() => { setFocusedIdx(0); }, [query]);

  // Global keyboard handler — reads from refs, never stale
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
        return;
      }
      if (!openRef.current) return;
      if (e.key === "Escape") { close(); return; }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusedIdx((i) => Math.min(i + 1, flatItemsRef.current.length - 1));
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setFocusedIdx((i) => Math.max(i - 1, 0));
        return;
      }
      if (e.key === "Enter") {
        const item = flatItemsRef.current[focusedIdxRef.current];
        if (item) { e.preventDefault(); close(); item.action(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  let itemIdx = 0;

  return (
    <>
      <div
        className={`cmdk-backdrop${open ? " open" : ""}`}
        onMouseDown={(e) => { if (e.target === e.currentTarget) close(); }}
      >
        <div className="cmdk-modal" onMouseDown={(e) => e.stopPropagation()}>
          <input
            ref={inputRef}
            className="cmdk-input"
            type="text"
            placeholder="Search or jump to..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="cmdk-list">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <div key={group.label}>
                  <div className="cmdk-group-label">{group.label}</div>
                  {group.items.map((item) => {
                    const idx = itemIdx++;
                    return (
                      <div
                        key={item.label}
                        className={`cmdk-item${focusedIdx === idx ? " focused" : ""}`}
                        onMouseEnter={() => setFocusedIdx(idx)}
                        onMouseDown={() => { close(); item.action(); }}
                        data-cursor="hover"
                      >
                        <span className="ic">{item.icon}</span>
                        {item.label}
                      </div>
                    );
                  })}
                </div>
              ))
            ) : (
              <div className="cmdk-empty">
                No results for &ldquo;{query}&rdquo;
              </div>
            )}
          </div>

          <div className="cmdk-footer">
            <span>⏎ select</span>
            <span>↑↓ navigate</span>
            <span>ESC close</span>
          </div>
        </div>
      </div>

      <div ref={toastRef} className="toast">Copied to clipboard</div>
    </>
  );
}
