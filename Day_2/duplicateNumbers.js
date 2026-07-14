
function findDuplicates(arr) 
{
    let seen = new Set();

    for (let num of arr) 
    {
        seen.add(num);
    }
    return seen;
}

console.log(findDuplicates([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]));