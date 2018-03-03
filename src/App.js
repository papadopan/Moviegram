import React, { Component } from 'react';
import {MainView, ResultsView,ActorsView, ProfileView,MovieView} from './components'
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      query: " ",
      showMainView:true,
      showResultsView:false,
      showActorsView:false,
      showProfileView:false,
      showMovieView:false
    };
  }

update = (param) =>
{
  this.setState({query:param})
}
showMovie = () =>
{
  this.setState(oldState => ({
    showMainView:false,
    showResultsView:false,
    showActorsView:false,
    showProfileView:false,
    showMovieView: true
  }));
}
showActor = () =>
{
  this.setState(oldState => ({
    showMainView:false,
    showResultsView:false,
    showActorsView:true,
    showProfileView:false,
    showMovieView: false
  }));
}
ShowResultsView = () =>
{
  this.setState(oldState => ({
    showMainView:false,
    showResultsView:true,
    showActorsView:false,
    showProfileView:false,
    showMovieView: false
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
              onShowMovie = {() => this.showMovie()}
              AppQuery = {this.update}
              />
      );

    }
    if(this.state.showActorsView)
    {
      return(
        <ActorsView
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


    return (
          <div>
          <h1>Welcome</h1>
          </div>
    );
  }
}

export default App;
