let playlists = [
    {
        name: "Top Hits",
        creator: "Spotify",
        numberOfSongs: 50
    },
    {
        name: "Gym Beats",
        creator: "Rahul",
        numberOfSongs: 40
    }
];

playlists.push({
    name: "Lo-Fi Mix",
    creator: "Naitik",
    numberOfSongs: 25,
    genre: "Lo-Fi"
});

console.log("After Push:");
console.log(playlists);

playlists.pop();

console.log("After Pop:");
console.log(playlists);