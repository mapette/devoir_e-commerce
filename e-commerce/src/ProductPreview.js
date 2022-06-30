function ProductPreview(props) {
  return (
    <div>
      <h4>
        {props.name}
        <button type="image"
          onClick={event => {
             props.setId(props.id)
             }}
        ><img id={props.id} src={props.image} width="100" height="100"></img>
        </button>
      </h4>
    </div>
  );
}

export default ProductPreview;

