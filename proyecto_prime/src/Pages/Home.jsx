import { Card } from "primereact/card"
//Sidebar
import BarralLeft from "../components/BarralLeft";
import BarralRight from "../components/BarralRight";

export const Home = () => {
    return (
    <div>
        <h2>Correr por Correr</h2>
        <div style={{display: 'flex'}}>
            <BarralRight/>
            <Card>
                <div className="styleContainerTexto">
                <ul>
                La práctica del running, o correr, se erige como una disciplina que combina la elegancia con la
                eficacia en la búsqueda del bienestar físico y mental.
                </ul>
                <ul>
                Esta actividad, en su simplicidad, ofrece una gran cantidad de beneficios que trasciende lo meramente
                físico y se convierte en una expresión de superación personal y perseverancia
                </ul>
                </div>
            </Card>
            <BarralLeft/> 
        </div>
    
    </div>
    
    )
}
