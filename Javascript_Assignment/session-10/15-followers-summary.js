const getFollowersSummary = (...followers) => {
    let total = followers.reduce(
        (sum, count) => sum + count,
        0
    );

    return `Total followers: ${total}`;
};

console.log(getFollowersSummary(400, 500, 300));