'use strict';

try{
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log('finally');
}

console.log('Still normal');

try{
    document.querySelector('.active').addEventListener('click', () => {
        console.log('Click');
    });
}catch(error){
    
}

console.log('It works.....');

