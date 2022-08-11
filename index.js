// Code your solution in this file!
function distanceFromHqInBlocks(x) {
    let y = (x - 42)
    y = Math.abs(y);
    return y;
}

function distanceFromHqInFeet(y) {
    return (distanceFromHqInBlocks(y) * 264);
}
function distanceTravelledInFeet(s, d) {
    return Math.abs(d - s) * 264;
}
function calculatesFarePrice(start, destination) {
    let y = distanceTravelledInFeet(start, destination)
    if (y <= 400) {

    }
}