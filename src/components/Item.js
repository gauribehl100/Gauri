import'./Item.css'

function Item(props)
{  const itemName=props.name;
    return(
    
    <div>
        <p className="no">{itemName}</p>
{props.children}
    </div>
);
}

export default Item;

// props.children se <Item>kaise ho </Item>
// print hoga
// agar hum ak component ke andar koi content dalna chahte hai to aise dalte hai