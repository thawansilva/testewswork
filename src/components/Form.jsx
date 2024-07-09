import axios from "axios";
import React, { useState } from "react";

export const Form = () => {
  const [fabricationYear, setFabricationYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [numberOfDoors, setNumberOfDoors] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fakeapiws.vercel.app/cars", {
        id: String.toString(Math.round(Math.random() * 100)),
        timestamp_cadastro: new Date().getTime(),
        modelo_id: Math.round(Math.random() * 100),
        ano: ~~fabricationYear,
        combustivel: fuel,
        num_portas: ~~numberOfDoors,
        cor: color.toUpperCase(),
        nome_modelo: model.toUpperCase(),
        valor: ~~value,
        brand: ~~brand,
      })
      .then((response) => console.log(response.data))
      .then((error) => console.log(error));
    setBrand("");
    setColor("");
    setFabricationYear("");
    setFuel("");
    setNumberOfDoors("");
    setValue("");
    setModel("");
  };

  return (
    <div
      className="w-1/2 md:w-3/5 max-w-[600px] bg-indigo-300 p-3 mx-auto rounded-sm"
      onSubmit={handleSubmit}
    >
      <p className="font-bold text-xl text-center">Adicionar novo carro</p>
      <form action="" className="flex flex-wrap gap-1">
        <input
          type="number"
          className="focus:outline-0 valid:border-green-500 text-sm border w-full lg:w-1/3 max-w-[180px] border-2 border-gray-600 mb-3 rounded-sm py-1 px-2 mx-auto lg:mx-0 "
          id="marca"
          onChange={(e) => setBrand(e.target.value)}
          min={0}
          name="marca"
          pattern="^[\d]{4}$"
          placeholder="Marca"
          required
          value={brand}
        />
        <input
          type="number"
          max={2025}
          min={1970}
          className="focus:outline-0 valid:border-green-500 text-sm border w-full lg:w-1/3 max-w-[180px] border-2 border-gray-600 mb-3 rounded-sm py-1 px-2 mx-auto lg:mx-0 "
          id="ano"
          onChange={(e) => setFabricationYear(e.target.value)}
          value={fabricationYear}
          name="ano"
          pattern="^[\d]{4}$"
          placeholder="Ano de fabricação"
          required
        />
        <input
          type="text"
          className="focus:outline-0 valid:border-green-500 text-sm border w-full lg:w-1/3 max-w-[180px] border-2 border-gray-600 mb-3 rounded-sm py-1 px-2 mx-auto lg:mx-0 "
          id="combustivel"
          onChange={(e) => setFuel(e.target.value)}
          value={fuel}
          pattern="^[a-zA-Z]+$"
          name="combustivel"
          placeholder="Tipo de combustível"
          required
        />
        <input
          type="text"
          className="focus:outline-0 valid:border-green-500 text-sm border w-full lg:w-1/3 max-w-[180px] border-2 border-gray-600 mb-3 rounded-sm py-1 px-2 mx-auto lg:mx-0 "
          id="cor"
          onChange={(e) => setColor(e.target.value)}
          value={color}
          pattern="^[a-zA-Z]+$"
          name="cor"
          placeholder="Cor do carro"
          required
        />
        <input
          type="text"
          className="focus:outline-0 valid:border-green-500 text-sm border w-full lg:w-1/3 max-w-[180px] border-2 border-gray-600 mb-3 rounded-sm py-1 px-2 mx-auto lg:mx-0 "
          id="modelo"
          onChange={(e) => setModel(e.target.value)}
          value={model}
          name="modelo"
          placeholder="Modelo do carro"
          pattern="^[a-zA-Z]+$"
          required
        />
        <input
          type="number"
          className="focus:outline-0 valid:border-green-500 text-sm border w-full lg:w-1/3 max-w-[180px] border-2 border-gray-600 mb-3 rounded-sm py-1 px-2 mx-auto lg:mx-0 "
          id="portas"
          onChange={(e) => setNumberOfDoors(e.target.value)}
          value={numberOfDoors}
          pattern="^[1-9]$"
          name="portas"
          min={1}
          placeholder="Número de portas"
          required
        />
        <input
          type="number"
          className="focus:outline-0 valid:border-green-500 text-sm border w-full lg:w-1/3 max-w-[180px] border-2 border-gray-600 mb-3 rounded-sm py-1 px-2 mx-auto lg:mx-0 "
          onChange={(e) => setValue(e.target.value)}
          value={value}
          id="valor"
          name="valor"
          placeholder="Valor do carro"
          pattern="^[0-9]{2}(\.[0-9])?$"
          required
        />
        <button className="bg-indigo-700 text-indigo-100 py-1 px-2 rounded-sm w-fit mx-auto lg:mx-0 lg:ml-2">
          Adicionar
        </button>
      </form>
    </div>
  );
};
