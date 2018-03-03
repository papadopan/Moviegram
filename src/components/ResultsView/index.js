import React, {Component} from 'react'
import './ResultsView.css';
import SideBar from "./SideBar"
import Slider from "./Slider"
import logo from "../../assets/logo1.png"


class ResultsView extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      showingSideBar : false,
    }
  }

handlefind = (param)=>
{
  this.props.AppQuery(param);
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
        />
  <div className="wrapper">
      <div className="search_header">
        <h1>Box office time...</h1>
      </div>
  </div>
  <div className="results_list">
      <h1>Your search results are empty</h1>
    </div>
<div className="now_playing">
    <div className="playing">
        <Slider />
      </div>
    <div className="playing_header">
      <h1>Now Playing</h1>
    </div>
</div>







</div>


    );
  }
}

export default ResultsView;
