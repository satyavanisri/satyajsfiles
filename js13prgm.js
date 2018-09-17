let age=45
 let pati=1 , ali=1
//boolean(pati){
 //   return true;
//}

if(age > 10 && age <= 15)
{ 
    console.log("you are eligible for miniride");
}
else if(age>=16 && age <=  25 )
{
    console.log("you are eligible for roller coaster ");    
}
else if(age >=26 && age <=40 && (pati&&ali)==1)
{
    console.log("you are eligible for roller coaster ");

}
else
{
    console.log(" noone is eligible for ride ");
    
}