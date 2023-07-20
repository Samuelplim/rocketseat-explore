import { FiArrowLeft } from "react-icons/fi"
import {  useNavigate } from "react-router-dom"

import { Container, Form } from "./styles"

import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea"
import { useState } from "react"
import { api } from "../../services/api"

export function CreateMovie(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState()

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()

  function handleBack(){
    navigate("/")
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

//cadastrar nota
  async function handleNewMovie(){
    if(!title){
      return alert("Digite o título do filme.")
    }

    if(!rating){
      return alert("Digite a sua nota para o filme.")
    }

    if(rating < 0 || rating > 5){
     return  alert("Digite uma nota na escala de 0 a 5")
    }

    if(newTag){
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou para adiconar. Clique para adiconar ou deixe o campo vazio")
    }

    await api.post("/movienotes", {
      title,
      description, 
      rating,
      tags
    })

    alert("Nova nota de filme criada com sucesso!")
    navigate(-1)
  }

  return (
    <Container>
     

    <main>
     <Form>
        <header>
        
            <button onClick={handleBack}>
              <FiArrowLeft />
              Voltar
            </button>
          

          <h2>Novo filme</h2>
        </header>
         <div className="inputs">
          <Input placeholder="Título"
          onChange={e => setTitle(e.target.value)}
          />
          <Input 
          type="number" 
          placeholder="Sua nota(de 0 a 5)"
          onChange={e => setRating(e.target.value)}
          />
         </div>

        <Textarea placeholder="Descrição"
        onChange={e => setDescription(e.target.value)}
        
        />

        <Section title="Marcadores">
          <div className="tags">
            {
              tags.map((tag, index) => (
                <MovieItem 
                key={String(index)}
                value={tag}
                onClick={() => {handleRemoveTag(tag)}}
                /> 
              ))
            }
           
            <MovieItem 
            isNew 
            placeholder="Nova tag"
            onChange={e => setNewTag(e.target.value)}
            value={newTag}
            onClick={handleAddTag}
            />
          </div>
        </Section>

     
          <Button 
          title="Salvar"
          onClick={handleNewMovie}
          />
     
  
    </Form>
  
  </main>
</Container>
  )
}