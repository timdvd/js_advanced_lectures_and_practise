'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '123',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
]

try{
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if(!blockObj.id) throw new SyntaxError(`No id has been placed in №${i + 1}`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);

    });
}catch(e){
    if(e.name === 'SyntaxError'){
        console.log(e.message);
    }else{
        throw e;
    }
}

const err = new Error('babababa');
console.log(err.name, err.message, err.stack);

const err1 = new SyntaxError('alalalalal');
console.log(err1.name, err1.message, err1.stack);