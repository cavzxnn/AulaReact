import {useState} from "react";
export default function Exercicio1()
{
  const[numero,setNumero]=useState (0);
  const[resultado,setResultado]=useState (0);

  function calcular()
  {

  let quadrado, cubo;

  quadrado = Number(numero) * Number (numero);
  cubo = Number(numero) * Number (numero)* Number (numero);

  setResultado ("Quadrado:"+ quadrado+ " - cubo:" + cubo);
  }
    return (
      <div>
        <h1>Exercicio 1</h1>

       <div className="conteudo">
    
    <h3>Calculo do Quadrado/Cubo</h3>
    
     <form>
  
   <p>
  Digite um número qualquer:<br />
  <input type="text" value={numero} onChange={(e) => setNumero (e.target.value)}/>
       </p>

       <p>
<input type="button" value="Exercicio 01" onClick={calcular} />
</p>
  <p>
     <b>Resultado</b> <br />
     Número é {numero} <br />
     Resultado é {resultado}
    </p> 
<p>
  <a  href="/">Voltar</a>
</p>

</form>
</div>
    </div>
    );
}