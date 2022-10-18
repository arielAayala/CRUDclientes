import ButtonActualizar from "../components/ButtonActualizar"
import ButtonAgregar from "../components/ButtonAgregar"
import ButttonEliminar from "../components/ButttonEliminar"
import Tabla from "../components/Tabla"

export default function Home() {
    return(
        <>
            <div className="container text-center my-5">
                <div className="row">
                    <div className="col">
                        <ButtonAgregar/>
                    </div>
                    <div className="col">
                        <ButttonEliminar/>
                    </div>
                    <div className="col">
                        <ButtonActualizar/>
                    </div>
                </div> 
            </div>
            <div className="w-75 m-auto">
                <Tabla />
            </div> 
            
        </>
        
    )
};
