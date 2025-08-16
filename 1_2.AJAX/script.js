'use strict';

const inputUAH = document.querySelector('#uah');
const inputUSD = document.querySelector('#usd');


inputUAH.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    // request.open(method, url, async, login, password);
    request.open('GET', 'current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('load', () => {
        if(request.status === 200){
            const data = JSON.parse(request.response);
            inputUSD.value = (+inputUAH.value / data.current.usd).toFixed(2);
        }else{
           inputUSD.value = 'Что то пошло не так'; 
        }
    });

    // status - method that shows status of the request
    // statusText - method that shows status of the request in text
    // response - method that gives the response of the request
    // readyState - method that shows current state of the response


});