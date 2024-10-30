let arr = [1,2,3,4,5];
const arrayAverage = (arr)=>{
    let total= 0;
    for( let no of arr){
        total+= no;
    }
    return total/arr.length;
};
console.log(arrayAverage(arr));