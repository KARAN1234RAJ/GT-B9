function example1(x) {
  console.log(x);
}

var a = 10;
var b = null;

example1(a);

example1(b);


//Example2
function example(x){
     if(x){
         console.log('Inside If');
     }else{
         console.log('OutSide If');
     }
 }
 
 example(null);
 example(1);
example()
 
