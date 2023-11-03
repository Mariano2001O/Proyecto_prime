import { Card } from "primereact/card"

//Sidebar
import BarralLeft from "../components/BarralLeft";
import BarralRight from "../components/BarralRight";

export const Second = () => {
    return (
        <div style={{display: 'flex'}}>
        <BarralLeft/>
        <Card>
    <div className="styleTexto">
        <p>El término "diseño del Santo Grial" en programación se refiere a un patrón de diseño de diseño web
        que busca lograr un diseño de página web flexible y equilibrado con un encabezado, una columna de contenido y 
        una barra lateral, todo en un diseño de tres columnas.</p> 
        El nombre "Santo Grial" se originó en la idea de que encontrar la mejor manera de crear este diseño era
        un desafío difícil de lograr, similar a la búsqueda del Santo Grial en las leyendas artúricas.
        El diseño del Santo Grial generalmente implica el uso de HTML y CSS para lograr la estructura y el estilo deseados.
        Los elementos clave del diseño del Santo Grial son:
        Una columna central de contenido: Aquí se muestra el contenido principal de la página, como texto, imágenes y 
        otros elementos relevantes.
        Un encabezado y un pie de página: Estos elementos encierran el contenido y proporcionan información adicional,
        como el logotipo, el menú de navegación y los datos de contacto en el encabezado, y los enlaces de pie de página
        en la parte inferior.
        Dos barras laterales: Estas barras laterales, una a la izquierda y otra a la derecha del contenido central, a menudo se
        utilizan para incluir elementos como widgets, menús secundarios o anuncios.
        El desafío principal en el diseño del Santo Grial es crear una estructura que se adapte de manera efectiva a diferentes
        tamaños de pantalla y dispositivos, lo que implica el uso de técnicas de diseño web responsivo. Esto puede requerir la
        implementación de CSS para asegurarse de que las columnas se ajusten y se reorganicen según sea necesario para
        proporcionar una experiencia de usuario óptima en dispositivos móviles y de escritorio.
        Es importante mencionar que, con los avances en diseño web y CSS, algunos de los desafíos históricos asociados con el
        diseño del Santo Grial se han vuelto menos prominentes, pero el concepto sigue siendo relevante en la comunidad de
        diseño web como un ejemplo de un diseño de página web flexible y adaptable.
            </div>
        </Card>
        <BarralRight />
        </div>
    )
}
