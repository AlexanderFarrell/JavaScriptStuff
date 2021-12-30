function Random(min, max) {
    return (Math.random() * (max - min)) + min;
}

function RandomInt(min, max) {
    return Math.floor(Random(min, max))
}

function RandomCoin() {
    return (Math.random() > 0.5)
}