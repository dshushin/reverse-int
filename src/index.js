module.exports = function reverse (num) {
    return Math.abs(num).toString().split("").reverse().join("");
}
