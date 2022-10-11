import {useContext, useEffect} from "react";
import context from "../context/context";
import Fila from "./ElementoTabla"


export default function Tabla(){

    const {getUsers,lstClientes} =  useContext(context);


    useEffect(() => {
        getUsers()
        console.log("cargar")
    }, []);

    return(
    <div>
      <table className="w-100 table table-striped-columns">
        <thead className="text-center ">
          <tr>
            <th className="text-center ">id</th>
            <th className="text-center">nombre</th>
            <th className="text-center">apellido</th>
            <th className="text-center">direccion</th>
            <th className="text-center">numero</th>
            <th className="text-center">email</th>
          </tr>

        </thead>
        <tbody className="text-center">
          {
            lstClientes.map(item =>
            (
                <Fila {...item} key={item.id}></Fila>
            ))
          }
        </tbody>
      </table>
    </div>
    )
}