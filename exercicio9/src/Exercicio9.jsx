export default function Exercicio9  ({ capital, juros, tempo})
{
    let montante = capital* Math.pow ( 1 + juros/ 100, tempo);
    
    return (
        <div>
       O montante é {montante}
        </div>
     );
}