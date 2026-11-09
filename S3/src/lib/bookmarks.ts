import { useSyncExternalStore } from "react";

const KEY = "twu-bookmarks";
let state: string[] = [];
let loaded = false;
const subs = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try { state = JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { state = []; }
}
const EMPTY: string[] = [];

export function toggleBookmark(id: string) {
  load();
  state = state.includes(id) ? state.filter((x) => x !== id) : [...state, id];
  localStorage.setItem(KEY, JSON.stringify(state));
  subs.forEach((f) => f());
}

export function useBookmarks() {
  return useSyncExternalStore(
    (cb) => { subs.add(cb); load(); cb(); return () => subs.delete(cb); },
    () => state,
    () => EMPTY,
  );
}
