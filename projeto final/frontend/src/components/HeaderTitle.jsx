import Polygon1 from "../assets/Polygon1.svg"

export const HeaderTitle = ()=> {
  return  (
  <div className="flex justify-center items-center gap-4">
    <img alt="food explorer" src={Polygon1}/>
    <h1 className="text-light-100 font-['Roboto'] font-bold text-4xl">
      food explore
    </h1>
  </div>
  )
}