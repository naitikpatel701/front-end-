function formatWelcomeMessage(userName, followers) {
    return `Hello ${userName}, you have ${followers} followers!`;
}

let result = formatWelcomeMessage("Naitik", 1200);

console.log(result);