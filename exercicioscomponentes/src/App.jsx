import Exemplo1 from "./componentes/Exemplo1"
import Exercicio1 from "./componentes/Exercicio1"
export default function App ()
{
  return(
    <div>
      <h1>Exercícios de Componentes</h1>
      <Exemplo1 numero1={10} numero2={5}/>
      <Exemplo1 numero1={50} numero2={45.98}/>
  




      <h1>Chamada para o Exercício 1</h1>
      <Exercicio1 fah="100"/>
      <Exercicio1 fah="70"/>
    </div>
  )
}