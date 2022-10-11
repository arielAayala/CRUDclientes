import React ,{useState}from "react"
import {db} from "../services/firebase"
import dataBaseContext from "./context"
import { collection, doc,getDocs,setDoc,updateDoc,deleteDoc} from "firebase/firestore"



export default function FirestoreContext(props){
    const {children} = props

    const [clientes, setClientes] = useState([]);

    const incrementalCount = async() =>{
        let count = 0
        const lstDocs =  await getDocs(collection(db,"users"))
        lstDocs.forEach((i)=>{
            if (count < parseInt(i.id)){
                count =parseInt(i.id)
            }
        })
        return count + 1
    }

    const getUsers = async() =>{
        const snap = await getDocs(collection(db,"users"))
        const lstUsers = []
        snap.forEach((i)=>{
            lstUsers.push({...i.data(),id: i.id})
        })
        setClientes(lstUsers)
    }

    const createUser = async(name,surname,addres,phone,emailAddres) => {
        await setDoc(doc(db,"users", (await incrementalCount()).toString()),{
        "nombre":name,
        "apellido":surname,
        "direccion":addres,
        "numero": phone,
        "email": emailAddres
    })}

    const updateUser =  async(id,name,surname,addres,phone,emailAddres) => await updateDoc(doc(db,"users",id),{
        nombre:name,
        apellido:surname,
        direccion:addres,
        telefono: phone,
        email: emailAddres
    })

    const deleteUser = async(id)=> {
        await deleteDoc(doc(db,"users",id))
    }

    return (
        <dataBaseContext.Provider value={{getUsers,lstClientes:clientes,createUser,updateUser,deleteUser,incrementalCount}}>{children}</dataBaseContext.Provider>
    )
}