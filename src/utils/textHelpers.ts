import moment from "moment";

export const getLoginType = (loginType: string) => {
  switch (loginType) {
    case "EMAIL":
      return "이메일";

    case "KAKAO":
      return "카카오";

    case "NAVER":
      return "네이버";

    case "GOOGLE":
      return "구글";

    case "APPLE":
      return "애플";
  }
};

//
// 회원가입 폼 관련
//

export const checkEmailregExp = (email: string) => {
  const emailRule =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 이메일 정규식

  if (!emailRule.test(email)) {
    // 경고
    return false;
  }
  return true;
};

// 여기 수정필요
export const numberWithCommas = (number: number) => {
  const _number = Math.floor(number);
  if (isNaN(_number)) {
    return number;
  }
  // const result = _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // if (result === '0') {
  //   return '';
  // }
  return _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const phoneNumberhipun = (number: number | string) => {
  return number
    .toString()
    .replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/, "$1-$2-$3");
};

//
// 카룸 타입 관련
//
export const getTakeOver = (type: string) => {
  switch (type) {
    case "TAKEOVERRETURN":
      return "인수반납형";
    case "TAKEOVER":
      return "인수형";
    case "RETURN":
      return "반납형";
  }
};
export const getTitleByPayment = (paymentMethod: string) => {
  switch (paymentMethod) {
    case "INSTALLMENT":
      return "초기 인수비용 + 선납금";
    case "RENT":
      return "선납금 + 보증금";
    case "LEASE":
      return "초기 인수비용 + 선납금 + 보증금";
  }
};
export const getPaymentMethod = (type: string) => {
  switch (type) {
    case "CASH":
      return "현금";
    case "INSTALLMENT":
      return "할부";
    case "LEASE":
      return "리스";
    case "RENT":
      return "렌트";
  }
};
export const getFuelTypeWithText = (type: string) => {
  switch (type) {
    case "GASOLINE":
      return "휘발유";
    case "DIESEL":
      return "디젤";
    case "HYBRID":
      return "하이브리드";
    case "ELECTICITY":
      return "전기";
    case "LPG":
      return "LPG";
  }
};
export const getDriveTypeWithText = (type: number) => {
  switch (type) {
    case 1:
      return "후륜";
    case 2:
      return "전륜";
    case 3:
      return "4륜";
  }
};
export const getDiscountType = (type: string) => {
  switch (type) {
    case "NONE":
      return "없음";
    case "MULTICHILDFAMILY":
      return "다자녀(3명이상)";
    case "MENOFNATIONALMERIT":
      return "국가유공자";
    case "DISABLEDPERSON":
      return "장애인";
  }
};
export const getBuyerType = (type: string) => {
  switch (type) {
    case "PERSONALBUSINESSMAN":
      return "개인 사업자";
    case "INDIVIDUAL":
      return "개인";
    case "CORPERATIONBUSINESSMAN":
      return "법인 사업자";
  }
};

export const getMaximumDiscount = (
  cash: number,
  installment: number,
  rent: number,
  lease: number
) => {
  return Math.max(cash, installment, lease, rent);
};

// export const repaireMenu = [
//   {
//     searchName: '수리',
//     name: '수리(1,2급)',
//     img: require('../assets/repair/main/repair_1.png'),
//   },
//   {
//     searchName: '경정비',
//     name: '경정비(3급)',
//     img: require('../assets/repair/main/repair_2.png'),
//   },
//   {
//     searchName: '휠',
//     name: '휠/얼라이먼트',
//     img: require('../assets/repair/main/repair_3.png'),
//   },
//   {
//     searchName: '틴팅',
//     name: '틴팅',
//     img: require('../assets/repair/main/repair_4.png'),
//   },
//   {
//     searchName: '블랙박스',
//     name: '블박/오디오',
//     img: require('../assets/repair/main/repair_5.png'),
//   },
//   {
//     searchName: '세차',
//     name: '세차/디테일링',
//     img: require('../assets/repair/main/repair_6.png'),
//   },
//   {
//     searchName: '인테리어',
//     name: '인테리어',
//     img: require('../assets/repair/main/repair_7.png'),
//   },
//   {
//     searchName: '익스테리어',
//     name: '익스테리어',
//     img: require('../assets/repair/main/repair_8.png'),
//   },
//   {
//     searchName: '카스킨',
//     name: '카스킨',
//     img: require('../assets/repair/main/repair_9.png'),
//   },
//   {
//     searchName: '덴트',
//     name: '덴트/외형복원',
//     img: require('../assets/repair/main/repair_10.png'),
//   },
// ];

// export const repaireDetailMenu = [
//   {
//     searchName: '오일',
//     img: require('../assets/repair/menu/oil.png'),
//   },
//   {
//     searchName: '필터',
//     img: require('../assets/repair/menu/filter.png'),
//   },
//   {
//     searchName: '경정비',
//     img: require('../assets/repair/menu/light_repair.png'),
//   },
//   {
//     searchName: '판금',
//     img: require('../assets/repair/menu/sheeping.png'),
//   },
//   {
//     searchName: '외형복원',
//     img: require('../assets/repair/menu/ex_recovery.png'),
//   },
//   {
//     searchName: '휠',
//     img: require('../assets/repair/menu/wheel.png'),
//   },
//   {
//     searchName: '외부 튜닝',
//     img: require('../assets/repair/menu/ex_tuning.png'),
//   },
//   {
//     searchName: '틴팅',
//     img: require('../assets/repair/menu/tinting.png'),
//   },
//   {
//     searchName: '실내용품',
//     img: require('../assets/repair/menu/incargoods.png'),
//   },
//   {
//     searchName: '세차',
//     img: require('../assets/repair/menu/car_wash.png'),
//   },
//   {
//     searchName: '내부 튜닝',
//     img: require('../assets/repair/menu/in_tuning.png'),
//   },
//   {
//     searchName: '카스킨',
//     img: require('../assets/repair/menu/carskin.png'),
//   },
// ];

export const getSelectTime = (openTime: string, closeTime: string) => {
  const returnTimeArr = [];
  let setOpen;

  const defaultopen = moment(openTime, "H:m:S");
  const present = moment();
  const checkToday = false;

  // if (present.format('Y-M-D') === moment(picker).format('Y-M-D')) {
  //   checkToday = true;
  // }

  const close = moment(closeTime, "H:m:S");
  const setTime1 = moment(openTime, "H");
  const setTime2 = moment(openTime, "H").add("30", "m");
  const setTime3 = moment(openTime, "H").add("1", "h");
  const openStartTimeSet = [setTime1, setTime2, setTime3];

  for (let setArr = 0; setArr < openStartTimeSet.length; setArr++) {
    const timeDiff = moment
      .duration(defaultopen.diff(openStartTimeSet[setArr]))
      .asMinutes();
    if (timeDiff >= 0) {
      setOpen = openStartTimeSet[setArr];
      break;
    }
  }

  const _duration = moment.duration(close.diff(setOpen)).asMinutes();
  const max_repeat = Math.floor(_duration / 30);

  for (let i = 0; i < max_repeat; i++) {
    if (i === 0) {
      const i_time = moment(setOpen).format("HH:mm");
      const disabled = checkToday
        ? moment.duration(present.diff(setOpen)).asMinutes() > 0
        : false;

      const params = {
        time: i_time,
        dup: disabled,
      };
      returnTimeArr.push(params);
    } else {
      const i_time = moment(setOpen.add("30", "m")).format("HH:mm");
      const disabled = checkToday
        ? moment.duration(present.diff(setOpen)).asMinutes() > 0
        : false;
      const params = {
        time: i_time,
        dup: disabled,
      };
      returnTimeArr.push(params);
    }
  }

  // const close = moment(closeTime, "H:m:S");
  return returnTimeArr;
};

//
// 시간 관련 텍스트 헬퍼
//

// 2020-08-07 -> 2020.08.07
export const changeCreatedAt = (day: string) => {
  const returnString = moment(day).format("YYYY.MM.DD");

  return returnString;
};

// 2020-08-07 -> 2020.08.07
export const timeCut = (day: string) => {
  let returnTime = "";
  const current = moment().format("YYYY.MM.DD");
  const valueDay = moment(day).format("YYYY.MM.DD");

  if (current === valueDay) {
    returnTime = moment(day).format("HH:mm:SS");
  } else {
    returnTime = moment(day).format("YYYY.MM.DD");
  }
  // console.log('returnTime', returnTime);

  return returnTime;
};

// 19:00:00 -> 19:00
export const sliceWeekTime = (time: string) => {
  const sliceTime = moment(time, "HH:mm:SS").format("HH:mm");

  return sliceTime;
};

// 2020-08-07 -> 금
export const getWeekDayName = (date: string) => {
  // date format : 'YYYY-MM-DD'

  const dayNamesShort = ["일", "월", "화", "수", "목", "금", "토"];
  const day = moment(date).format("d");

  return dayNamesShort[Number(day)];
};

export const leftDayCount = (dueto: any) => {
  const t1 = moment(dueto, "YYYY-MM-DD");
  const t2 = moment();
  // console.log(t1);
  // console.log(t2);
  // const leftDay = moment.duration(t1.diff(t2)).days();
  const leftDay = t2.diff(t1, "days");
  // console.log(leftDay);
  return leftDay;
};
