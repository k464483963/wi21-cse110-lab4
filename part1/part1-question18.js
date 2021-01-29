let statistics = {
    redCars:21,
    blueCars:45,
    greenCars:12,
    raceCars:5,
    blackCars:40,
    rareCars:2
};

function isOdd(v){
    if(v%2 == 0){
        return false;
    }
    else
        return true;
}

for(const prop in statistics){
    if(`${prop}`.startsWith('r')){
        console.log(`statistics.${prop}=${statistics[prop]}`);
    }
    else if(isOdd(`${statistics[prop]}`)){
        console.log(`statistics.${prop}=${statistics[prop]}`);
    }
}
