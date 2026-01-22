function Product(props){
    return(
        <>
            <p>{props.title}</p>
            <p>{props.price}</p>
            <p>{props.instock}</p>
        </>
    )
};
export default Product;