export const headers = new Headers({
  "Authorization": `Bearer ${process.env.REACT_APP_EGGHEAD_JWT}`,
  "Content-Type": "application/json"
});
