let a=[1,2,3,4,5]
console.log(a);
console.log("maximum value  of array is "+Math.max(...a));
console.log("minimum value  of array is "+Math.min(...a));
sum=0
for(i=0; i<a.length;i++)
{
    sum+=i;
}
console.log("sum of the array numbers is "+sum);
let avg=sum/a.length;
console.log("average value  of array is "+avg);
// i=0
// sum=0
// for (i in a )
// { 
    // sum+=i
// }
// console.losg(sum);