import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{
  state={
      persons:[
        {id:1,name:'raju',age:30},
        {id:2,name:'ram',age:32}
      ],
      showPersons:false
};

  switchNameHandler=(newName)=>{
    //console.log("button was clicked");
    this.setState({
      persons:[
        {name:newName,age:30},
        {name:'ram',age:32}
      ]
    });
  };

  deletePersonHandler=(personIndex)=>{
      //const persons=this.state.persons.slice();
      const persons=[...this.state.persons]
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  }

  nameChangeHandler=(event)=>{
this.setState({
      persons:[
        {name:'ram',age:32},
        {name:event.target.value,age:30}
      ]
    });
  };

  togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});
  };

    render(){

      const styleButton={
        backgroundColor:'blue',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer'
      };

      let persons=null;
      if(this.state.showPersons)
      {
        persons=(
          <diV>
            {this.state.persons.map((person,index)=>{
              return<Person
                        click={()=>this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}/>
            })}
          </diV>
        );
        //style.backgroundColor='red';
        
      }


      const classes=[];
      if(this.state.persons.length<=2)
      {
        classes.push('red');
      }
      if(this.state.persons.length<=1)
      {
        classes.push('bold');
      }

     return (
       
       <div className="App">
       <h1>Hi Welcome</h1>
       <p className={classes}>Now change the style! </p>
       <button
       style={styleButton}
        //onClick={this.switchNameHandler.bind(this,'Rahul')}>Switch Name</button>
        onClick={this.togglePersonsHandler}>Switch Name</button>
        {/* {
          this.state.showPersons===true ?
        <diV>
          <Person 
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}/>
          <Person 
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,'Rahu!')}
            changed={this.nameChangeHandler}> my Hobbies are playing Football</Person>
          </diV> :null
        } */persons}
       </div>
       
     );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Hi Welcome'))
  
    }
};

export default App;
