import { useContext, useState } from "react"
import context from "../context/context"

export default function ButttonEliminar() {
    

    const {deleteBook,getBooks} = useContext(context)

    const [input, setInput] = useState({
        id:""
    });

    const handleChange = ({target:{name,value}}) => setInput({...input,[name]:value})

    const handleDelete = async (e) =>{
        e.preventDefault()
        try {
            await deleteBook(input.id)
            getBooks()
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEliminar">
                Eliminar
            </button>

            <div className="modal fade" id="modalEliminar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Eliminar</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="text-center">
                                <form className="form-signin w-50 m-auto" onSubmit={handleDelete}>
                                    <input className="form-control my-1" name="id" onChange={handleChange} placeholder="ID del libro"></input>
                                    <button type="submit" className="btn btn-primary">Eliminar</button>
                                </form>
                            </div> 
                        </div>   
                    </div>
                </div>
            </div>
        </>
    )
};
