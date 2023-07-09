import { StarRating } from "../../javaScript/starRating"
import { Tag } from "../../components/tag"
import { Container } from "./style"

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      
      <StarRating value={data.star} />

      <p>{data.text}</p>
      
      {
        data.tags && <div> { data.tags.map( tag => <Tag title={tag.name} key={tag.id} />) } </div>
      }
    </Container>
  )
}
