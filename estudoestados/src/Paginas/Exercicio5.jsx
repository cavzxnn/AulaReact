import {useState} from "react";
export default function Exercicio5() {

  const[lado,setLado]=useState (0);
  const[resultado,setResultado]=useState (0);

  function calcular()
  {

  let quadrado;

  quadrado = Number(lado) * Number (lado);
  

  setResultado ("quadrado:"+ quadrado);
  }
    return (
      <div>
        <h1>Exercicio 5</h1>

       <div className="conteudo">
    
    
     <form>
  
   <p>
   Digite o valor do lado:<br />
  <input type="text" value={lado} onChange={(e) => setLado (e.target.value)}/>
       </p>

       <p>
<input type='button' value='Exercicio 05' onClick={calcular} />
</p>
<p>
     <b>Resultado</b> <br />
     Valor do lado  é {lado} <br />
     A area do {resultado}
    </p>   
<p>
  <a  href="/">Voltar</a>
</p>

</form>
</div>
    </div>
    );
}