import { Card } from "primereact/card"

//Sidebar
import BarralLeft from "../components/BarralLeft";
import BarralRight from "../components/BarralRight";

export const Second = () => {
    return (
        <div> <h2>Cuidados a la hora de correr</h2>
        <div style={{display: 'flex'}}>
        <BarralRight/>
        <Card>
    <div className="styleContainerTexto">
        
        Sin embargo, es importante correr de forma segura y adecuada. Si eres nuevo en el running,
        es importante empezar poco a poco e ir aumentando la distancia y la intensidad
        gradualmente. También es importante escuchar a tu cuerpo y descansar cuando lo necesites.

        <ul className="styleTexto">Aquí hay algunos consejos para correr por correr de forma segura y adecuada:
        <li>Empieza poco a poco. No intentes correr demasiado rápido o demasiado lejos al principio.</li>
        <li>Escucha a tu cuerpo. Si te sientes dolorido, descansa.</li>
        <li>Hidrátate bien antes, durante y después de correr.</li>
        <li>Usa ropa y calzado cómodos.</li>
        <li>Corre en un lugar seguro.</li>
        <li>Si tienes alguna condición médica, es importante consultar con tu médico antes de empezar a correr.</li>
        </ul>
            </div>
        </Card>
        <BarralLeft/>
        </div>
    </div>
    )
}
