import { useState,useContext } from "react"
import context from "../context/context";

export default function ButtonEliminar(){

    const [user, setUser] = useState("");

    const {deleteUser,getUsers} = useContext(context)

    const handleChange  = ({target:{name,value}}) => {
        setUser({...user,[name]:value}) 
    }

    const handleDelete = async(e) => {
        e.preventDefault()
        try {
            await deleteUser(user.id)
            getUsers()
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalEliminar">
            Eliminar
            </button>


            <div className="modal fade" id="exampleModalEliminar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Eliminar Cliente</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="text-center my-5">
                            <div className="form-signin w-25 m-auto">
                                <form  onSubmit={handleDelete}>
                                <input className="form-control my-1" name="id"  onChange={handleChange} placeholder="ID"></input>
                                <button className="w-100 btn btn-lg btn-primary" type="submit" >Eliminar Cliente</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}