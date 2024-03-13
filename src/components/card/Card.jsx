import Button from "../button/Button"
import "./Card.css"

const Card = ({lang, btn, img}) => {
  return (
    <div> 
        <h1>{lang}</h1>
        <img src={img} />
        {/* <h2>{btn}</h2> */}
        <Button btn={btn}/>
    </div>
  )
}

export default Card