import createReducer from "@utils/createReducer";

export const types = {
  // 하단 알림 창
  REQUEST_BOTTOM_ALERT: "common/REQUEST_BOTTOM_ALERT",
  SET_BOTTOM_ALERT: "common/SET_BOTTOM_ALERT",
};

interface BottomAlertPayload {
  open: boolean;
  content: string;
  bottom?: number;
}
export const actions = {
  requestBottomAlert: (payload: BottomAlertPayload) => ({
    type: types.REQUEST_BOTTOM_ALERT,
    payload,
  }),
  setBottomAlert: (payload: BottomAlertPayload) => ({
    type: types.SET_BOTTOM_ALERT,
    payload,
  }),
};
export const INITIAL_STATE = {
  bottomAlert: {
    open: false,
    content: "hello next",
  },
  envirionment: process.env.NODE_ENV,
};

interface SetBottomAlertAction {
  type: string;
  payload: BottomAlertPayload;
}

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_BOTTOM_ALERT]: (state: any, action: SetBottomAlertAction) => {
    state.bottomAlert = action.payload;
  },
});

export default reducer;
