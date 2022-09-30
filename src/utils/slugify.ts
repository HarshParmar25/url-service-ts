export function slugify(str: string): string {
  str = str.replace(/[^a-zA-Z0-9]/g, " ");
  return str.replace(/\s+/g, "-").toLowerCase();
}

function slugToName(str: string): string {
  str = str.replace(/(?<=\b)\w/g, (match) => match.toUpperCase());
  return str.replace(/-/g, " ");
}
