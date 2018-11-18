import React, {Component} from 'react';
import './Peoples.css';

class AddPeople extends Component{
    state={
        name: null,
        lastname: null
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.createPeople(this.state)
        this.setState({
            name: null,
            lastname: null
        })
        document.getElementById('name').value = '';
        document.getElementById('lastname').value = '';
    }
    render(){
        return(
            <div className={'AddPeople'}>
            <form onSubmit={this.handleSubmit}>
                <input type={'text'} id={'name'} placeholder={'Here your name'} autoFocus required onChange={this.handleChange.bind(this)}/>
                <br></br>
                <input type={'text'} id={'lastname'} placeholder={'Here your lastname'} required onChange={this.handleChange.bind(this)}/>
                <br></br>
                <input type={'submit'} value={'Create people now'}/>
            </form>
            </div>
        )
    }
}

export default AddPeople;