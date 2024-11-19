import ItemCount from './ItemCount'
import ItemList from './ItemList'
import dataJson from '../data.json'
import { useState, useEffect } from 'react'

const ItemListContainer = ( {greeting} ) => {

    const [products,setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // const getProducts = (inputData,time) => 
    //     new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if(inputData){
    //                 resolve(inputData);
    //             }
    //             else{
    //                 reject("Error");
    //             }
    //         },time)
    //     });

    // useEffect(() => {

    //     getProducts(dataJson,2000)
    //         .then(res => {
    //             console.log(res);
    //             setProducts(res);
    //         })
    //         .catch(() => console.log("Hay un error en los productos")); 

    // },[]);



    // Función para obtener los productos desde la API
    const getProducts = async () => {
        try {
            setLoading(true); // Mostrar estado de carga
            const response = await fetch('https://localhost:7028/api/Tienda/listar');

            // Verificar si la respuesta es exitosa
            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json(); // Convertir la respuesta a JSON
            console.log(data);
            setProducts(data); // Actualizar el estado con los productos
        } catch (err) {
            console.error('Error al obtener los productos:', err.message);
            setError(err.message); // Guardar el mensaje de error en el estado
        } finally {
            setLoading(false); // Ocultar estado de carga
        }
    };

    // Ejecutar la función al montar el componente
    useEffect(() => {
        getProducts();
    }, []); // Array de dependencias vacío para que solo se ejecute una vez


    return(
        <div className="container listContainer">
            <p>{greeting}</p>
            <ItemList products={products}/>
            {/* <ItemCount stock="8" initial="1"/> */}
        </div>
    )
}
export default ItemListContainer