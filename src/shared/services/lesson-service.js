export const baseHeaders = new Headers({
  "Authorization": `Bearer ${process.env.REACT_APP_EGGHEAD_JWT}`,
  "Content-Type": "application/json"
});

export function fetchLessons(page=1, size=5) {
  return fetch(`${process.env.REACT_APP_EGGHEAD_BASE_URL}/lessons?size=${size}&page=${page}`, {
    baseHeaders
  })
}