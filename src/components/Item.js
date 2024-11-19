const Item = ({title,description,prize,pictureURL}) => {
    return(
        <article className="Item">  
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={pictureURL} alt="imagenItem"/>
            <p>{prize}</p>
        </article>
    )
}
export default Item