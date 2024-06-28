const https = require('https');

const printFiveMoves = (pokemonName) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    https.get(url, (res) => {
        let data = '';

        // A chunk of data has been received.
        res.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        res.on('end', () => {
            const pokemon = JSON.parse(data);
            const moves = pokemon.moves.map(({ move }) => move.name);
            console.log(moves.slice(0, 5));
        });

    }).on('error', (err) => {
        console.log('Error: ' + err.message);
    });
};

printFiveMoves('charmander');
