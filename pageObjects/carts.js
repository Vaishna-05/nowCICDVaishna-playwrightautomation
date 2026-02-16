function missingNum(arr)
{
    let n=arr.length+1;
    let e=(n*(n+1))/2;

    let actual =0;
    for(let char of arr)
    {
        actual+=char;
    }
    return e-actual




}
console.log(missingNum([1, 2, 4, 5]))