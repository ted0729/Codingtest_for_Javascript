function solution(letter) {
    const morse = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
    '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
    '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z'
  };
  // 모스 부호 문자열을 공백으로 나누어 각각의 모스 부호를 배열로 만듭니다.
  const morseCodeArray = letter.split(' ');

  // 각 모스 부호를 해독하여 join을 이용해 문자열로 변환한 후 answer에 추가합니다.
  const answer = morseCodeArray.map(code => morse[code]).join('');

  return answer;
}