import './skill.css';

const Skill = (props) => {
  const skillBar = [0, 0, 0, 0, 0];
  return (
    <div className='Skill'>
      <h3>{props.name}</h3>
      <div className='skill-bar'>
        {skillBar.map((item, index) => <div key={index} className={`skill-bar-item ${(props.level > index) ? 'filled' : ''}`} />)}
      </div>
    </div>
  )
}

export default Skill;