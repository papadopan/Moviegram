import React, {Component} from 'react'
import './SearchResults.css';
import friends from "../../assets/friends.jpg"
import left from "../../assets/long-left.svg"


class SearchResults extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      showingSideBar : false,
      top_rated: [],
    }
  }

  componentDidMount(){
    this.fetchGenreMovies();
  }
  fetchGenreMovies()
  {
    fetch('https://api.themoviedb.org/3/genre/'+this.props.id+'/movies?api_key=f35de773b53c4803aa0d72b2f16794f4&language=en-US&include_adult=false&sort_by=created_at.asc' )
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

  handleULClick = (event) =>
  {
    this.setState({drop:event.target.className})

  }


  render()
  {
    return(
      <div className="second_screen">
      <div className="go_back">
          <img src={left} alt="arrow" onClick={this.props.Go_back()}/>
      </div>
        <div className="wrapper">
            <div className="search_header">
              <h1>{this.props.name} movies . . .</h1>
            </div>
        </div>
        <div className="results_list">

            {
                this.state.top_rated.map(movies =>
                  {
                    return      <div key={movies.id} className="movie_slides">
                                      <div className="card">
                                      <img src={friends} alt="movie"/>
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

export default SearchResults;
