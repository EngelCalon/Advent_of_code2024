const input = "2 72 8949 0 981038 86311 246 7636740"
const splittedInput = input.split(" ")


const stoneTransformation = (stone: string): string[] => {
    stone = stone.toString()
    if (stone === "0"){
        return ["1"]
    }
    if(stone.length % 2 === 0){
        const firstHalf = stone.substring(0, stone.length/2)
        const secondHalf = stone.substring(stone.length/2)
        return [Number(firstHalf).toString(), Number(secondHalf).toString()]
    }
    return [(Number(stone)*2024).toString()]
}

const lineTransformation = (stoneLine: string[]): string[] => {
    return stoneLine.reduce((acc, stone) => {
        const transformedStone = stoneTransformation(stone)
        acc = [...acc, ...transformedStone]
        return acc
    }, [] as string[])
    
}
let stoneLine = splittedInput
for(let index:number = 0; index<25;  index++){
    stoneLine = lineTransformation(stoneLine)
}
console.log(stoneLine.length)
