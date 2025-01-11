const baseUrl = import.meta.env.VITE_BASE_URL;

 export const gttUsers=async ()=>await fetch(`${baseUrl}/users`).then(res=>res.json());