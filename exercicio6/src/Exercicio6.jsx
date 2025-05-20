export default function Exercicio6  ({ quan, prec})
{
    let subt= Number(quan)*Number(prec);
    let desc=((subt*10)/100);
    let valorf = (subt-desc);
    return (
        <div>
            O subtotal de {subt} com o desconto de {desc} resulta em: {valorf}
        </div>
     );
}