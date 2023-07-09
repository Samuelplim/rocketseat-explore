import { FiStar } from "react-icons/fi"

export const StarRating = ({ value }) => {

  const renderStars = () => {
    const stars = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      const starColor = i < value ? "on" : "off"
      stars.push(<li key={i} className={`star-${starColor}`}> <FiStar/> </li>)
    }

    return stars
  }

  return <ul> {renderStars()} </ul>
}
