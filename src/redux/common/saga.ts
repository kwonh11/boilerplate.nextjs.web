import {
  call,
  delay,
  put,
  takeLatest,
  select,
  debounce,
  takeEvery,
} from "redux-saga/effects";
import { actions, types } from "./state";

interface BottomAlertPayload {
  open: boolean;
  content: string;
  bottom?: number;
}
interface SetBottomAlertAction {
  type: string;
  payload: BottomAlertPayload;
}
export function* requestBottomAlert(action: SetBottomAlertAction) {
  const { open, content, bottom } = action.payload;
  try {
    yield put(actions.setBottomAlert({ open, content, bottom }));
    const { open: opened } = yield select((state) => state.common.bottomAlert);
    if (opened) {
      yield delay(4000);
      yield put(actions.setBottomAlert({ open: false, content: "" }));
    }
  } catch (err) {
    // yield errorReport(err.message || err);
  }
}
export default function* watcher() {
  yield takeEvery(types.REQUEST_BOTTOM_ALERT, requestBottomAlert);
}
