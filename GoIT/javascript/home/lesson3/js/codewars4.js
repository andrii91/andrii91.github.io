function lovefunc(flower1, flower2){
  if ((flower1 + flower2) % 2 !== 0) {
    return true;
  }else{
    return false;
  }
}

console.log(lovefunc(1,4));// true)
console.log(lovefunc(2,2));// false)
console.log(lovefunc(0,1));// true)
console.log(lovefunc(0,0));// false)