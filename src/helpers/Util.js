/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-destructuring */

/* 사용방법 
    import * as Util from "helpers/Util";
    Util.unit1k(10000000) -> 1,000,000
*/

// 천단위 콤마 찍기
export function unit1k(v) {
  let txtNumber = String(v);
  if (isNaN(txtNumber) || txtNumber === "") {
    // 숫자 형태의 값이 정상적으로 입력되었는지 확인
    txtNumber = "0";
  } else {
    const rxSplit = new RegExp("([0-9])([0-9][0-9][0-9][,.])"); // 정규식 형태 생성
    const arrNumber = txtNumber.split("."); // 입력받은 숫자를 . 기준으로 나눔. (정수부와 소수부분으로 분리)
    arrNumber[0] += "."; // 정수부 끝에 소수점 추가

    do {
      arrNumber[0] = arrNumber[0].replace(rxSplit, "$1,$2"); // 정수부에서 rxSplit 패턴과 일치하는 부분을 찾아 replace 처리
    } while (rxSplit.test(arrNumber[0])); // 정규식 패턴 rxSplit 가 정수부 내에 있는지 확인하고 있다면 true 반환. 루프 반복.

    if (arrNumber.length > 1) {
      // v를 마침표(.)로 분리한 부분이 2개 이상이라면 (즉 소수점 부분도 있다면)
      txtNumber = arrNumber.join(""); // 배열을 그대로 합칩. (join 함수에 인자가 있으면 인자를 구분값으로 두고 합침)
    } else {
      // v길이가 1이라면 정수부만 있다는 의미.
      txtNumber = arrNumber[0].split(".")[0]; // 위에서 정수부 끝에 붙여준 마침표(.)를 그대로 제거
    }
  }
  return txtNumber;
}
