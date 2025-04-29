export default function Exercicio4({ tipo, base, altura })
{
    if ( tipo == "triangulo" )
    {
        let area = (base*altura) /2;
        return (
            <div>
                O valor da area do triangulo é {area}
            </div>
        );
    }

    else
    if (tipo=="retangulo")
    {
        let area = base*altura;
        return (
            <div>
                O valor da area do retangulo é {area}
            </div>
        );
    }

    else
    {
        return (
            <div>
            </div>
        )
    }
}