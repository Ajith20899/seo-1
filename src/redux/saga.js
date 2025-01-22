import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchUsers() {
  try {
      const response = yield call(
          axios.get,
          "https://jsonplaceholder.typicode.com/users"
        );
    console.log("Re");
    
    yield put({ type: "FETCH_USERS_SUCCESS", payload: response.data });
  } catch (e) {
    yield put({ type: "FETCH_USERS_FAILURE", payload: e.message });
  }
}

function* watchFetchUsers() {
  yield takeLatest("FETCH_USERS_REQUEST", fetchUsers);
}

export default function* rootSaga() {
  yield all([watchFetchUsers()]);
}
