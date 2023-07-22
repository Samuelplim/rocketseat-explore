import { Link } from "react-router-dom"

export const LinkLight = ({title, to})=> {

  return  (
 
  <Link className="text-sm text-center" to={to}>  
    {title}
  </Link>
  )
}

