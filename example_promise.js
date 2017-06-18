function getTemp(x,y)
{
  return new Promise(function(resolve, reject)
{
if(typeof(x)=='number' && typeof(y)=='number')
{
  resolve(x+y);
}
else {
  reject("not numbers");
}
});
}

getTemp(13,14).then(function(add){console.log("added value: "+add)},
function(error){
  console.log(error);
});

getTemp(13,'abc').then(function(add){console.log("added value: "+add)},
function(error){
  console.log(error);
});
