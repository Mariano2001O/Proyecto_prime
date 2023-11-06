import { Card } from "primereact/card"

//Sidebar
import BarralLeft from "../components/BarralLeft";
import BarralRight from "../components/BarralRight";

export const First = () => {
    return (
    <div> <h2>Los Beneficios de correr</h2>
    <div style={{display: 'flex'}}>
        <BarralRight/>
            <Card>
        <div className="styleContainerTexto">
        Correr por correr es una forma excelente de mejorar tu salud y tu bienestar.
        Si estás buscando una actividad física que sea divertida, desafiante y
        beneficiosa para tu salud,el running es una excelente opción.
        <ul className="styleTexto">
                    Beneficios Físicos:
                    <li>Mejora la salud cardiovascular</li>
                    <li>Reduce el riesgo de enfermedades crónicas</li>
                    <li>Ayuda a controlar el peso</li>
                    <li>Fortalece los huesos y los músculos</li>
                    <li>Mejora el equilibrio y la coordinación</li>
                    </ul>
                    <ul className="styleTexto">
                    Beneficios Mentales:
                    <li>Reduce el estrés y la ansiedad</li>
                    <li>Mejora el estado de ánimo</li>
                    <li>Aumenta la autoestima</li>
                    <li>Promueve la concentración y la atención</li>
                    </ul>
                </div>
            </Card>
            <BarralLeft/>
        </div>
    </div>
    )
}
