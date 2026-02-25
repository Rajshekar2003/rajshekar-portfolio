// "use client";

// import { useEffect, useRef, useState } from "react";

// export default function CustomCursor() {
//   const cursorRef = useRef<HTMLDivElement>(null);
//   const [hovering, setHovering] = useState(false);

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       if (!cursorRef.current) return;

//       cursorRef.current.style.transform =
//         `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
//     };

//     const handleMouseOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (target.closest("a, button")) {
//         setHovering(true);
//       } else {
//         setHovering(false);
//       }
//     };

//     window.addEventListener("mousemove", moveCursor);
//     window.addEventListener("mouseover", handleMouseOver);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       window.removeEventListener("mouseover", handleMouseOver);
//     };
//   }, []);

//   return (
//     <div
//       ref={cursorRef}
//       className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference"
//     >
//       <div
//         className={`rounded-full bg-white transition-all duration-200 ${
//           hovering ? "w-10 h-10 opacity-40" : "w-4 h-4"
//         }`}
//       />
//     </div>
//   );
// }