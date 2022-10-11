import ButtonEliminar from "../component/btnEliminar"
import Tabla from "../component/Tabla"
import ButtonAgregar from "../component/btnAgregar"
import ButtonActualizar from "../component/btnActualizar"
export default function Home(){
    
    return(
        <>
            <div className="container text-center my-4">
                <div className="row">
                    <div className="col">
                        <ButtonAgregar></ButtonAgregar>
                    </div>
                    <div className="col">
                        <ButtonEliminar></ButtonEliminar>
                    </div>
                    <div className="col">
                        <ButtonActualizar></ButtonActualizar>
                    </div>
                </div>
            </div>

            <div className="w-75 mx-auto">
                <Tabla></Tabla>
            </div>
        </>
    )
}