var a=[];
var size =parseInt(prompt("enter the value "));
for(i=0;i<size;i++){
    a[i]=parseInt(prompt("enter the value"+(i+1)));
}
//document.write(a);
//var b=[];

var sum=0;
function add(){
    for(let i=0;i<a.length;i++){
       
       
              sum=sum+a[i]; 
             
    }
    
    return sum;
   
    
    
    
}
var result=(add(sum));
console.log(result);
document.write(result);