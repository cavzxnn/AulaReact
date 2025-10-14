import {useState} from "react";
export default function Exercicio6() {
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
        <h1>Exercicio 6</h1>

       <div className="conteudo">
    
    
     <form>
  
   <p>
  Digite a quantidade:<br />
  <input type="text" value={quantidade} onChange={(e) => setQuantidade (e.target.value)} />
       </p>

       <p>
  Digite o preço:<br />
  <input type="text" value={preco} onChange={(e) => setPreco (e.target.value)}/>
       </p>

       <p>
<input type='button' value='Exercicio 06'onClick={calcular} />
</p>
<p>
     <b>Resultado</b> <br />
     quantidade é {quantidade} <br />
     Preço do produto {preco} <br />
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