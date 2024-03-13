import Button from "../button/Button"
import CardStyle from "./Card.module.css"

const Card = ({lang, btn, img}) => {
  return (
    <div> 
        <h1 className={CardStyle["title"]}>{lang}</h1>
        <img className={CardStyle["images"]} src={img}/>
        <Button btn={btn} />
    </div>
  )
}

export default Card