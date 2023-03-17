// This function returns a random number between lowerBound and upperBound
export function randomNumberGenerator(lowerBound, upperBound) {
    return Math.floor(
        Math.random() * (upperBound - lowerBound + 1) + lowerBound
    );
}
