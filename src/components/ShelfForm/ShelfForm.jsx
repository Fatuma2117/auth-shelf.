import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

function ShelfForm() {
    const history = useHistory();
  const [description, setDescription] = useState('');
  const [image_url,setImage_url] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_ITEM',
      payload: {description, image_url}
    })
   setDescription('');
   setImage_url('');
  }

  return (
      <>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="description"
        value={description}
        onChange={(e) => {setDescription(e.target.value)}}></input>
         <input
        placeholder="image url"
        value={image_url}
        onChange={(e) => {setImage_url(e.target.value)}}></input>
      <button>Submit!</button>
    </form>
    <button onClick={() => {history.push('/shelf')}}>back</button>
    </>
  );
}


export default ShelfForm;