import { all, fork } from "redux-saga/effects";
import commonSaga from '@redux/common/saga';

export default function* rootSaga() {
  yield all([
    // 사가 입력
    fork(commonSaga),
  ]);
}
