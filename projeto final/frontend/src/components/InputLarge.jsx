export const InputLarge = ({title, placeholder})=> {

  return  (
  <div className="w-full flex flex-col items-start gap-2">
    <span className="text-light-400">{title}</span>
    <input placeholder={placeholder} type="text" className="w-full px-3.5 py-3 rounded-lg bg-dark-900"></input>
  </div>
  )
}

