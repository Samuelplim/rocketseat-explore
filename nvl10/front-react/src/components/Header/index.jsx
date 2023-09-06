/*import { useNavigate } from "react-router-dom"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Brand, Profile, Logout } from "./styles"
import { Input } from "../Input"



export function Header({title}){
  const { signOut, user } =  useAuth()
  const navigate = useNavigate()


  function handleSignOut(){
    navigate("/")
    signOut()
  }

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


  return (
    <Container>
      <Brand>
      <h1>{title}</h1>
      </Brand>

      <Input 
      placeholder="Pesquise pelo título"
      />

  <div className="profile-wrapper">
    
        <Profile to="/profile">
            <strong>{user.name}</strong>
      
          <img 
          src={avatarURL} 
          alt={user.name} 
          />
        </Profile>
        <Logout onClick={handleSignOut}>
          Sair
        </Logout>
    
  </div>



     

    </Container>
  )
}*/