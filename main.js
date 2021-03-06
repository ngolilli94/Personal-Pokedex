class Pokemon {
    constructor(dexnum, name, sprite, hp, attack, defense, abilities) {
        this.dexnum = dexnum;
        this.name = name;
        this.sprite = sprite;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

class Trainer {
    //Pokemon container object is an array
    constructor(pokemonTeam) {
        this.pokemonTeam = [];
    }
    all() {
        return this.pokemonTeam;
    }
    get(name) {
        return this.pokemonTeam.find((element) => {
            return element.name == name;
        })
    }
    add(pokemonObject) {
        this.pokemonTeam.push(pokemonObject);
    }
}

let elle = new Trainer()

//Lapras PokeAPI Links:
//https://pokeapi-nycda.firebaseio.com/pokemon/131.json
// https://pokeapi.co/api/v2/pokemon/131/
axios.get("https://pokeapi.co/api/v2/pokemon/131/").then((response) => {
    let data = response.data;
    // console.log(data)
    // let abilitiesArray = data.abilities.length

    // for (let i = 0; i < abilitiesArray; i++) {
    //     let abilitiesName = data.abilities[i].ability.name
    //     console.log(abilitiesName)
    // }

    // console.log(abilitiesArray)

    let abilitiesList = []

    data.abilities.forEach(element => {
        let abilitiesName = element.ability.name;
        abilitiesList.push(abilitiesName);
    })
    
    let lapras = new Pokemon(
        data.id,
        data.name,
        data.sprites.front_default,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        abilitiesList

    )

    elle.add(lapras)
    // console.log(lapras)
})

console.log(elle)

//Latias PokeAPI Links:
//https://pokeapi-nycda.firebaseio.com/pokemon/380.json
//https://pokeapi.co/api/v2/pokemon/380/
axios.get("https://pokeapi.co/api/v2/pokemon/380/").then((response) => {
    let data = response.data;

    let abilitiesList = []

    data.abilities.forEach(element => {
        let abilitiesName = element.ability.name;
        abilitiesList.push(abilitiesName);
    })

    let latias = new Pokemon(
        data.id,
        data.name,
        data.sprites.front_default,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        abilitiesList,
    )

    elle.add(latias)
    // console.log(latias)
})


//Lucario PokeAPI Links:
// https://pokeapi-nycda.firebaseio.com/pokemon/448.json
//https://pokeapi.co/api/v2/pokemon/448/
axios.get("https://pokeapi.co/api/v2/pokemon/448/").then((response) => {
    let data = response.data;

    let abilitiesList = []

    data.abilities.forEach(element => {
        let abilitiesName = element.ability.name;
        abilitiesList.push(abilitiesName);
    })

    let lucario = new Pokemon(
        data.id,
        data.name,
        data.sprites.front_default,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
        abilitiesList,
    )
    elle.add(lucario)
    // console.log(lucario)
})

//Defining variables to push Information into modals
let showNum = document.getElementById('displayNum')
let showName = document.getElementById('displayName')
let showImg = document.getElementById('displayImage')
let showAbilities = document.getElementById('displayAbilities')
let showHP = document.getElementById('displayHP')
let showAtk = document.getElementById('displayAtk')
let showDef = document.getElementById('displayDef')


//defining each Pokeball for click event later & to link ea to specific Pkmn
let poke = document.getElementById('pokeball')
let dive = document.getElementById('diveBall')
let great = document.getElementById('greatBall')
let arr = elle.pokemonTeam

//map function + indexOf to correlate Pokeball to specific Pkmn b/c array doesn't always load in same order (depending on load order from API)
poke.addEventListener('click', () => {
    // console.log('*********')
    setup(arr.map(function(x) { return x.name;}).indexOf('latias'));
})

dive.addEventListener('click', () => {
    // console.log('++++++++++')
    setup(arr.map(function(x) { return x.name;}).indexOf('lapras'));
})

great.addEventListener('click', () => {
    // console.log('-----------')
    setup(arr.map(function(x) { return x.name;}).indexOf('lucario'));
})

//Actually getting info into modals
let setup = (i) => {
    // console.log('&&&&&&&&&&&&&');
    console.log(arr);
    showNum.innerHTML = "#" + arr[i].dexnum;
    showName.innerHTML = arr[i].name;
    showImg.src = arr[i].sprite;
    showAbilities.innerHTML = arr[i].abilities;
    showHP.innerHTML = "HP: " + arr[i].hp;
    showAtk.innerHTML = "Attack: " + arr[i].attack;
    showDef.innerHTML = "Defense: " + arr[i].defense;


}
