import {useState} from "react";
export default function Exercicio10() {

  const[quantidade, setQuantidade]= useState(0);
  const[preco,setPreco]= useState(0);
  const[resultado,setResultado]=useState (0);
  
  function calcular()
  {

  let subtotal, desconto, vf;

 subtotal = Number(quantidade) * Number (preco);
 desconto = Number ((subtotal)*10/100);
 vf = Number(subtotal) - Number (desconto);
  

  setResultado ("subtotal:" + subtotal   +    ",  desconto:" + desconto   +   ", valor final:" + vf );
  } 
    return (
      <div>
        <h1>Exercicio 10</h1>

       <div className="conteudo">
    
    
     <form>
  
   <p>
  Digite o valor da hora:<br />
  <input type="text" value={preco} onChange={(e) => setPreco (e.target.value)} />
       </p>

       <p>
  Digite a quantidade de horas:<br />
  <input type="text" value={preco} onChange={(e) => setPreco (e.target.value)} />
       </p>

       <p>
<input type='button' value='Exercicio 10' onClick={calcular} />
</p>
   
<p>
  <a  href="/">Voltar</a>
</p>

</form>
</div>
    </div>
    );
}