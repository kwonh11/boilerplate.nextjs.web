//import axios from 'axios'


// 로그
export const logger = (store) => (next) => (action) => {
  // console.log('   ' + action?.type, '   payload : ', action.payload);
  console.log(`   ${action?.type}`);
  next(action);
};

// 에러 리포트
export const errorReport = (store) => (next) => (action) => {
  if (action.type.includes("_ERROR")) {
    // slack 
    // action.payload, store 포함

  }
}