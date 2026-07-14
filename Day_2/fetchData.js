async function fetchData(url) 
{
    try
    {
        const response = await fetch(url);
        let data = await response.json();
        console.log(data);
    }
    catch(error)
    {
        console.log("Error:", error);
    }
}
fetchData("https://jsonplaceholder.typicode.com/posts");