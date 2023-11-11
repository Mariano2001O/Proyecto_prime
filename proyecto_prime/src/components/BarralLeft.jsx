// import { Image } from 'primereact/image';
// import imageFiles from "../img"


import Clima from "../components/Clima";
const BarralLeft = () => {
    return (
    <div className="containerLeft">
        <div className="sidebar">
            <Clima/>
            {/* <Image src= {imageFiles.Cocacola} alt="Image" width="250" /> */}
        </div>
    </div>
    );
}

export default BarralLeft;