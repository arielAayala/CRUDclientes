import { useContext, useState } from "react";
import context from "../context/context";

export default function ButtonActualizar() {
    
    const{updateBook,getBooks} = useContext(context)

    const [input, setInput] = useState({
        id:"",
        libro:"",
        autorLibro:"",
        edicionLibro:""
    });

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleUpdate = async(e) =>{
        e.preventDefault()
        try {
            await updateBook(input.id,input.libro,input.autorLibro,input.edicionLibro)
            getBooks()
        } catch (error) {
            console.log(error)
        } finally{
            
        }
    }



    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalActualizar">
                Actualizar
            </button>

            <div className="modal fade" id="modalActualizar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Actualizar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <form className="form-signin w-50 m-auto" onSubmit={handleUpdate}>
                                    <input className="form-control my-1" name="id" onChange={handleChange} placeholder="ID del libro"></input>
                                    <input className="form-control my-1" name="libro" onChange={handleChange} placeholder="Nombre del libro"></input>
                                    <input className="form-control my-1" name="autorLibro" onChange={handleChange} placeholder="Autor del libro"></input>
                                    <input className="form-control my-1" name="edicionLibro" onChange={handleChange} placeholder="Edicion del libro"></input>
                                    <button type="submit" className="btn btn-primary">Actualizar</button>
                                </form>
                            </div> 
                        </div>   
                    </div>
                </div>
            </div>
        </>
    )
};
