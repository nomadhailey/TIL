class Node {
  constructor(value) {
    this.value = value;
    this.child = new Map(); // 처음에 어떤 문자열이 올지 몰라서 해쉬테이블로 구성을 함(키와 밸류를 갖는) // Map(0) {}
    this.sub_count = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node(null); // 처음에 헤드는 하나, 밸류가 null인것을 만들어줌. 헤드에서부터 child로 문자가 뻗어져나가는 것. child가 해쉬테이블로 되어 있음
    console.log(this.root); // Node { value: null, child: Map(0) {}, sub_count: 0 }
  }
  insert(word) {
    let curr = this.root;

    for (let c of word) {
      if (curr.child.has(c) === false) {
        curr.child.set(c, new Node(c)); // c라는 키에 노드 하나를 만들어서 붙여줌. value에 c라고 적어줌
      }
      curr.sub_count++; // 한 번 지나갈때마다 서브를 증가시키는 이유는,, 일단 루트노드에서부터 서브카운트를 유지시켜줌. 예를 들어 물음표가 다섯개짜리. 길이별로 트라이를 따로 따로 만들어줌. 찾아가는 데까지만 찾아가고 나머지는 서브 카운트를 리턴하면 답을 알 수 있게 됨. 이럴 경우 bft 과정을 거치지 않고 빠르게 답을 찾을 수 있음. 원래는 와일드카드부터는 bfs를 해야하는 비효율적으로 해야되는데 그렇게 안해도 됨. 예를 들어 abcd?를 찾는다치자 a(4), b(4), c(4), d(4)이므로 그 뒤에 ?를 안가더라도 4를 출력할 수 있음. 이게 가능한 이유는 이 문자열들이 총 길이가 5로 정해져있기 때문임->길이가 같은 애들만 따로 trie구조를 만듦. 즉 하나의 trie를 쓰면 그 안에는 길이가 몇 개인 것들만 들어있다라는 전제조건이 필수
      curr = curr.child.get(c);
    }

    curr.child["*"] = null; // 마지막엔 별표를 뭍여줌. 왜? 이 단어가 끝났다는 것을 보여주기 위해. 안 붙여줄 경우에는 frodo*와 frodoo를 구별하기 위해. 이렇게 마지막에 *를 붙여주는 게 많이 쓰이는 컨벤션. 이건 curr.set('*', null)과 같음.
  }

  countMatch(query) {
    let curr = this.root; // 루트부터 시작을 해서

    for (let c of query) {
      // 쿼리 문자열을 하나하나 받아서 찾아 내려가는 형태
      if (c === "?") {
        // 와일드카드가 등장을 하면->와일드 카드가 등장하면 그 이후로는 전부 와일드카드->바로 서브카운트 리턴
        return curr.sub_count;
      }

      if (curr.child.has(c) === false) {
        // 단어를 찾아가다가 더 이상 하위에 없는 경우에는 0을 리턴한다
        return 0;
      } // 여기까지 체크가 안되었으면 하위에 있는 것이므로

      curr = curr.child.get(c); // 현재 노드를 받아와서 다음 노드를 진행
    }

    return 1; // 와일드카드가 없는 경우에는 1을 리턴. 그러나 문제 제한사항때문에 실제로 1이 리턴되지는 않을 것
  }
}
// 1. 단어 길이로 나눠서 단어 길이별로 Trie를 따로 구성한다 2. 정방향/역방향 Trie를 따로 구성한다의 2가지 전략으로 접근
function solution(words, queries) {
  const tries = new Map(); // 단어의 길이는 10~1만까지 있으니 이걸 다 array로 만들기보다는 어떤 길이의 문자가 들어올지 모르니 해쉬테이블을 만드는 것이 좋음.
  const invTries = new Map();

  for (let word of words) {
    const n = word.length; // 5
    const invWord = word.split("").reverse().join(""); // console.log(invWord); odorf -> tnorf -> tsorf -> nezorf -> emarf -> oakak

    if (tries.has(n) === false) {
      // 길이 n짜리를 가지고 있지 않으면
      tries.set(n, new Trie()); // 길이 n짜리의 트라이를 새로 만들어줌
      invTries.set(n, new Trie());
    }
    tries.get(n).insert(word); // 거기에 각각 단어를 넣어줌
    invTries.get(n).insert(invWord);
  }

  const answer = new Array();
  for (let query of queries) {
    const n = query.length;

    if (tries.has(n) === false) {
      answer.push(0); // 길이에 해당하는 트라이가 존재하지 않으면 없는 단어이므로 그 때는 없다. 즉 0개의 카운트매치를 넣어줌
    } else if (query[0] !== "?") {
      // 첫 시작이 와일드카드가 아님->후위임
      answer.push(tries.get(n).countMatch(query)); // 정방향에 집어넣어주면 됨
    } else {
      // 그렇지 않은 경우->전위
      const invQuery = query.split("").reverse().join("");
      answer.push(invTries.get(n).countMatch(invQuery));
    }
  }

  return answer;
}

words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
queries = ["fro??", "????o", "fr???", "fro???", "pro?"];
console.log(solution(words, queries)); // [ 3, 2, 4, 1, 0 ]
