export default function Exercicio1({fah})
{
    let cel = (Number(fah)- 32) *5/9;
    return (
      
        <div>
              <h3>chamada para o exercicio 1</h3>
               A conversão de 100°F para Celsius é {cel}
               A conversão de 70°F para Celsius é {cel}
        </div>
    )
}