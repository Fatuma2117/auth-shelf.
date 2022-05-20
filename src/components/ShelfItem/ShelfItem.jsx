import { useDispatch } from "react-redux";

function ShelfItem({item}){

      const dispatch = useDispatch();

const deleteFunc = () =>{
    dispatch({
        type: 'DELETE_ITEM',
        payload: item.id
    })
}

return(
    <>
            <li>{item.description}</li>
            <img src={item.image_url}/>
            <button onClick={deleteFunc}>DELETE</button>
    </>
)




}
export default ShelfItem;