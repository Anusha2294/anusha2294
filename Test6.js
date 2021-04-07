function demoAdd(a,b) {
    return a+b
}

let res = demoAdd(2,3);
console.log(res);

console.log(demoAdd(20,30));

function demoAddAll(n) {
    let out = 0;
    for(let i=0;i<n.length;i++){
        out=out+n[i];
    }
    return out;
}

let arr=[10,20,30,40,50];
console.log(demoAddAll(arr));
console.log(demoAddAll([10,20,30,40]));

function demoAddAll2(...n) { //rest parameter : accepts any number of values
    let out = 0;
    for(let i=0;i<n.length;i++){
        out=out+n[i];
    }
    return out;
}

console.log(demoAddAll2(2,4,1,5,6));

console.log(demoAddAll2(...arr)); //spread parameter
