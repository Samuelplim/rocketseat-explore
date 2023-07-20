import { FiPlus } from "react-icons/fi"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { Container, Content, Header, Brand, Profile, Logout  } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import {Section } from "../../components/Section"

import { MovieNote } from "../../components/MovieNote"



export function Home(){
  const { signOut, user } = useAuth()
  
  const [search, setSearch] = useState("")
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleSignOut(){
    navigate("/")
    signOut()
  }

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  function handleAddMovie(){
    navigate("/createmovie")
  }

  function handleMoviePreview(id){
    navigate(`/moviepreview/${id}`)
  }

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/movienotes?title=${search}&tags`)
      setNotes(response.data)
      
    }

    fetchNotes()
  }, [search])
  

  return(
      <Container>
      <Header>
      <Brand>
      <h1>RocketMovies</h1>
      </Brand>

      <Input 
      placeholder="Pesquise pelo título"
      onChange={e => setSearch(e.target.value)}
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
      </Header>
    

        <Content>
          <div className="titleAndButton">
            <h1>Meus filmes</h1>
           
            <Button title="Adicionar filme" onClick={handleAddMovie}>
              <FiPlus />
            </Button>
         
          </div>

          <Section >
          {
            notes.map(note => (
              <MovieNote 
              key={String(note.id)}
              data={note}
              onClick={() => handleMoviePreview(note.id)}
              />
            ))
           }
          </Section>
            
        </Content>
      
      </Container>
  )
}