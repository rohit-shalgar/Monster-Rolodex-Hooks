import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

    const [searchString, setSearchString] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => setMonsters(users))
    }, [])

    console.log(monsters)

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) =>
            monster.name.toLocaleLowerCase().includes(searchString))
        setFilteredMonsters(newFilteredMonsters)
    }, [monsters, searchString])

    console.log(filteredMonsters)
    const onSearch = (event) => {
        const searchValueString = event.target.value.toLocaleLowerCase();
        setSearchString(searchValueString);
    }
    return (
        <div className="App">
            <h1 className='header'>Monsters Rolodex</h1>
            <SearchBox className="search-box" type='search' placeholder='Search by name' onChangeHandler={onSearch} />
            <CardList monsters={filteredMonsters} />
        </div>
    );
}

export default App;
