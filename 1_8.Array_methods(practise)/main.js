const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter((item) => item.rating >= 8);
}

function showListOfFilms(arr) {
    return arr.reduce((sum, current) => `${typeof(sum) === 'object' ? sum.name : sum}, ${current.name}`);
}

function setFilmsIds(arr) {
    return arr.map((film, id) => {
        film.id = id;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false);
}

checkFilms(tranformedArray);