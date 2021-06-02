//import axios from 'axios'


// 로그
export const logger = (store) => (next) => (action) => {
  // console.log('   ' + action?.type, '   payload : ', action.payload);
  console.log(`   ${action?.type}`);
  next(action);
};

// 에러 리포트
export const errorReport = (store) => (next) => (action) => {
  // 에러 dispatch인 경우
  if (action.type.includes("_ERROR")) {
    // slack 
    // action.type, action.payload, store 포함해 전달

  }
}