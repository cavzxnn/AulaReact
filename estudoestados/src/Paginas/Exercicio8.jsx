import {useState} from "react";
export default function Exercicio8() {

  const[peso, setPeso]= useState(0);
  const[altura,setAltura]= useState(0);
  const[resultado,setResultado]=useState (0);
  
  function calcular()
  {

  let imc;

 imc= Number (peso) / (Number (altura)* Number (altura)),
  

  setResultado (+ imc );
  }
    return (
      <div>
        <h1>Exercicio 8</h1>

       <div className="conteudo">
    
    
     <form>
  
   <p>
  Digite o peso:<br />
  <input type="text"  value={peso} onChange={(e) => setPeso (e.target.value)}/>
       </p>

       <p>
  Digite a altura:<br />
  <input type="text" value={altura} onChange={(e) => setAltura (e.target.value)} />
       </p>

       <p>
<input type='button' value='Exercicio 08' onClick={calcular}  />
</p>
<p>
     <b>Resultado</b> <br />
     seu peso é : {peso} <br />
     sua altura : {altura} <br />
     IMC é {resultado}
    </p>  
<p>
  <a  href="/">Voltar</a>
</p>

</form>
</div>
    </div>
    );
}