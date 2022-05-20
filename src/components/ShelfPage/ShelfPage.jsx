import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router'


function ShelfPage() {
  useEffect(()=>{
    getFunc()
  },[])

  const dispatch = useDispatch();
  const history = useHistory();
  const shelf = useSelector(store=> store.shelf)

  const getFunc = ()=> {
    dispatch({
      type: 'FETCH_SHELF',
    })


  }  
return (
    <div className="container">
      <h2>Shelf</h2>
      <ul>
        {
          shelf.map(item=>{
            return(
              <>
            <li>{item.description}</li>
            <img src={item.image_url}/>
              </>
            )
          })
        }
      </ul>
      <p>All of the available items can be seen here.</p>
      <button onClick={() => {history.push('/form')}}>Add new item</button>   
       </div>
  );
}

export default ShelfPage;
