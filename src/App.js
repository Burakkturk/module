import Card from "./components/card/Card"
import data from "./data"

function App() {
    console.log(data)
    return (
        <>
        <h1>LANGUAGES</h1>
      {data.map( ({id,language,img,btnName}) => (
        <Card key={id} lang={language} img={img} btn={btnName}/>
      ) )}
        {/* <Card id={data[0].id} lang={data[0].language} img={data[0].img} btn={data[0].btnName}/> */}
        </>
    )
}

export default App