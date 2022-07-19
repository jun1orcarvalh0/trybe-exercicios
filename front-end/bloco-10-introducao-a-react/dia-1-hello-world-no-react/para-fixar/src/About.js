import React from 'react'

class About extends React.Component {
  render() {
    const skills = ['HTML', 'JavaScript', 'CSS']
    const jsxSkills = skills.map((skill) => <li>{skill}</li> )
    return (
      <div>
        <h1>Júnior Carvalho</h1>
        <p>Stay focused</p>
        <h2>My skills</h2>
        <ul>{ jsxSkills } </ul>
      </div>
    );
}
}

export default About;