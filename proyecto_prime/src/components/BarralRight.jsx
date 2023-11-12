import CalculadoraImc from "./CalculadoraImc";
import { Image } from 'primereact/image';
import imageFiles from "../img"

const BarralRight = () => {
    return (
    <div className="containerRight">
        <div className="sidebar">
            <CalculadoraImc/>
            <p>Tabla de Indice de masa corporal</p>
            <Image src= {imageFiles.IMC} alt="Image" width="250"/>
        </div>
    </div>
    );
}

export default BarralRight;