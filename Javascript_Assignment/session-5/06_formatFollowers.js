const formatFollowers = (followers) => {

    if (followers >= 1000000) {
        return (followers / 1000000).toFixed(1) + "M";
    }

    if (followers >= 1000) {
        return (followers / 1000).toFixed(1) + "K";
    }

    return followers;
};

console.log(formatFollowers(800));
console.log(formatFollowers(1500));
console.log(formatFollowers(2500000));