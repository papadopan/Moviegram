import React,{Component} from 'react'
import './ProfileView.css'
import jennifer from "../../assets/jennifer.jpg"
import left from "../../assets/long-left.svg"
import friends from "../../assets/friends.jpg"


class ProfileView extends Component{
  render()
  {
    return (
      <div className="personal">
          <div className="go_back">
              <img src={left} alt="arrow" onClick= {this.props.Go_back()}/>
          </div>
          <div className="timeline">
            <div className="personal_infos">
              <img src={jennifer} alt="profile"/>
              <p>Papadopoulos Antonios</p>
              <span>23 movies | 12 Wishlist</span>
            </div>
          </div>
          <div className="check_options">
          <div>
            <label className="switch" >
              <input type="checkbox" id="s" />
              <span className="slider round"></span>
            </label>
          </div>
          </div>
          <div className="stream">
            <h1>My movies</h1>
          </div>
          <div className="mymovies">
          <div className="box">
            <img src={friends} alt="poster"/>
            <div className="overlay">
              <div>
                <p className="overlay_title">Friends</p>
                <p className="overlay_date"> 2003-05-23</p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src={friends} alt="poster"/>
            <div className="overlay">
              <div>
                <p className="overlay_title">Friends</p>
                <p className="overlay_date"> 2003-05-23</p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src={friends} alt="poster"/>
            <div className="overlay">
              <div>
                <p className="overlay_title">Friends</p>
                <p className="overlay_date"> 2003-05-23</p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src={friends} alt="poster"/>
            <div className="overlay">
              <div>
                <p className="overlay_title">Friends</p>
                <p className="overlay_date"> 2003-05-23</p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src={friends} alt="poster"/>
            <div className="overlay">
              <div>
                <p className="overlay_title">Friends</p>
                <p className="overlay_date"> 2003-05-23</p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src={friends} alt="poster"/>
            <div className="overlay">
              <div>
                <p className="overlay_title">Friends</p>
                <p className="overlay_date"> 2003-05-23</p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src={friends} alt="poster"/>
            <div className="overlay">
              <div>
                <p className="overlay_title">Friends</p>
                <p className="overlay_date"> 2003-05-23</p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src={friends} alt="poster"/>
            <div className="overlay">
              <div>
                <p className="overlay_title">Friends</p>
                <p className="overlay_date"> 2003-05-23</p>
              </div>
            </div>
          </div>
          <div className="box">
            <img src={friends} alt="poster"/>
            <div className="overlay">
              <div>
                <p className="overlay_title">Friends</p>
                <p className="overlay_date"> 2003-05-23</p>
              </div>
            </div>
          </div>

          </div>


</div>
    );
  }
}


export default ProfileView
