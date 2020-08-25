// 해쉬테이블을 사용한 DP문제 중에서는 쉬운 편임. DP문제는 배열보다는 해쉬테이블로 푸는 게 유리함. 해쉬테이블, 배열 모두 상수시간만큼 걸리지만, 연속되서 가져오는 건 array가 유리. 그런데 DP문제는 가져오는 게 숫자가 아닐 수도 있고 언제 가져올지도 모르므로 해쉬테이블이 유리
function solution(n) {
  const hash = new Map();
  hash.set(1, 1);
  hash.set(2, 2);
  // console.log(hash); // Map(2) { 1 => 1, 2 => 2 }

  for (let i = 3; i < n + 1; i++) {
    const val = (hash.get(i - 1) + hash.get(i - 2)) % 1000000007;
    hash.set(i, val);
    console.log(hash); // Map(3) { 1 => 1, 2 => 2, 3 => 3 }
    // Map(4) { 1 => 1, 2 => 2, 3 => 3, 4 => 5 }
    // Map(5) { 1 => 1, 2 => 2, 3 => 3, 4 => 5, 5 => 8 }
  }

  answer = hash.get(n);
  return answer; // 5 8
}

console.log(solution(4)); // 5
console.log(solution(5)); // 8
// console.log(solution(10)); // 89
// console.log(solution(1000));
// console.log(solution(6000));
