import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPokemon: 0,
            filteredType: 'All',
        }
    }

    nextPoke = () => {
        this.setState((estadoAnterior, props) => ({
            currentPokemon: ((estadoAnterior.currentPokemon + 1) < (this.filterPoke().length))? estadoAnterior.currentPokemon + 1 : 0,
        }))
    }

    setType = (type) => {
        this.setState({
            currentPokemon: 0,
            filteredType: type
        })
        console.log(this.state)
    }

    filterPoke = () => {
        const { pokemons } = this.props;
        return pokemons.filter(pokemon => {
            if (this.state.filteredType === 'All') return true;
            return pokemon.type === this.state.filteredType;
        })
       
    }

    getAllTypes = () => {
        const { pokemons } = this.props;
        return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
    }

    render() {
        const filteredPokemons = this.filterPoke();
        const allTypes = this.getAllTypes();
        const disabled = filteredPokemons.length === 1 ? true : false;
        return (
            <div className="pokedex">
                <Pokemon key={filteredPokemons[this.state.currentPokemon].id} pokemon = {filteredPokemons[this.state.currentPokemon]}/>
                <div className="buttons">

                    {allTypes.map(type => (
                        <button className="button" onClick={() => this.setType(type)} key={type}>{type}</button>
                    ))}
                    <button className="button" onClick={() => this.setType('All')}>All</button>
                </div>
                <button className="button" disabled={disabled} onClick={this.nextPoke}>Próximo pokemon</button>
            </div>
        );
    }
}

export default Pokedex;