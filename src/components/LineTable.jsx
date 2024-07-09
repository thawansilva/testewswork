import axios from "axios";
import React from "react";

export const LineTable = ({ element }) => {
  const handleDelete = (id) => {
    axios.delete("http://localhost:3000/cars/" + id);
  };
  const thousand = 1000;
  return (
    <tr className="odd:bg-gray-300 even:bg-white">
      <td className="p-1 border-black border">{element.brand}</td>
      <td className="p-1 border-black border">{element.ano}</td>
      <td className="p-1 border-black border">{element.combustivel}</td>
      <td className="p-1 border-black border">{element.nome_modelo}</td>
      <td className="p-1 border-black border">{element.num_portas}</td>
      <td className="p-1 border-black border">{element.cor}</td>
      <td className="p-1 border-black border">
        {(element.valor * thousand).toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </td>
      <td
        className="p-1 bg-red-300 border-black border hover:bg-red-500 cursor-pointer"
        onClick={() => handleDelete(element.id)}
      >
        Excluir
      </td>
    </tr>
  );
};
