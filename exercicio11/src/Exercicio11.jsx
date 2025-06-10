export default function Exercicio11  ({ custo})
{
    let imposto = Number(custo) *45/100
    let distribuidor = Number(custo) * 28/100
    let custofinal = Number(custo) + Number(distribuidor) + Number(imposto)

    return (
        <div>
      o custo final sera de {custofinal}
        </div>
     );
}