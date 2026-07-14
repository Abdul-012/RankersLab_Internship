let arr = [40,50,90,30];

let first = -Infinity;
let second = -Infinity;
let third = -Infinity;

for (let i = 0; i < arr.length; i++) 
    {
    if (arr[i] > first) 
        {
        third = second;
        second = first;
        first = arr[i];
    } 
    else if (arr[i] > second && arr[i] !== first) 
        {
        third = second;
        second = arr[i];
    } 
    else if (arr[i] > third && arr[i] !== second && arr[i] !== first) 
        {
        third = arr[i];
    }
}

console.log("Third Largest:", third);