// Code your solution in this file!
const distanceFromHqInBlocks = (blocks) => {
    return Math.abs(blocks - 42)
}

// const distanceFromHqInFeet = (blocks) => {
//     return Math.abs(blocks - 42)*264;
// }

const distanceFromHqInFeet = (blocks) => {
   let dist = distanceFromHqInBlocks(blocks);
   return dist*264
}

const distanceTravelledInFeet = (start, destination) => {
    return Math.abs(destination - start) * 264
}

// const calculatesFarePrice = (start, destination) => {
//     let dist = distanceTravelledInFeet(start, destination)
//     if (dist < 400) {
//         return 0
//     }
    
//     else if (dist > 400 && dist < 2000) {
//         return ((dist-400)*0.02)
//     }

//     else if (dist > 2000 && dist < 2500) {
//         return 25
//     }
//     else return "cannot travel that far"

    const calculatesFarePrice = (start, destination) => {
        let dist = distanceTravelledInFeet(start, destination)
        switch (true) {
            case dist < 400:
                return 0
            case dist > 400 && dist < 2000:
                return (dist-400)*0.02
            case dist > 2000 && dist < 2500:
                return 25
            default:
                return "cannot travel that far"
        }
}