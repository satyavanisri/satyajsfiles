var fs=require("fs");//to include the filesystem module we use  the require() method
 var csvfile='./datafile.csv';
 console.log("process is started");
 fs.readFile(csvfile,'utf8', function read(error,data)//which is used to read the data from files
 {
     if(error)
      throw console.log("error occurs",error);
     
var lines=data.split("\n");
var result=lines;
var result=[];
console.log(lines);

var headers=lines[0].split(",");
for(var i=1;i<lines.length;i++)
{
    var obj=[];
    var currrentline=lines[i].split(",");
    for(j=0;j<headers.lenght;j++)
    {
        obj[headers[j]]=currentline[j];

    }
}result.push(obj);
//console.log(result);//here our  resulted json object is present
var json=JSON.stringify(lines);

//fs.writeFile('datafilenew.json',json,);
var path="E:\\JS PROGRAMS\\datafilenew.json";
fs.writeFile(path,json,function(error)
{
    if(error)
    console.log("error in  writing the data "+error.message);
    else
    console.log("successful write into file"+path);
});
//fs.createWriteStream();

 });
 console.log('it seems process completed!!!!!!!!');
 
 