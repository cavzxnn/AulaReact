import "./App.css";


export default function App()
{
    const estilo = {
        color :"pink",
        textAlign: "center",
        backgroundColor: "black",
        padding: "10px"
    };
    return (
        <div className="conteudo">
            <h1>Estudo CSS</h1>
            

            <p>
                o CSS (<i>Cascading style sheets</i>) é uma linguagem
                ultilizada para estilizar as <b>páginas web</b>. Com elas
                podemos definir
            </p>
            <ul>
                <li>Cores de fundo, texto e dos elementos    </li>
                <li>Fontes  e tamanho das letras</li>
                <li>Posicionamento dos elementos na página</li>
                <li>Espaçamento, bordas, sombras, etec.</li>
                <li>Efeitos visuais e animações</li>
            </ul>

          <h3 style= {estilo}> gatinho potente </h3>

            <p className="centro">


                <img src="gato.jpg"/>


            </p>
        </div>
    );
}