import {useState} from "react";
export default function Exercicio9() {

  const[valor, setValor]= useState(0);
  const[juros,setJuros]= useState(0);
  const[tempo,setTempo]= useState(0);
  const[resultado,setResultado]=useState (0);
  
  function calcular()
  {

  let montante;

 montante = Number (valor) * (Number (juros)* Number (tempo));
  

  setResultado ("montante :" + montante );
  }
    return (
      <div>
        <h1>Exercicio 9</h1>

       <div className="conteudo">
    
    
     <form>
  
   <p>
  Digite o valor principal:<br />
  <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} />
       </p>

       <p>
  Digite a taxa de juros:<br />
  <input type="text" value={juros} onChange={(e) => setJuros (e.target.value)} />
       </p>

       <p>
  Digite o tempo:<br />
  <input type="text" value={tempo} onChange={(e) => setTempo (e.target.value)} />
       </p>

       <p>
<input type='button' value='Exercicio 09' onClick={calcular}  />
</p>
<p>
     <b>Resultado</b> <br />
     valor principal é {valor} <br />
    juros {juros} <br />
    tempo {tempo} <br />
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