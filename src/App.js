import './App.css';
import SideHeading from './Components/SideHeading';
import Header from './Components/Header';
import Qualification from './Components/Qualification';
import Project from './Components/Project';
import Description from './Components/Description';
import Skills from './Components/Skills';

function App() {
  let r = {
    name: "Suraj N M",
    place: "Mangaluru",
    state: "Karnataka",
    mobile: "9148477816",
    email: "surajnm.mca21@rvce.edu.in",

    desc: "Self-motivated team oriented person",

    skills: ["Go", "C++", "JavaScript(ReactJS)", "Docker", "Git"],

    quals: [
      { institution: "R V College of Engineering", start: "2021", end: "Present", degree:"Master of Computer Applications", result:"9.0 CGPA"},
      { institution: "St. Aloysius College", start: "2018", end: "2021", degree: "Bachelor of Computer Applications", result: "7.6 CGPA"},
      { institution: "Sharada PU College", start: "2016", end: "2018", degree: "2nd PUC", result: "79%"}
    ],

    projects: [
      { title: "ELECT", desc: "Online Election System for College Elections", link: "https://github.com/srjnm/elect"},
      { title: "CS:GO WeakSpots", desc: "Analyse CS:GO Match Demos", link: "https://github.com/srjnm/weakspots"},
      { title: "DesForm", desc: "Android Learning Platform", link: "https://github.com/srjnm/desform"}
    ]
  };
  

  return (
    <div className="App">
      <div className="SUB1">
        <Header name={r.name} place={r.place} state={r.state} mob={r.mobile} email={r.email}></Header>  
      </div>
      <div className="SUB2">
        <Description content={r.desc} ></Description>
      </div>
      <div className="SUB2">
        <SideHeading title="Skills" ></SideHeading>
      </div>
      <div className="SUB2">
        <Skills skills={r.skills}></Skills>
      </div>
      <div className="SUB2">
        <SideHeading title="Education" ></SideHeading>
      </div>
      {
        r.quals.map((q) => (
          <div className="SUB3">
            <Qualification institution={q.institution} start={q.start} end={q.end} degree={q.degree} result={q.result}></Qualification>
          </div>
        ))
      }
      <div className="SUB2">
        <SideHeading title="Projects" ></SideHeading>
      </div>
      {
        r.projects.map((p) => (
          <div className="SUB3">
            <Project  title={p.title} desc={p.desc} link={p.link}></Project>
          </div>
        ))
      }
    </div>
  );
}

export default App;

