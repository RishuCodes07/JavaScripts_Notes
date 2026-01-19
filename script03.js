//closures

 let close =function(){
    let counter =4;
    return function(){
        counter++;
        return counter;
    }
 }

 let closure= close();
 console.log(closure())
 let change = function(){
    console.log('Find the status')
 }
 console.log(change())