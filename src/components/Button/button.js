import './button.css';

const Button = (props) => {
  return (
    <button onClick={props.onClick} className='Button'><i className={props.icon}/> {props.label}</button>
  )
}

export default Button;