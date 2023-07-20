import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"

import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useNavigate } from "react-router-dom"

import { Container, Form, Avatar } from "./styles"

import { Button } from "../../components/Button"
import { Input  } from "../../components/Input"
import { useState } from "react"


export function Profile(){
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  //Ao recarregar a página vai manter o avatar do user e verificar se tem, caso não tiver, coloca um avatar padrão
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  //caso o usuário já tenha avatar, colocar aqui.
  const [avatar, setAvatar] = useState(avatarURL)
  //Carregar nova imagem do avatar
  const [avatarFile, setAvatarFile] = useState(null)

  const navigate = useNavigate()

  function handleBack(){
    navigate(-1)
  }

 async function handleUpdateProfile(){
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userDataUpdated = Object.assign(user, updated)

    await updateProfile({user: userDataUpdated, avatarFile })
  }

  function handleChangeAvatar(event){
    //pergar o arquivo
    const file = event.target.files[0]
    //guardar o avatar que o user escolheu
    setAvatarFile(file)
    //gerar uma URL para exibir o avatar que o user escolher
    const showImage = URL.createObjectURL(file)
    setAvatar(showImage)
  }

  return (
    <Container>
        <header>
         
            <button type="button" onClick={handleBack}>
              <FiArrowLeft />
            </button >
         
        </header>

        <Form>
          <Avatar>
            <img src={avatar} 
            alt="foto do usuário"
             />

            <label htmlFor="avatar">
              <FiCamera />
              <input 
               id="avatar" 
              type="file" 
              onChange={handleChangeAvatar}
              />
            </label>
          </Avatar>

          <div className="inputs">
            <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
            value={name}
            onChange={e => setName(e.target.value)}
            />
            
             <Input
            placeholder="Email"
            type="text"
            icon={FiMail}
            value={email}
            onChange={e => setEmail(e.target.value)}
            />

            <Input
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
            onChange={e => setOldPassword(e.target.value)}
            />

            <Input
            placeholder="Nova senha"
            type="password"
            icon={FiLock}
            onChange={e => setNewPassword(e.target.value)}
            />
          </div>

      
         <Button title="Salvar" onClick={handleUpdateProfile}/>
         
        </Form>
    </Container>
  )
}