import pages from "../data/pages";

export function getAllPagesIds() {
  return Object.keys(pages).map((key) => ({
    params: {
      id: key,
    },
  }));
}
