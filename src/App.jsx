import { Form } from "./components/Form";
import { List } from "./components/List";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data, isLoading, error } = useFetch("http://localhost:3000/cars");

  return (
    <main className="my-20">
      <h1 className="text-center font-bold text-2xl">Teste WS Work</h1>
      <Form />
      {isLoading && <p className="mt-3 text-center">Carregando...</p>}
      {error && <p className="mt-3 text-center">Erro: {error.message}</p>}
      {data && <List data={data} />}
    </main>
  );
}
export default App;
