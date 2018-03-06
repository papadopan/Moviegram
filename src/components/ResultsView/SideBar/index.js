import React, {Component} from 'react'
import './SideBar.css';
import logo from "../../../assets/logo1.png"

class SearchButton extends Component{

//handling clicks
  handleChange= (event)=>
  {
    this.props.onQueryChange( event.target.value)
  }

  render(){
    return(
      <div>
        <div className="form-group">
          <input type="text" className="movies_input " value={this.props.query} placeholder={this.props.placeholder} onChange={ this.handleChange} />
        </div>
        <button className="btn movies_btn" onClick={ () => this.props.onClick()}>Search</button>
      </div>
    );
  }
}


class SideBar extends Component{
  constructor(props){
    super(props);
    this.state = {
        genres: [],
        query : "",
        dropdown: " Genres"

    };
  }

  componentDidMount(){
     this.fetchData()
   }

   fetchData(){
     fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f35de773b53c4803aa0d72b2f16794f4&language=en-US')
     .then(response => response.json())
     .then(results => results.genres.map( movie =>(
       {
           name : `${movie.name}`,
           id : `${movie.id}`
       }
     )))
     .then(genres => this.setState({genres}))
     .catch(error => console.log("There is an error with the API"))
   }

//handling clicks
  handleChangeQuery = (param) =>
  {
    this.setState({query:param});
    this.props.ResultsQuery(param);
  }
handleli = (e)=>{
  console.log(e.target.id)
  this.setState({dropdown:e.target.className})
  this.props.SideBarDropDownInfo(e.target.className , e.target.id)
  this.props.MoveToGenreMovies()
}
handleProfile=()=>
{
  this.props.MoveToProfile();
}

  render()
  {

    return(
      <div className={this.props.showing ? "sidenavbar move" : "sidenavbar"}>
        <img src={logo} alt="" />
        <div className="myprofile" onClick={this.handleProfile}>
        <i className="far fa-2x fa-user"></i>
          <p>my profile</p>
        </div>
        <hr/>
        <div className="searches">
          <div className="form-group">
            <p>I am interested in</p>
          <div className="dropdown">
            <button className="btn  dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              {this.state.dropdown}
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        {
                            this.state.genres.map(movie=>{
                              return <li key = {movie.name} onClick={this.handleli}><a className ={movie.name} id={movie.id}> {movie.name} </a></li>
                            })
                }
            </ul>
            </div>
          </div>
        </div>
        <div className="searches">
            <SearchButton
              placeholder={"Search movies . . ." }
              onClick ={() => this.props.onSideBarClick()}
              onQueryChange= {this.handleChangeQuery}
                />
        </div>
        <div className="searches">
            <SearchButton
            value={"actor"}
            placeholder={"Search actor . . . "}
            onClick = { () => this.props.onSide()}
              onQueryChange= {this.handleChangeQuery}
            />
        </div>
      </div>
    );
  }
}

export default SideBar;
