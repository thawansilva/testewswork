import { LineTable } from "./LineTable";

export const List = ({ data }) => {
  return (
    <>
      <table className="w-fit mx-auto mt-6 table-auto">
        <thead>
          <tr>
            <th className="p-1 border-black border">Marca</th>
            <th className="p-1 border-black border">Ano</th>
            <th className="p-1 border-black border">Combustível</th>
            <th className="p-1 border-black border">Modelo</th>
            <th className="p-1 border-black border">Número de Portas</th>
            <th className="p-1 border-black border">Cor</th>
            <th className="p-1 border-black border">Valor</th>
          </tr>
        </thead>
        <tbody>
          {data
            .sort((a, b) => (a.brand < b.brand ? -1 : 1))
            ?.map((element, index) => (
              <LineTable element={element} key={index} />
            ))}
        </tbody>
      </table>
    </>
  );
};
