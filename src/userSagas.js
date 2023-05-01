import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchUserData } from './userSlice';

function* fetchUserDataSaga(action) {
  try {
    const response = yield call(axios.get, `/api/users/${action.payload}`);
    yield put(fetchUserData.fulfilled(response.data));
  } catch (error) {
    yield put(fetchUserData.rejected(error));
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUserData.pending.type, fetchUserDataSaga);
}
