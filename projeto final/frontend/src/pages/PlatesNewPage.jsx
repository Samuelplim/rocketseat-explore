import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import {
  ButtonLarge,
  Footer,
  IngredientTag,
  InputLarge,
  NavMenu,
} from "../components";

export const PlatesNewPage = () => {
  const [plate, setPlate] = useState();
  const [form, setForm] = useState({
    name: "",
    price: "",
    descrition: "",
  });
  const [image, setImage] = useState();
  const [ingredients, setIngredients] = useState(["banana"]);
  const [ingredientNew, setingredientNew] = useState("");
  const [nameFile, setNameFile] = useState("Selecione imagem");

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  console.log(image);

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddIngredient = () => {
    setIngredients((prevState) => [...prevState, ingredientNew]);
    setingredientNew("");
  };

  const handleRemoveIngredient = (deleted) => {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  };

  return (
    <>
      <NavMenu />
      <main className="bg-dark-400 px-8 pt-3 pb-12 flex flex-col gap-6">
        <button className="flex items-center" onClick={goBack}>
          <ChevronLeftIcon className="h-5 w-5" />
          <p>voltar</p>
        </button>
        <p className="text-2xl">Novo prato</p>

        <div className="flex flex-col gap-2" id="image">
          <span className="text-light-400 font-roboto">Imagem do prato</span>
          <label
            htmlFor="fupload"
            className="py-3 px-8 gap-2 bg-dark-800 flex items-center rounded-lg"
          >
            <ArrowUpTrayIcon className="h-6 w-6" />
            {image ? image.name : "Selecione imagem"}
          </label>
          <input
            name="image"
            type="file"
            title="fupload"
            id="fupload"
            className="hidden"
            onChange={handleChangeImage}
          />
        </div>

        <div className="flex flex-col gap-2" id="name">
          <span className="text-light-400 font-roboto">Nome</span>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="bg-dark-800 px-3 py-3 font-roboto rounded-lg"
            placeholder="Ex.: Salada Ceasar"
          />
        </div>

        <div className="flex flex-col gap-2" id="category">
          <span className="text-light-400 font-roboto">Categoria</span>
          <select
            name="select"
            className="py-3 px-8 gap-2 bg-dark-900 flex items-center rounded-lg"
          >
            <option value="valor1" selected>
              Refeições
            </option>
            <option value="valor2">Prato principais</option>
            <option value="valor3">Valor 3</option>
          </select>
        </div>

        <div className="flex flex-col gap-2" id="ingredients">
          <span className="text-light-400 font-roboto">Ingredientes</span>
          <div className="w-full overflow-y-auto flex gap-2 px-2 py-2 bg-dark-800 rounded-lg">
            <IngredientTag
              isNew
              placeholder="Adicionar"
              onChange={(e) => setingredientNew(e.target.value)}
              value={ingredientNew}
              onClick={handleAddIngredient}
            />
            {ingredients.map((ingredient, index) => (
              <IngredientTag
                key={String(index)}
                value={ingredient}
                onClick={() => {
                  handleRemoveIngredient(ingredient);
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2" id="price">
          <span className="text-light-400 font-roboto">Preço</span>
          <input
            type="text"
            name="price"
            onChange={handleChange}
            className="bg-dark-800 px-3 py-3 font-roboto rounded-lg"
            placeholder="R$ 00,00"
          />
        </div>

        <div className="flex flex-col gap-2" id="description">
          <span className="text-light-400 font-roboto">Descrição</span>
          <textarea
            onChange={handleChange}
            className="bg-dark-800 px-3 py-3 font-roboto resize-none rounded-lg"
            rows="5"
            cols="33"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          ></textarea>
        </div>

        <ButtonLarge title="Salvar alterações" />
      </main>
      <Footer />
    </>
  );
};
