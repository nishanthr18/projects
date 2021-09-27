import React, { Component } from "react";
import MapProjects from "./components/MapProjects";
import { Projects } from "./components/Projects";
import Searchbox from "./components/Searchbox";
import Scroll from "./components/Scroll";
import SocialAccount from "./SocialAccount";
import Particles from "react-particles-js";
import Clock from "./Clock";




class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: Projects,
      searchField: "",
    };
    this.particlesOptions = {
      particles: {
        number: {
          value: 10,
          density: {
            enable: true,
            value_area: 300,
          },
        },
      },
    };
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };

  render() {
    const filterProjects = this.state.projects.filter((filteredProjects) => {
      return filteredProjects.Title.toLowerCase().includes(
        this.state.searchField.toLowerCase()
      );
    });

    return (
      <div className="App">
        <Particles className="particles" params={this.particlesOptions} />
        <div className="tc">
          <SocialAccount />
        <div className={{ display: "flex", justifyContent: "flex-end" }}>
          <Clock/>
          </div>  
          <h2 className="header bg-transparent white fw2 dib ba light-green br1 pa2 br1  ma10 bw2  f4 grow  shadow-5">
            MY PROJECTS
          </h2>
          <Searchbox searchChange={this.onSearchChange} />
          
          <Scroll className="ma2 pa2 br2">
            <MapProjects Projects={filterProjects} />
          </Scroll>
           
        <p className='email white fw4 dib shadow-5'>contact me: @</p><a className='white fw4 dib  grow  shadow-5' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>nishanthgowda018@gmail.com</a>
        </div>
      </div>
    );
  }
}
export default App;
