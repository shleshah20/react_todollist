import React from 'react';
import './App.css';
import Listitems from './list_iteams'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faTrash, faPlus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrash, faPlus);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item:[],
      currentitem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.additem=this.additem.bind(this);
    this.setUpdate=this.setUpdate.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  }
  handleInput(e)
  {
    this.setState({
      currentitem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }
  additem(e){
    e.preventDefault();
    const newitem=this.state.currentitem;
    if(newitem.text!=="") {
      const newitems = [...this.state.item,newitem];
      this.setState({
        item: newitems,
        currentitem:{
          text:'',
          key:''
        }
      })
    }
  }
  deleteItem(key){
    const filteredItem=this.state.item.filter(i=>i.key!==key);
      this.setState({
        item: filteredItem
      })
  }
  setUpdate(value,key){
    const items=this.state.item;
    items.map(item=>{
      if(item.key===key)
      {
        item.text=value;
      }
    })
    this.setState({
      item: items
    })
  }
  render() {
    return (
      <div className="listMenu">
        <header>
          <div id="head">To-Do-List</div>
          <form id="todoform" onSubmit={this.additem}>
            <input type="text" placeholder="enter text here" 
            value={this.state.currentitem.text} 
            onChange={this.handleInput}/>
            <button type="submit">
              <FontAwesomeIcon icon="plus" />
            </button>
          </form>
        </header>
        <Listitems items={this.state.item} 
        deleteItem={this.deleteItem}
        setUpdate={this.setUpdate}/>
      </div>
  );
  }
}

export default App;
