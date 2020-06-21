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
            ]
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


    render() {
        let filteredMonsters = this.state.monsters.filter(mons => mons.name.toLowerCase().includes(this.state.searchText.toLowerCase()));
        return (
            <div>
                <CardContainer filteredMonsters={filteredMonsters}/>
                <SearchBar type="search"
                    placeholder="search monsters"
                    handleChange={e => this.setState({ searchText: e.target.value }, () => {
                        console.log(this.state.searchText);
                    })} />
            </div>

        )
    }
}