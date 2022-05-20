import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchShelf(){
    try {
       
        const response = yield axios.get('api/shelf/');
        
        console.log(response)

       yield put({type: 'SET_SHELF', payload: response.data})
           

    }
    catch(error){
        console.log('Shelf get request failed', error)
    }
}

function* createItem(action){
    const response = yield axios({
        method: 'POST',
        url: '/api/shelf',
        data: action.payload
    })
    yield put({type: 'FETCH_SHELF' })
}

function* deleteItem(x){
    const response = yield axios({
        method: 'DELETE',
        url: `/api/shelf/${x.payload}`,
    });
    yield put({type:'FETCH_SHELF'})
}

function* shelfSaga(){
    yield takeEvery('FETCH_SHELF', fetchShelf)
    yield takeEvery('CREATE_ITEM', createItem)
    yield takeEvery('DELETE_ITEM', deleteItem)
}


export default shelfSaga;