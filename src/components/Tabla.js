import { useContext,useEffect } from "react"
import context from "../context/context"
import DataTable from "react-data-table-component"


export default function Tabla() {

    const{getBooks,lstBooks} = useContext(context)

    useEffect(() => {
        getBooks()
        console.log("cargar")
    }, [])
    
    const column = [{
        name:"ID",
        selector:"id",
        sortable:true
    },
    {
        name:"Libro",
        selector:"libro",
        sortable:true
    },
    {
        name:"Autor",
        selector:"autor",
        sortable:true
    },
    {
        name:"Edicion",
        selector:"edicion",
        sortable:true
    }    


]

    return(
        <>
            <DataTable className="table-responsive border border-dark"
            columns={column} data={lstBooks} title="Libros" pagination fixedHeader fixedHeaderScrollHeight="200px"
            />

        </>
        
    )
};
