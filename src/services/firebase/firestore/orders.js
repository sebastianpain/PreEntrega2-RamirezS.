import  { addDoc, collection, getDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const createOrderBuy = async (cliente ) => {
    const ordenCompra = await addDoc(collection(db, "orders"),{
        nombreCompleto: cliente.nombre,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        celular: cliente.celular,
    })

    return ordenCompra
}

export const getOrderBuy =  async (id) => {
    const ordenCompra = await getDoc(doc(db, "orders", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}