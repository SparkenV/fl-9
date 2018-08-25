/* function_1 */
function findType(argument){
    return typeof argument;
}

function forEach(arr, func){
    for(let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function map(array, func){
    let arr = [];
    forEach(array, element => arr.push(func(element)));
    return arr;
}

function filter(array, fn){
    let arr = [];
    forEach(array, element => {
        if(fn(element)) {
            arr.push(element);
        }
    });
    return arr;
}

function getAdultAppleLovers(info){
    return map(filter(info, element => element.age > 18 && element.favoriteFruit === 'apple'), element => element.name);
}

function keys(o){
    let arr = [];
    for(let key in o) {
        if(o.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
}

function values(o){
    let arr = [];
    for(let key in o) {
        if(o.hasOwnProperty(key)) {
            arr.push(o[key]);
        }
    }
    return arr;
}

function showFormattedDate(date){
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let output = `It is `+date.getDate()+` of `+ month[date.getMonth()]+`,`+ date.getFullYear();
    return output;  
} 