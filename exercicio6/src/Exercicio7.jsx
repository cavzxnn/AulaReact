export default function Exercicio7 ({n1,n2,n3})
{
    let valorT= Number (n1) + Number (n2) + Number (n3);
    let res = (valorT/3);
    return(
    <div>
        A media das notas : {n1}, {n2} e {n3} vai ser {res}
    </div>
    );
}