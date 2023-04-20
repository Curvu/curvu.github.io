import Skill from '../Skill/skill';
import './sidebar.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Sidebar = (props) => {
  const mail = 'curvu6@gmail.com'

  const copyMail = () => {
    navigator.clipboard.writeText(mail)
    const copyButton = document.querySelector('.copy-button')
    copyButton.innerHTML = '<i class="bi bi-check2" />'
    setTimeout(() => { copyButton.innerHTML = '<i class="bi bi-clipboard" />' }, 1500)
  }

  const coding = [
    { name: 'JavaScript', level: 5 },
    { name: 'Python', level: 4 },
    { name: 'C', level: 3 },
    { name: 'C++', level: 3 },
    { name: 'Java', level: 3 },
  ]

  const frameworks = [
    { name: 'Node.js', level: 4 },
    { name: 'Express', level: 3 },
    { name: 'React', level: 3 },
    { name: 'Django', level: 1 },
  ]

  const tools = [
    { name: 'Git', level: 5 },
    { name: 'MongoDB', level: 4 },
    { name: 'PostgreSQL', level: 3 },
  ]

  const others = [
    { name: 'HTML', level: 5 },
    { name: 'CSS', level: 5 },
  ]

  return (
    <div className='Sidebar'>
      <div className='sidebar-item contact'>
        <h2>contact</h2>
        <span className='mail-item'>
          <i className="bi bi-envelope-fill" />
          <a href='mailto:curvu6@gmail.com'>curvu6@gmail.com</a>
          <div className='gap' />
          <button className='copy-button' onClick={copyMail}><i className="bi bi-clipboard" /></button>
        </span>
        <span className='address-item'>
          <i className="bi bi-geo-alt-fill" />
          <p>Coimbra, Portugal</p>
        </span>
        <span className='github-item'>
          <i className="bi bi-github" />
          <a href='https://github.com/Curvu'>Curvu</a>
        </span>
        <span className='linkedin-item'>
          <i className="bi bi-linkedin" />
          <a href='https://www.linkedin.com/in/curvu/'>@curvu</a>
        </span>
      </div>
      <div className='sidebar-item'>
        <h2>skills</h2>
        <div>
          <h3 className='skill-title'>Coding Languages</h3>
          {coding.map((item, index) => <Skill key={index} name={item.name} level={item.level} />)}
        </div>
        <div>
          <h3 className='skill-title'>Frameworks</h3>
          {frameworks.map((item, index) => <Skill key={index} name={item.name} level={item.level} />)}
        </div>
        <div>
          <h3 className='skill-title'>Tools</h3>
          {tools.map((item, index) => <Skill key={index} name={item.name} level={item.level} />)}
        </div>
        <div>
          <h3 className='skill-title'>Others</h3>
          {others.map((item, index) => <Skill key={index} name={item.name} level={item.level} />)}
        </div>
        <div>
          <h3 className='skill-title'>Languages</h3>
          <div className='language-item'>
            <h3>Portuguese</h3>
            <h3>Native</h3>
          </div>
          <div className='language-item'>
            <h3>English</h3>
            <h3>Fluent</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;