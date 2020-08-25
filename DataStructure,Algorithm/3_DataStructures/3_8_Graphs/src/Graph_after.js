class Vertex {
  constructor(value, adjList = new Array()) {
    this.value = value;
    this.adjList = adjList;
  }
}

class Graph {
  constructor() {
    this.vertices = new Array(); // Graph { vertices: [] } // visited 때문에 필요한 것
  }

  insert(value, adjList) {
    // 1.graph.insert(0, []); 2.graph.insert(1, [0]);
    // graph.insert(3, [2]); graph.insert(4, [0, 2, 3]);
    const vertex = new Vertex(value, adjList); // 1. Vertex { value : 0, adjList : []} 2. Vertex {value : 1, adjList : [0]}
    const newInd = this.vertices.length; // 1. 0    2. 1

    adjList.forEach((index) => {
      // vertex와 adjacency list를 연결해주는 작업
      console.log("this.vertices", this.vertices); // this.vertices [ Vertex { value: 0, adjList: [] } ]
      this.vertices[index].adjList.push(newInd);
      console.log("this.vertices", this.vertices); // this.vertices [ Vertex { value: 0, adjList: [ 1 ] } ]
      // [ Vertex { value: 0, adjList: [ 1 ] } ]
    });

    this.vertices.push(vertex);
    // 1.[ Vertex { value: 0, adjList: [] } ]
    // 2.[ Vertex { value: 0, adjList: [1] }, Vertex {value : 1, adjList : [0]}]
    // console.log("this.vertices", this.vertices);
  }

  bfs(vertexInd, value) {
    // vertexInd : 트리와 달리 어디서부터 시작해야할지 입력을 받아야 함
    // vertexInd = 0
    // Uint8Array를 사용한 이유는 메모리를 적게 사용하기 위해서임. 만약 Array로 할거면 생성 후 0으로 채워줘야 함.
    // typed array로 아무거나 써도 됨. typed array로 할 경우 0이 알아서 채워짐
    const visited = new Uint8Array(this.vertices.length); // [ 0, 0, 0, 0, 0 ]. visited는 0 혹은 1만 요소로 가짐
    const path = new Array(); // path는 탐색한 경로
    const queue = new Array();
    queue.push(vertexInd); // [0]

    while (queue.length !== 0) {
      // queue.length = 1
      const vertInd = queue.shift(); // vertInd 0 (shift : 변경된 length값을 반환)

      if (visited[vertInd] === 0) {
        // visited === 0 이라는 것은 아직 순회를 하지 않았다는 의미
        path.push(vertInd); // path : [0]
        visited[vertInd] = 1; // visited : [1, 0, 0, 0, 0]
        // console.log("this.vertices", this.vertices);
        this.vertices[vertInd].adjList.forEach((index) => {
          queue.push(index);
          console.log("queue", queue);
        });
      }
    }

    return path;
  }
  // 질문 : dfs를 recursive로 구현해야 하는 이유
  dfs(vertexInd) {
    const visited = new Uint8Array(this.vertices.length);
    const path = new Array();
    const vertices = this.vertices;

    function recursive(vertInd) {
      // vertInd : 0
      console.log("vertInd", vertInd);
      if (visited[vertInd] === 1) {
        return;
      }

      path.push(vertInd); // [0]
      visited[vertInd] = 1;

      vertices[vertInd].adjList.forEach((index) => {
        recursive(index);
      });
    }

    recursive(vertexInd); // 트리는 인자가 무조건 rootnode여야 하는데 그래프는 시작점을 따로 지정을 해줘야 함

    return path;
  }
}

const graph = new Graph(); // Graph { vertices: [] }
graph.insert(0, []); // Graph { vertices: [ Vertex { value: 0, adjList: [] } ] }
graph.insert(1, [0]); // 질문-value를 순서대로 주입을 해줘야 하는지. 만약 이 부분 삭제할 경우 에러 발생
// Graph {
// vertices: [
//   Vertex { value: 0, adjList: [Array] },
//   Vertex { value: 1, adjList: [Array] }
// ]
//   }
// graph.insert(2, [1]);
// graph.insert(3, [2]);
// graph.insert(4, [0, 2, 3]);
// console.log("graph", graph);

console.log(graph.bfs(0)); // [ 0, 1, 4, 2, 3 ]
console.log(graph.dfs(0)); // [ 0, 1, 2, 3, 4 ]
