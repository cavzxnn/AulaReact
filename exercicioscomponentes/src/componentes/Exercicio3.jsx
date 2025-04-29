export default function Exercicio3( {valor,taxa, tempo} )
{
    let parcela = valor + (valor*(taxa*taxa/100) * tempo)

    return(
        <dev>
            

            O valor da Parcela atualizado é {parcela}
        </dev>
    )
}