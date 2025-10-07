import {useState} from "react";
export default function Exercicio3() {
  const[valor,setValor]=useState (0);
  const[taxa,setTaxa]=useState (0);
  const[tempo,setTempo]=useState (0);
  const[resultado,setResultado]=useState (0);

  function calcular()
  {

  let parcela;

  parcela = (Number(valor) +  Number (valor)*( Number (taxa)*Number (taxa))/100)*Number (tempo) ;
 

  setResultado ( " valor da parcela:" + parcela);
  }
    return (
      <div>
        <h1>Exercicio 3</h1>

        <div className="conteudo">
   
    
     <form>
  
   <p>
  Digite o valor da prestação:<br />
  <input type="text" value={valor} onChange={(e) => setValor (e.target.value)} />
       </p>
       <p>
  Digite a taxa de juros:<br />
  <input type="text" value={taxa} onChange={(e) => setTaxa (e.target.value)} />
       </p>
       <p>
  Digite o tempo (em dias) de atraso:<br />
  <input type="text" value={tempo} onChange={(e) => setTempo (e.target.value)} />
       </p>

       <p>
<input type='button' value='Exercicio 03' onClick={calcular}  />
</p>
<p>
     <b>Resultado</b> <br />
     Valor da prestação é {valor} <br />
    taxa de juros é {taxa} <br />
    tempo é {tempo} <br />
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