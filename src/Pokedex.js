import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPokemon: 0,
            filteredType: 'Fire',
        }
    }

    nextPoke = () => {
        this.setState((estadoAnterior, props) => ({
            currentPokemon: ((estadoAnterior.currentPokemon + 1) < (this.filterPoke().length))? estadoAnterior.currentPokemon + 1 : 0,
        }))
    }

    setType = (type) => {
        this.setState({
            filteredType: type
        })
        console.log(this.state)
    }

    filterPoke = () => {
        const { pokemons } = this.props;
        return pokemons.filter(pokemon => pokemon.type === this.state.filteredType)
    }


    render() {
        const filteredPokemons = this.filterPoke();
        return (
            <div className="pokedex">
                <Pokemon key={filteredPokemons[this.state.currentPokemon].id} pokemon = {filteredPokemons[this.state.currentPokemon]}/>
                <button onClick={this.nextPoke}>Próximo</button>
                <button onClick={() => this.setType('Psychic')}>Psychic</button>
                <button onClick={() => this.setType('Fire')}>Fire</button>
            </div>
        );
    }
}

export default Pokedex;