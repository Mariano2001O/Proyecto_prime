import { useState } from "react";

const CalculadoraImc = () => {
//Estados para almacenar peso, altura y resultado "IMC"
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setImc] = useState("");

//Formula IMC = peso / (altura^2)
//Funcion para calcular el Imc
    const calcularImc = () => {
    const pesoEnKg = parseFloat(peso);
    const alturaEnCm = parseFloat(altura);
    const alturaEnMetro = alturaEnCm / 100;

    setImc(pesoEnKg / (alturaEnMetro * alturaEnMetro));
    };

    return (
    <div>
        <h4>Calcule su indice de masa corporal (IMC)</h4>
        <input
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        />
        <input
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
        <button onClick={calcularImc}>Calcular IMC</button>
        <p>IMC: {imc}</p>
    </div>
    );
};

export default CalculadoraImc;