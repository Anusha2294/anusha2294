
function demoAddA11(n)
{
    let (out = 0);
    for (let i=0; i<n.length;i++)
    {
        out = out+n[i];
    }
    return out;
}
let arr=[10,20,30,40,50];
console.log(demoAddA11(arr));
console.log(demoAddA11([10,20,30,40]));

function demoAddA112(...n)
{
    let out =0;
    for (let i=0; i<n.length;i++)
    {
        out= out+n[i];
    }
    return out;
}

console.log(demoAddA112(2,4,1,5,6));
console.log(demoAddA112(...arr));
