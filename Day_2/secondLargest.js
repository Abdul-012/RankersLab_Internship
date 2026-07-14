 
 function secondLargest(arr) 
 {
    let largest =-Infinity;
    let slargest=-Infinity;

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]>largest)
        {
            slargest=largest;
            largest=arr[i];
        }
        else if(arr[i]>slargest && arr[i]!=largest)
        {
            slargest=arr[i];
        }
    }
    return slargest;
}
let result=secondLargest([10,20,30,40,50,60,70,80,90,100]);

console.log(result);