export default function Exercicio10  ({ distancia, velocidade})
{
    let tempo = Number(distancia) / Number (velocidade) ;

    return (
        <div>
      o tempo estimado da viagem é {tempo} horas
        </div>
     );
}