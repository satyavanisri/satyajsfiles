function movie(fav,duar,star) {
    // console.log(this);
    
    this.favmovie=fav;
    this.duaration=duar;
    this.stars=star;
    }
    


var obj= new movie("Sarrainodu","3 hours",['Allu Arjun','katherin','Rakul']);
 // console.log(obj.fav);
//  console.log(obj instanceof movie );
 console.log(" My favorite movie is "+obj.favmovie+" lasts for "+obj.duaration+"and stars are "+obj.stars+"");
 var obj1= new movie("Mahanati","3 hours",['Dulkar Salman','Keerthi Suresh','Samantha','Vijay Devarkonda']);
 console.log(" My 2nd favorite movie is "+obj1.favmovie+" lasts for "+obj1.duaration+"and stars are "+obj1.stars+"");

