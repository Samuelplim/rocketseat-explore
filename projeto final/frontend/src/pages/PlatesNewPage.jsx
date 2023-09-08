import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeftIcon, ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import {
  ButtonLarge,
  Footer,
  IngredientTag,
  InputLarge,
  NavMenu,
} from "../components";
import {
  createPlates,
  findByIdPlate,
  deleteByIdPlate,
} from "../services/plates.service";

export const PlatesNewPage = () => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });
  const { id } = useParams();

  const [image, setImage] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [ingredientNew, setingredientNew] = useState("");

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const handleNewPlate = async () => {
    if (!form.name) {
      return alert("Digite o nome do prato.");
    }
    if (!form.category) {
      return alert("Selecione uma categoria.");
    }
    if (!form.price) {
      return alert("Digite o preço do prato.");
    }
    if (!form.description) {
      return alert("Descreva seu do prato.");
    }
    if (!image) {
      return alert("Selecione uma foto do seu prato.");
    }
    if (ingredients.length <= 0) {
      return alert("Adicione ingredientes do seu prato.");
    }
    const res = await createPlates({ ...form, ingredients: [...ingredients] });
    console.log(res);
  };

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
  const handleDeletePlate = async (id) => {
    if (window.confirm("Você realmente deseja excluir o prato?")) {
      await deleteByIdPlate(id);
    }
  };

  useEffect(() => {
    const fetchPlateById = async (id) => {
      const response = await findByIdPlate(id);
      setForm({
        name: response.data.name,
        price: response.data.price,
        description: response.data.description,
        category: response.data.category,
      });
      setIngredients(response.data.ingredients);
      setImage(response.data.image);
    };

    id && fetchPlateById(id);
  }, []);
  return (
    <>
      <NavMenu />
      <main className="bg-dark-400 px-8 pt-3 pb-12 flex flex-col gap-6">
        <button className="flex items-center" onClick={goBack}>
          <ChevronLeftIcon className="h-5 w-5" />
          <p>voltar</p>
        </button>
        <p className="text-2xl">{id ? "Editar prato" : "Novo prato"}</p>

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
            value={form.name}
            onChange={handleChange}
            className="bg-dark-800 px-3 py-3 font-roboto rounded-lg"
            placeholder="Ex.: Salada Ceasar"
          />
        </div>

        <div className="flex flex-col gap-2" id="category">
          <span className="text-light-400 font-roboto">Categoria</span>
          <select
            name="category"
            className="py-3 px-8 gap-2 bg-dark-900 flex items-center rounded-lg"
            onChange={handleChange}
            value={form.category}
          >
            <option defaultValue={form.category ? form.category : ""}>
              {form.category ? form.category : "Escolha uma opção"}
            </option>
            <option>Refeições</option>
            <option>Prato principais</option>
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
            value={form.price}
            onChange={handleChange}
            className="bg-dark-800 px-3 py-3 font-roboto rounded-lg"
            placeholder="R$ 00,00"
          />
        </div>

        <div className="flex flex-col gap-2" id="description">
          <span className="text-light-400 font-roboto">Descrição</span>
          <textarea
            onChange={handleChange}
            value={form.description}
            name="description"
            className="bg-dark-800 px-3 py-3 font-roboto resize-none rounded-lg"
            rows="5"
            cols="33"
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          ></textarea>
        </div>

        {id ? (
          <div className="flex gap-8">
            <ButtonLarge
              title="Excluir prato"
              className="bg-dark-800"
              onClick={handleDeletePlate}
            />
            <ButtonLarge
              title="Salvar alterações"
              className="bg-tints-tomato-400"
            />
          </div>
        ) : (
          <ButtonLarge
            title="Criar prato"
            className="bg-tints-tomato-400"
            onClick={handleNewPlate}
          />
        )}
      </main>
      <Footer />
    </>
  );
};
