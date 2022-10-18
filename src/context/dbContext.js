import dbContext from "./context"
import {setDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore"
import {db} from "../services/firebase"
import { useState } from "react"


export default function FirebaseContext(props){
    const {children} = props
    const [books, setBooks] = useState([]);

    const incrementalCount = async () =>{
        let count = -1
        try {
            const snap = await getDocs(collection(db,"books"))
            snap.forEach((i)=>{
                if (parseInt(i.id)>count){
                    count= parseInt(i.id)
                }
            })
        } catch (error) {
            console.log("prueba")
            count = -1
        }
        
        return count + 1
    }

    const getBooks = async() =>{
        const lstBooks = []
        const snap = await getDocs(collection(db,"books"))
        snap.forEach((i)=>{
            lstBooks.push({...i.data(),id:i.id})
        })
        setBooks(lstBooks)
    }

    const addBook = async (nombre,autorLibro,edicionLibro) =>{
        await setDoc(doc(db,"books",(await incrementalCount()).toString()),{
            libro:nombre,
            autor:autorLibro,
            edicion:edicionLibro
        })
    }

    const updateBook = async(id,nombre,autorLibro,edicionLibro) =>{
        await updateDoc(doc(db,"books",id),{
            libro:nombre,
            autor:autorLibro,
            edicion:edicionLibro
        })
    }

    const deleteBook = async(id) =>{
        await deleteDoc(doc(db,"books",id))
    }


    return(<dbContext.Provider value={{lstBooks:books,getBooks,addBook,updateBook,deleteBook}}>{children}</dbContext.Provider>)
}