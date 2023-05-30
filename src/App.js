import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('render');

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => setMonsters(users));
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
  });
      setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLowerCase();
      setSearchField(searchFieldString);
  }

      return (
      <div className="App">
      <h1 className='app-title'>Monsters Rolofex</h1>
      <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='search monsters' 
          className='monsters-search-box' 
      />
      <CardList monsters={filteredMonsters} />

      </div>
    )
}

// class App extends Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }
  
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response =>
//       response.json()
//       )
//       .then(users => this.setState(
//         ()=>{
//         return { monsters: users};
//       })
//     )
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField)
//     });

//     return (
//       <div className="App">
//       <h1 className='app-title'>Monsters Rolofex</h1>
//       <SearchBox 
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters' 
//           className='monsters-search-box' 
//       />
//       <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
  
// }

export default App;
