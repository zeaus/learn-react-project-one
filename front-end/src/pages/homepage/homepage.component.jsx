import React from 'react';

import { SearchBar } from '../../components/searchbar/searchbar.component';
import { CardContainer } from '../../components/card-container/card-container.component';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            searchText: '',
            monsters: [
                {
                    name: "Zombie",
                    id: "_1"
                },
                {
                    name: "Dracula",
                    id: "_2"
                },
                {
                    name: "Mummy",
                    id: "_3"
                }
            ],
            counter: 1
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(
                users => this.setState(
                    { monsters: [...this.state.monsters, ...users] }
                )
            );
    }

    handleChange = (e) => {
        this.setState({ searchText: e.target.value }, () => {
            // console.log(this.state.searchText);
        })
    }

    increment = () => {
        this.setState((prevState, prevProps) => {
            return { counter: prevState.counter + prevProps.incrementor }
        })

    }

    render() {
        const filteredMonsters = this.state.monsters.filter(mons => mons.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
        return (
            <div>
                {this.state.counter}
                <button onClick={this.increment}>
                    Counter
                    </button>
                <h1>Hello World</h1>
                <CardContainer filteredMonsters={filteredMonsters} />
                <SearchBar type="search"
                    placeholder="search monsters"
                    handleChange={this.handleChange} />
            </div>

        )
    }
}