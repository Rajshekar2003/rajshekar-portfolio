"use client";

import { useEffect } from "react";

export default function ConsoleSignature() {
  useEffect(() => {
    console.log(
      "%c Rajshekar RC ",
      "background:#080808;color:#f5f0e8;font-size:20px;font-style:italic;padding:8px 16px;border:1px solid #333;"
    );
    console.log(
      "%c AI Engineer · Full Stack Developer · GenAI ",
      "color:#888;font-size:12px;letter-spacing:0.1em;"
    );
    console.log(
      "%c rajshekar.r.c2003@gmail.com  |  github.com/Rajshekar2003 ",
      "color:#555;font-size:11px;"
    );
    console.log(
      "%c Built with Next.js · Deployed on Vercel ",
      "color:#444;font-size:10px;"
    );
  }, []);

  return null;
}
