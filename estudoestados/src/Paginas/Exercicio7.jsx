import {useState} from "react";
export default function Exercicio7() {

  const[n1, setN1]= useState(0);
  const[n2,setN2]= useState(0);
  const[n3,setN3]= useState(0);
  const[resultado,setResultado]=useState (0);

  function calcular()
  {

  let aritmetica, total;

  total = Number(n1) + Number(n2) + Number(n3) ;
  aritmetica = Number(total)/ 3;



  setResultado ("Media aritmética:" + aritmetica );
  }
    return (
      <div>
        <h1>Exercicio 7</h1>

       <div className="conteudo">
    
    
     <form>
  
   <p>
  Digite nota 1:<br />
  <input type="text" value={n1} onChange={(e) => setN1(e.target.value)} />
       </p>

       <p>
  Digite nota 2:<br />
  <input type="text" value={n2} onChange={(e) => setN2 (e.target.value)} />
       </p>

       <p>
  Digite nota 3:<br />
  <input type="text" value={n3} onChange={(e) => setN3 (e.target.value)} />
       </p>

       <p>
<input type='button' value='Exercicio 07' onClick={calcular} />
</p>
<p>
     <b>Resultado</b> <br />
   primeira nota é {n1}  <br />
   segunda nota é {n2}  <br />
   terceira nota é {n3}  <br />
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