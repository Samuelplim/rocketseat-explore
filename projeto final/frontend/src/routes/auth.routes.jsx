import {Routes, Route} from "react-router-dom"

import { SingInPage } from "../pages/SignInPage"
import { SingUpPage } from "../pages/SingUpPage"

export function AuthRoutes(){
  return(
    <Routes>
      <Route path="/" element={<SingInPage />}/>
      <Route path="/register" element={<SingUpPage />}/>
    </Routes>
  )
}