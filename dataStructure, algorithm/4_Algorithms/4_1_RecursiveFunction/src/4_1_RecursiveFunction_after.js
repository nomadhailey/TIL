function solution(p) {
  // solution(")(")
  return correctParenthesis(p);
}

// 주의해야할 것은 올바른 문자열의 제일 처음은 여는 괄호, 제일 끝은 닫는 괄호여야 함
function isCorrect(s) {
  // 올바른 문자열을 구하는 함수
  let balance = 0; // 연 만큼만 닫아야 한다
  // s= ")(" 처음 c에 ')' 부터 들어감
  for (let c of s) {
    if (c === "(") {
      balance++; // 열 때마다 플러스
    } else {
      // 닫을 때마다 마이너스
      balance--; // 여기서 balance는 -1이 됨
    }

    if (balance < 0) {
      // balance가 -1이 되기 때문에 return false가 되고 s의 뒷 문자열인 '(' 는 진행을 안함
      // 밸런스가 0 이하
      return false;
    }
  }

  if (balance === 0) {
    // 밸런스가 여전히 맞으면 올바른 문자열
    return true;
  } else {
    return false;
  }
}

function splitParenthesis(s) {
  let balance = 0;
  let u, v; // u가 균형이 맞아야 되고 가장 작아야 한다

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === "(") {
      // 열 때마다 밸런스를 올려줌
      balance++;
    } else {
      balance--;
    }
    // 처음 인덱스가 0에서 시작하므로
    if (i !== 0 && balance === 0) {
      // 밸런스가 0이 되는 곳을 찾아줘야함
      u = s.slice(0, i + 1); // s[0]부터 s[i+1] 직전까지 복사하여 반환
      v = s.slice(i + 1, s.length);
      break;
    }
  }
  return [u, v];
}

function correctParenthesis(s) {
  // s = ")("
  if (s === "" || isCorrect(s) === true) {
    return s; // 올바른 문자열이면 그냥 그대로 출력해주면 됨
  }

  const [u, v] = splitParenthesis(s); // 입력받은 걸 u,v 두 개로 쪼갬

  if (isCorrect(u) === true) {
    // 이 문은 문제를 그대로 따라간 것.
    return u + correctParenthesis(v); // 3.u가 올바른 괄호 문자열이면 문자열 v에 대해 1단계부터 다시 수행
  }
  // else문부터 4번 과정 수행->u가 올바른 괄호 문자열이 아니라면
  // else문도 이해 안감
  else {
    let v_ = `(${correctParenthesis(v)})`; //v를 1번부터 다시 수행. 맨 앞을 열고 닫고
    let u_ = u.slice(1, u.length - 1);
    for (let c of u_) {
      if (c === "(") {
        v_ += ")";
      } else {
        v_ += "(";
      }
    }
    return v_;
  }
}

// console.log(solution("(()())()"));
console.log(solution(")("));
// console.log(solution("()))((()"));
