const baseUrl = import.meta.env.VITE_BASE_URL;

export const gttPosts=async ()=>await fetch(`${baseUrl}/posts`).then(res=>res.json());