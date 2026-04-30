"use client";
import { useEffect, useState } from "react";
export function useThrottledScroll() { const [y, setY] = useState(0); useEffect(() => { let ticking = false; const onScroll = () => { if (!ticking) { window.requestAnimationFrame(() => { setY(window.scrollY); ticking = false; }); ticking = true; } }; window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []); return y; }
