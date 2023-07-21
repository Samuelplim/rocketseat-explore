import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api"

export const AuthContext = createContext({})

//Função do contexto que providencia os dados em toda aplicação, tem como o parâmetro as rotas
function AuthProvider( children ){
const [data, setData] = useState({})

//função para fazer a autenticação do usuário
async function signIn({ email, password}){
  try {
    const response = await api.post("/sessions", { email, password })
    const { user, token } = response.data

    localStorage.setItem("@rocketmovies:user", JSON.stringify(
    user))
    localStorage.setItem("@rocketmovies:token", token)

     //Para inserir um token do tipo Bearer de autorização no cabeçalho de todas as requisições que um user fazer
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    setData({user, token})
    
  } catch (error) {
    if(error.response){
      alert(error.response.data.message)
    } else {
      alert("Não foi possível entrar.")
    }
  }
}

//Função para sair do app e voltar a página de login
function signOut(){
  localStorage.removeItem("@rocketmovies:token")
  localStorage.removeItem("@rocketmovies:user")

  setData({})
}

async function updateProfile({ user, avatarFile }){

  try{

    if(avatarFile){
      const fileUploadForm = new FormData()
      fileUploadForm.append("avatar", avatarFile)

      const response = await api.patch("/users/avatar", fileUploadForm)
      user.avatar = response.data.avatar
    }

    await api.put("/users", user)

   //Actualizar o estado que guarda os dados do user
       setData({ user, token: data.token})
       alert("Perfil actualizado com sucesso!")

    //actualizar os dados no localStorage
    localStorage.setItem("@rocketmovies:user", JSON.stringify(user))

 


  }catch(error){
    if(error.response){
      alert(error.response.data.message)
    } else {
      alert("Não foi possível actualizar os dados do perfil")
    }
  }
}

//sempre que a página for recarregada mantém o usuário na página home
useEffect(() => {
  const token = localStorage.getItem("@rocketmovies:token")
  const user = localStorage.getItem("@rocketmovies:user")

  if(token && user){
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

    setData({
      token,
      user:JSON.parse(user)
    })

  }
}, [])

  return(
    <AuthContext.Provider value={{
      signIn, 
      signOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

//Função que vai permitir usar as funções do  contexto 
function useAuth(){
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }