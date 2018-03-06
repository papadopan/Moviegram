import React, { Component } from 'react';
import {MainView, ResultsView,ActorsView, ProfileView,SearchResults,MovieList} from './components'
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      movie_id:" ",
      dropdown_name:" ",
      dropdown_id: " ",
      query: " ",
      actor_name:"",
      actor_id: "",
      myMovies:[ ],
      showMainView:true,
      showResultsView:false,
      showActorsView:false,
      showProfileView:false,
      showMovieView:false,
      showSearchResults:false,
      showMovieList:false
    };
  }
//add the movies to my list
addmymovies = (parameter)=>{
  var myMovies = this.state.myMovies.slice()
  myMovies.push(parameter)
  this.setState({
    myMovies: myMovies
  });
}
  movetomovie= (parameter)=>
  {
    this.setState={
        movie_id:parameter
    };

  }
  //keep record of the gerne name and id
  AppDropDownInfo = (name,id)=>
  {

    this.setState({
      dropdown_name:name,
      dropdown_id:id
    });
  }

//fetch the name of the actor and call the API
update = (param) =>
{
  this.setState({query:param})
  this.fetchActorid(param)
}
fetchActorid(param)
{

    fetch('https://api.themoviedb.org/3/search/person?api_key=f35de773b53c4803aa0d72b2f16794f4&language=en-US&query=' + param)
    .then(response => response.json())
    .then(response=>this.setState({
        actor_name: response.results[0].name,
        actor_id : response.results[0].id
      }
    ))
    .catch(error => console.log("Problem loading data"))

//Show the results from the dropdown menu
}
showGenreMovie = () =>
{
  this.setState(oldState => ({
    showMainView:false,
    showResultsView:false,
    showActorsView:false,
    showProfileView:false,
    showMovieView: false,
    showSearchResults:true,
    showMovieList:false
  }));
}
// show the list from the movie search
showMovieList = () =>
{
  this.setState(oldState => ({
    showMainView:false,
    showResultsView:false,
    showActorsView:false,
    showProfileView:false,
    showMovieView: false,
    showSearchResults:false,
    showMovieList:true
  }));
}
//show the actor page
showActor = () =>
{
  this.setState(oldState => ({
    showMainView:false,
    showResultsView:false,
    showActorsView:true,
    showProfileView:false,
    showMovieView: false,
    showSearchResults:false,
    showMovieList:false
  }));
}
//show the results view
ShowResultsView = () =>
{
  this.setState(oldState => ({
    showMainView:false,
    showResultsView:true,
    showActorsView:false,
    showProfileView:false,
    showMovieView: false,
    showSearchResults:false,
    showMovieList:false
  }));
}
//show my profile
showprofile = () =>
{
  this.setState(oldState => ({
    showMainView:false,
    showResultsView:false,
    showActorsView:false,
    showProfileView:true,
    showMovieView: false,
    showSearchResults:false,
    showMovieList:false
  }));
}

  render() {
    if(this.state.showMainView)
    {
      return (
            <MainView
                onShowResults = {() => this.ShowResultsView()}
                />
      );
    }
    if(this.state.showResultsView)
    {
      return (
            <ResultsView
            onShowActor= { () => this.showActor()}
              onShowMovie = {() => this.showMovieList()}
              AppQuery = {this.update}
              ResultsDropDownInfo={this.AppDropDownInfo}
              movetogenremovies={()=>this.showGenreMovie()}
              MoveToMovie={this.movetomovie}
              AddMyMovies={this.addmymovies}
              movetoprofile={this.showprofile}
              mymovies = {this.state.myMovies}
              />
      );
    }
    if(this.state.showActorsView)
    {
      return(
        <ActorsView
          actor = {this.state.actor_name}
          id = {this.state.actor_id}
          Go_back= {() => this.ShowResultsView()}
        />
      );
    }
    if(this.state.showSearchResults)
    {
      return(
          <SearchResults
              name = {this.state.dropdown_name}
              id = {this.state.dropdown_id}
              Go_back={()=>this.ShowResultsView}
              AddMyMovies={this.addmymovies}
              mymovies={this.state.myMovies}
          />
      );
    }
    if(this.state.showMovieList)
    {
      return(
          <MovieList
          value= {this.state.query}
          Go_back={()=>this.ShowResultsView}
          AddMyMovies={this.addmymovies}
          mymovies={this.state.myMovies}
          />
      );
    }
    if(this.state.showProfileView)
    {
      return <ProfileView
      movies={this.state.myMovies}
        Go_back={()=>this.ShowResultsView}
        />
    }
    return (
          <div>
          <h1>Welcome</h1>
          </div>
    );
  }
}

export default App;
