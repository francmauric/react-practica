function Product() {
    return <div>
        <h1>Producto de otro componente</h1>
    </div>
}

/* cuando exporto la funcion puedo llamarlo haciendo desustructuracion con {} en el import */
export function Navbar(){
    return <h1>Navbar</h1>
}


/* cuando utilizo el export default se exporta todo el archivo y se lo importa al archivo entero */
export default Product