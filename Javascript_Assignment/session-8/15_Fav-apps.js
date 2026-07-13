let favApps = [
    { title: "Instagram", url: "https://instagram.com" },
    { title: "YouTube", url: "https://youtube.com" },
    { title: "WhatsApp", url: "https://whatsapp.com" },
    { title: "Spotify", url: "https://spotify.com" },
    { title: "LinkedIn", url: "https://linkedin.com" }
];

favApps.splice(2, 1, {
    title: "ChatGPT",
    url: "https://chatgpt.com"
});

console.log(favApps);