export default function Exercicio8  ({ altura, peso})
{
    let IMC = (Number(altura)*Number(altura)/Number(peso));
    
    return (
        <div>
          com a sua altura de {altura} e o peso de {peso} seu IMC será {IMC}.
        </div>
     );
}