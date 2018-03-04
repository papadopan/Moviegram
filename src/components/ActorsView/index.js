import React, {Component} from 'react'
import './ActorsView.css'
import jennifer from "../../assets/jennifer.jpg"
import left from "../../assets/long-left.svg"
import friends from "../../assets/friends.jpg"

class ActorsView extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      data:[]
    };
  }

  componentDidMount(){
    this.fetchActorsData();
  }


  fetchActorsData(){
    fetch('https://api.themoviedb.org/3/search/person?api_key=f35de773b53c4803aa0d72b2f16794f4&language=en-US&query=' + this.props.actor)
    .then(response => response.json())
    .then(data => data.results.map(actor =>(
      {
        name : `${actor.name}`,
        id : `${actor.id}`
      }
    )))
    .then(data => this.setState({data}))
    .catch(error => console.log("Problem loading data"))
  }


  render(){
    return(
      <div className="profile">
          <div className="go_back">
              <img src={left} alt=" arrow" onClick = {() => this.props.Go_back()}/>
          </div>
          <div className="profile_info">
            <div className="infos">
              <img src={jennifer} alt="actor "/>
                {
                  this.state.data.map(actor =>
                  {
                    return  <p key={actor.name}>{actor.name}</p>
                  })
                }
              <p>1969-02-11</p>
              <p>Sherman Oaks, Los Angeles, California, USA</p>
              <p>Starred in #196 movies</p>
            </div>
          </div>
          <div className="personal_info">
            <div className="biography">
                <p>From Wikipedia, the free encyclopedia.\n\nJennifer Aniston (born February 11, 1969) is an American actress, filmmaker, and businesswoman. She gained worldwide recognition for portraying Rachel Green on the television sitcom Friends (1994–2004), a role which earned her an Emmy Award, a Golden Globe Award, and a Screen Actors Guild Award. In 2012, she received a star on the Hollywood Walk of Fame. Additionally, Men's Health magazine voted Aniston the \"Sexiest Woman of All Time\".\n\nAniston has also enjoyed a successful film career. She has played the female protagonist in dozens of romantic comedy films. Her greatest box office hits include Bruce Almighty (2003), The Break-Up (2006), Marley & Me (2008), Just Go with It (2011), Horrible Bosses (2011) and We're the Millers (2013), all of which have grossed over $200 million in the United States. One of her most critically acclaimed roles was in The Good Girl (2002), for which she was nominated for an Independent Spirit Award for Best Female Lead. She is the co-founder of the production company Echo Films.\n\nEarly life\n\nJennifer Joanna Aniston was born on February 11, 1969, in Sherman Oaks, Los Angeles, California to actors John Aniston and Nancy Dow Her father is Greek and a native of Crete, while her mother was born in New York City. One of her maternal great-grandfathers was an Italian immigrant, and her mother's other ancestry is Scottish, Irish, and a small amount of Greek. Aniston has two half-brothers, John Melick, her maternal older half-brother, and Alex Aniston, her younger paternal half-brother. Aniston's godfather was actor Telly Savalas, one of her father's best friends.\n\nAs a child, Aniston lived in Greece for a year with her family. They moved to Eddystone, Pennsylvania, then to New York City. Despite her father's television career, Aniston was discouraged from watching TV, though she found ways around the prohibition. When she was six, Aniston began attending the Rudolf Steiner School, a Waldorf educational school that applied the Rudolf Steiner philosophy. During that time, Aniston's father and mother split when she was nine years old.\n\nMeanwhile, after discovering acting at eleven while attending Rudolf Steiner, Aniston enrolled and graduated at Manhattan's Fiorello H. LaGuardia High School of Music & Art and Performing Arts, where she joined the school's drama society.</p>
            </div>
          </div>
          <div className="stats">
            <div className="box_header">
              <h1>Best known for...</h1>
            </div>
            <div className="box_office">
              <div className="box">
                <img src={friends} alt=""/>
                <div className="overlay">
                  <div>
                    <p className="overlay_title">Friends</p>
                    <p className="overlay_date"> 2003-05-23</p>
                  </div>
                </div>
              </div>
              <div className="box">
                <img src={friends} alt=""/>
                <div className="overlay">
                  <div>
                    <p className="overlay_title">Friends</p>
                    <p className="overlay_date"> 2003-05-23</p>
                  </div>
                </div>
              </div>
              <div className="box">
                <img src={friends} alt=""/>
                <div className="overlay">
                  <div>
                    <p className="overlay_title">Friends</p>
                    <p className="overlay_date"> 2003-05-23</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    );
  }
}

export default ActorsView;
