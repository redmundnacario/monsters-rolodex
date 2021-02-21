import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';
class App extends Component {
  constructor(){
    super()
    this.state = {
      monsters : [],
      searchField : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(result => this.setState({monsters: result}))
  }
  render () {
    const { monsters, searchField } = this.state
    console.log(monsters, searchField)
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder = "Search Monsters"
          handlechange = {
            event => {
              this.setState({searchField: event.target.value}, ()=>{
                console.log(this.state.searchField)
              })
            }
          }
        />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
