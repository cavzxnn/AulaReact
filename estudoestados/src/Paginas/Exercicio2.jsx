import {useState} from "react";
export default function Exercicio2() 
{
  
    const[fah,setFah]=useState (0);
    const[resultado,setResultado]=useState (0);
  
    function calcular()
    {
  
    let celsius ;
  
   celsius = (Number(fah) - 32 * 5 / 9) ;
  
  
    setResultado (" Temperatura Celsius:" + celsius);
    }
    return (
      <div>
        <h1>Exercicio 2</h1>
        <div className="conteudo">
     
    
     <form>
  
   <p>
  Digite a temperatura em graus Fahrenheit:<br />
  <input type="text"  value={fah} onChange={(e) => setFah (e.target.value)}/>
       </p>

       <p>
<input type='button' value='Exercicio 02' onClick={calcular} />
</p>
<p>
     <b>Resultado</b> <br />
     Temperatura Fahrenheit é {fah} <br />
     Temperatura Celsius é {resultado}
    </p>  
<p>
  <a  href="/">Voltar</a>
</p>

</form>

        </div>
        </div>
    );
}