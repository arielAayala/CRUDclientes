export default function Fila(props){
    const {id,nombre,apellido,direccion,numero,email} = props
    return(
        <tr><td>{id}</td>
                <td>{nombre}</td>
                <td>{apellido}</td>
                <td>{direccion}</td>
                <td>{numero}</td>
                <td>{email}</td></tr>
    )
}