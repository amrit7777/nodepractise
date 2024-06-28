#!/usr/bin/env node


const printFiveMoves=async (pokemonName)=>{
    const response=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).catch((err)=>console.log(err))
    const pokemon =await response.json()
    const moves=pokemon.moves.map(({move})=>move.name)
    console.log(moves.slice(0,5))
}

printFiveMoves("charmander")