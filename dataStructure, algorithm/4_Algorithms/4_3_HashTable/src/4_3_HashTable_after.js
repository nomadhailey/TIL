// 카테고리별로 전체 경우의 수에서 착용하지 않은 것의 경우의 수 +1 하고 다 구한 다음에 최소 한 개 의상은 입어야 하므로 -1을 해줌
function solution(clothes) {
  // JS에서는 MAP이 해쉬테이블
  const map = new Map(); // Map(0) {}

  for (let [item, category] of clothes) {
    // 디스트럭처링 할당
    if (map.has(category) === false) {
      map.set(category, 0); // Map(1) { 'headgear' => 0 } -> Map(2) { 'headgear' => 1, 'eyewear' => 0 }
    }
    map.set(category, map.get(category) + 1); // Map(2) { 'headgear' => 2, 'eyewear' => 1 }
  }

  let answer = 1;
  // Map.prototype.values : Map객체에서 요소값을 값으로 갖는 객체 반환
  // console.log(map.values()); // [Map Iterator] { 2, 1 }
  for (let el of map.values()) {
    answer *= el + 1;
    console.log(answer, "완"); // 3 -> 6
  }
  answer--; // 5 -> 아무것도 착용 안한 경우를 빼줘야 하므로
  return answer;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
// console.log([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']]);
