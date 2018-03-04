import React,{Component} from 'react'
import left from "../../assets/long-left.svg"
import friends from "../../assets/friends.jpg"
import './MovieView.css'


class MovieView extends Component{

  constructor(props)
  {
    super(props);
    this.state = {
        now_playing : [],
        upcoming :[]
    };
  }


  componentDidMount() {
    this.fetchNowPlayingData();
    this.fetchUpcomingData();
    this.fetchMovieInfo();
  }

  fetchMovieInfo()
  {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f35de773b53c4803aa0d72b2f16794f4&language=en-US')
    .then(response => response.json())
    .then(data => data.results.map(movies =>(
      {
        title :`${movies.original_title}`,
        date: `${movies.release_date}`,
        image: `${movies.poster_path}`,
        id: `${movies.id}`
      }
    )))
    .then(data => this.setState({now_playing: data}))
    .catch("There is an error with the API")

  }

  fetchNowPlayingData(){
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f35de773b53c4803aa0d72b2f16794f4&language=en-US')
    .then(response => response.json())
    .then(data => data.results.map(movies =>(
      {
        title :`${movies.original_title}`,
        date: `${movies.release_date}`,
        image: `${movies.poster_path}`,
        id: `${movies.id}`
      }
    )))
    .then(data => this.setState({now_playing: data}))
    .catch("There is an error with the API")
  }

  fetchUpcomingData(){
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=f35de773b53c4803aa0d72b2f16794f4&language=en-US')
    .then(response => response.json())
    .then(data => data.results.map(movies =>(
      {
        title :`${movies.original_title}`,
        date: `${movies.release_date}`,
        image: `${movies.poster_path}`,
        id: `${movies.id}`
      }
    )))
    .then(data => this.setState({upcoming : data }))
    .catch("There is an error with the API")

  }

  render()
  {
    return(
      <div className="movie_overview">
          <div className="go_back">
            <img src={left} alt="arrow" onClick={() => this.props.Go_back()}/>
          </div>
          <div className="content">
          <div className="latest_movies">
            <h1>Now Playing Movies</h1>
            {
                this.state.now_playing.map(movie =>
                  {
                    return    <div key ={movie.id} className="upcoming_list_item">
                                  <img src={friends}alt="upcoming movie"/>
                                  <p>{movie.title}</p>

                                </div>
                  }
                )
            }
          </div>
          <div className="current">
            <div className="movie_description">
            <img src={friends} alt="movie poster"/>
            <h3>Fight Club(1995)</h3>
            <p>Drama</p>
            </div>
            <div className="current_info">
              <h1>Overview</h1>
              <p>A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.</p>
            </div>
          </div>
          <div className="upcoming_movies">
            <h1>Upcoming Movies</h1>
            {
                this.state.upcoming.map(movie =>
                  {
                    return    <div key ={movie.id} className="upcoming_list_item">
                                  <img src={friends}alt="upcoming movie"/>
                                  <p>{movie.title}</p>

                                </div>
                  }
                )
            }

          </div>

          </div>
</div>
    );
  }
}

export default MovieView;
