import React, {Component} from 'react'
import './ResultsView.css';
import SideBar from "./SideBar"
import logo from "../../assets/logo1.png"
import friends from "../../assets/friends.jpg"


class ResultsView extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      showingSideBar : false,
      top_rated: []
    }
  }

  componentDidMount(){
    this.fetchTopRated();
  }
  fetchTopRated()
  {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f35de773b53c4803aa0d72b2f16794f4&language=en-US')
    .then(response => response.json())
    .then(data => data.results.map(movies =>(
      {
        title :`${movies.original_title}`,
        date: `${movies.release_date}`,
        image: `${movies.poster_path}`,
        id: `${movies.id}`
      }
    )))
    .then(data => this.setState({top_rated: data}))
    .catch("There is an error with the API")

  }
handleImageClick = (e)=>
{
  console.log(e.target.id)
  this.props.MoveToMovie(e.target.id)
  this.props.ShowMovieOn();
}
handlefind = (param)=>
{
  this.props.AppQuery(param);
}

handleDropdownInfo = (name , id)=>
{
  this.props.ResultsDropDownInfo(name,id)
}


  handleHamburgerClick = () =>{
    if(this.state.showingSideBar)
    {
      this.setState(oldState => ({
        showingSideBar: false
      }));
    }
    else{
      this.setState(oldState => ({
        showingSideBar: true
      }));
    }
  }
  render()
  {
    return(
      <div className="second_screen">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div  className={this.state.showingSideBar ? "cross_button cross move_btn" : "cross_button "} onClick={ this.handleHamburgerClick} data-toggle="collapse"  data-target="#expanded">
                  <svg viewBox="0 0 800 600">
                  <path d="M 300 220 C 300 220 500 220 540 220 C 740 220 640 540 520 420 C 440 340 300 200  300 200 "id="top" stroke="green" strokeWidth="3" fill="none"/>
                  <path d="M 300 320 C 300 320 500 320 540 320 C 740 320 740 530 540 520 L 540 520" stroke="green" id="middle" strokeWidth="3" fill="none" />
                  <path d="M 300 210 C 300 210 520 210 540 210 C 740 210 640 530 520 410 C 440 330 300 190 300 190"  stroke="green" strokeWidth="3" id="bottom" fill="none" transform="translate(480 ,320) scale(1,-1) translate(-480 ,-318)"/>
                  </svg>
                </div>
              <div className="navbar-header">
                <a className="navbar-brand" >
                  <span>movie</span>
                  <img src={logo} alt="logo img"/>
                  <span>gram</span>
                </a>
              </div>
            </div>
          </nav>
  <SideBar
          showing={this.state.showingSideBar}
          onSideBarClick = {() =>this.props.onShowMovie()}
          onSide = {() => this.props.onShowActor()}
          ResultsQuery = {this.handlefind}
          SideBarDropDownInfo={this.handleDropdownInfo}
          MoveToGenreMovies={()=>this.props.movetogenremovies()}

        />
  <div className="wrapper">
      <div className="search_header">
        <h1>Box office time . . .</h1>
      </div>
  </div>
  <div className="results_list">

  {
      this.state.top_rated.map(movies =>
        {
          return      <div key={movies.id} className="movie_slides">
                            <div className="card" onClick={this.handleImageClick}>
                            <img id={movies.id} src={friends} alt="movie"/>
                            <div className="info">
                              <p>{movies.title}({movies.date})</p>
                            </div>
                            <button className="btn">Add</button>
                            </div>
                          </div>
        }
      )
  }

  </div>

</div>


    );
  }
}

export default ResultsView;
