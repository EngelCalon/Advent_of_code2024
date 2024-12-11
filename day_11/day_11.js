var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var input = "2 72 8949 0 981038 86311 246 7636740";
var splittedInput = input.split(" ");
var stoneTransformation = function (stone) {
    stone = stone.toString();
    if (stone === "0") {
        return ["1"];
    }
    if (stone.length % 2 === 0) {
        var firstHalf = stone.substring(0, stone.length / 2);
        var secondHalf = stone.substring(stone.length / 2);
        return [Number(firstHalf).toString(), Number(secondHalf).toString()];
    }
    return [(Number(stone) * 2024).toString()];
};
var lineTransformation = function (stoneLine) {
    return stoneLine.reduce(function (acc, stone) {
        var transformedStone = stoneTransformation(stone);
        acc = __spreadArray(__spreadArray([], acc, true), transformedStone, true);
        return acc;
    }, []);
};
var stoneLine = splittedInput;
for (var index = 0; index < 25; index++) {
    stoneLine = lineTransformation(stoneLine);
}
console.log(stoneLine.length);
