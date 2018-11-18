import React, { Component } from 'react';
import Peoples from './peoples/Peoples';
import AddPeople from './peoples/AddPeople';
import './App.css';

class App extends Component {
  state={
    peoples:[
      {name:'David', lastname:'Uribe'},
      {name:'Juan', lastname:'Mendez'},
      {name:'Urzula', lastname:'Paternina'},
      {name:'Paola', lastname:'Melendez'}
    ]
  }
  //Antes de que se monte el componente
  componentWillMount(){
    console.log("Aun no se ha renderizado el componente")
  }
  //Despues que se monte el componente
  componentDidMount(){
    console.log("Ya se renderizo el componente")
  }
  //Cuando el componente se actualiza
  componentDidUpdate(prevProps, prevStates){
    console.log("El componente se actualizo");
    console.log('props',prevProps, 'states',prevStates)
  }
  addPeople = (people)=>{
    this.setState({
      peoples: [...this.state.peoples,people]
    })
  }

  deletePeople = (name, lastname)=>{
    this.setState({
      peoples: this.state.peoples.filter(people=>{
        return (people.name !== name & people.lastname !== lastname)
      })
    })
  }
  render() {
    return (
      <div className="App">
          <h3>Form to peoples React App</h3>
          <hr></hr>
          <AddPeople createPeople={this.addPeople}/>
          <Peoples deletPeople={this.deletePeople} peoples={this.state.peoples}/>
      </div>
    );
  }
}

export default App;
