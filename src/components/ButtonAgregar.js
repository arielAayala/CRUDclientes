import { useState } from "react"
import { useContext } from "react"; 
import context from "../context/context";
export default function ButtonAgregar() {
    
    const {addBook,getBooks} = useContext(context)

    const [input, setInput] = useState({
        libro:"",
        autorLibro:"",
        edicionLibro:""
    });

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleAdd = async(e) =>{
        e.preventDefault()
        try {
            await addBook(input.libro,input.autorLibro,input.edicionLibro)
            getBooks()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregar">
                Agregar
            </button>

            <div className="modal fade" id="modalAgregar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Agregar Libro</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <form className="form-signin w-50 m-auto" onSubmit={handleAdd}>
                                    <input className="form-control my-1" name="libro" onChange={handleChange} placeholder="Nombre del libro"></input>
                                    <input className="form-control my-1" name="autorLibro" onChange={handleChange} placeholder="Autor del libro"></input>
                                    <input className="form-control my-1" name="edicionLibro" onChange={handleChange} placeholder="Edicion del libro"></input>
                                    <button type="submit" className="btn btn-primary">Agregar</button>
                                </form>
                            </div> 
                        </div>   
                    </div>
                </div>
            </div>
        </>
        
    )
};
