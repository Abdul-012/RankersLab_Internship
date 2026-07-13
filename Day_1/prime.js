let no = 4;
let isPrime = true;

for (let i = 2; i < no; i++) 
    {
    if (no % i == 0) 
        {
        console.log("Not Prime");
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime No");
}