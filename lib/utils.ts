/**
 * A lightweight utility to filter and combine dynamic CSS class names.
 */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}
