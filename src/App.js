
import './App.css';
import React, { Component} from "react";
import Api from './services/Api';
import StatisticList from './components/Statistic/Statistic';
import Filter from './components/SearchBar/Search';
export default class App extends Component {
  state={
    countries: [],
    quest: '',
    error: false,
    filter:""
  
  
  }

componentDidMount(){
  this.fetchCountries();
  
}





fetchCountries=()=>{

 Api
      .fetchCountry()
      .then((data) =>
          this.setState({countries: data.data.Countries})
      )
      .catch((error) => this.setState({ error }));
  
};

changeFilter = (filter) => {
  this.setState({filter});
};

getVisibleCountries = () => {
  const { countries, filter } = this.state;

  return countries.filter((item) =>
      item.Country.toLowerCase().includes(filter.toLowerCase())
  );
};




render(){

let{filter} = this.state

 let visibleCountries = this.getVisibleCountries();
  return(<>
 <img className="logo" src='logo.jpg' alt="logo"></img>
 <p className ="header_statistic">STATISTIC</p>
<Filter value ={filter} OnChangeFilter = {this.changeFilter}/>
  <StatisticList countries = {visibleCountries}/>
  </>
  )
}


}


