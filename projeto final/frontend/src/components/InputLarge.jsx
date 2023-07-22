export const InputLarge = ({title, placeholder})=> {

  return  (
  <div className="flex justify-center items-center gap-4">
    <span>{title}</span>
    <input placeholder={placeholder} type="text"name="aa"></input>
  </div>
  )
}

