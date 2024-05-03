
import PropTypes from "prop-types";
import './App.css'
const Card = ({id,name,complete,checkedTodo,deleteTodo}) => {
  const textDecoration=complete?"line-through":"none"
  return (
    <>
     <ul id="list">
        <li key={id} ><div><input type="checkbox" checked={complete} onChange={e=>checkedTodo(id,e.target.checked)} />
        <span style={{textDecoration}}>{name}</span></div>
        <button onClick={()=>deleteTodo(id)}>Delete</button>
        </li>
     </ul>
    </>
  )
}
Card.propTypes = {
  id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    complete:PropTypes.bool.isRequired,
    checkedTodo:PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
  };
export default Card