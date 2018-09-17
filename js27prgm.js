function assignGrade(score) {
    console.log("You got a "+score+" score");
    if(score>=85){
        console.log(" A grade ");
    }
    else if(score>=70 && score<=79)
    {
        console.log(" B grade ");
        
    }
    else if(score>=60 && score<=69)
    {
        console.log(" C grade ");
        
    }
    else if(score>=50 && score<=59)
    {
        console.log("D grade");
        
    }
    else if(score>=40 && score<=49)
    {
        console.log("D grade");
        
    }
    else{
        console.log("fail");
        
    }

}
assignGrade(87);
assignGrade(67);
assignGrade(30);