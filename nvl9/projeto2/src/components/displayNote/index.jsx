import { Container } from "./style"
import { StarRating } from "../../javaScript/starRating"
import { FiClock } from "react-icons/fi"
import { Tag } from "../../components/tag"


export function DisplayNote({data}){
  return (
    <Container>
      <div>
        <h1>{data.title}</h1>
        <StarRating value={data.star} /> {/*UL and LI / star-on / star-off*/}
      </div>

      <div>
        <img src="https://github.com/A1exLima.png" alt="Imagem Avatar" />
        <p>Por {data.name}</p>
        <FiClock />
        <p>{data.date} ás {data.time}</p>
      </div>

      {data.tags && (
        <div>
          {" "}
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}{" "}
        </div>
      )}

      <p>{data.text}</p>
    </Container>
  )
}