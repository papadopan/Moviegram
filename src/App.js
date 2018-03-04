import React, { Component } from 'react';
import {MainView, ResultsView,ActorsView, ProfileView,MovieView,SearchResults,MovieList} from './components'
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
      showMainView:true,
      showResultsView:false,
      showActorsView:false,
      showProfileView:false,
      showMovieView:false,
      showSearchResults:false,
      showMovieList:false
    };
  }

  movetomovie= (parameter)=>
  {
    this.setState={
        movie_id:parameter
    };

  }
  AppDropDownInfo = (name,id)=>
  {

    this.setState({
      dropdown_name:name,
      dropdown_id:id
    });
  }

update = (param) =>
{
  this.setState({query:param})
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
showTheMovie = ()=>
{
  this.setState(oldState => ({
    showMainView:false,
    showResultsView:false,
    showActorsView:false,
    showProfileView:false,
    showMovieView: true,
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
              ShowMovieOn = {() => this.showTheMovie()}
              />
      );

    }
    if(this.state.showActorsView)
    {
      return(
        <ActorsView
          actor = {this.state.query}
          Go_back= {() => this.ShowResultsView()}
        />
      );
    }
    if(this.state.showProfileView)
    {
      return(
        <ProfileView
        Go_back= {() => this.ShowResultsView()} />
      );
    }
    if(this.state.showMovieView)
    {
      return(
          <MovieView
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
          />
      );
    }
    if(this.state.showMovieList)
    {
      return(
          <MovieList
          value= {this.state.query}
          Go_back={()=>this.ShowResultsView}
          />
      );
    }


    return (
          <div>
          <h1>Welcome</h1>
          </div>
    );
  }
}

export default App;
