let playlists = [
    { name: "Top Hits", creator: "Spotify", numberOfSongs: 50 },
    { name: "Workout", creator: "Rahul", numberOfSongs: 40 },
    { name: "Chill", creator: "Naitik", numberOfSongs: 30 }
];

playlists.splice(1, 1, {
    name: "Party Mix",
    creator: "Amit",
    numberOfSongs: 45
});

console.log(playlists);