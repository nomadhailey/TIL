class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  // array = [0, 1, 2, 3, 4]
  constructor(array) {
    // array로 받은 것을 node 형태로 변경
    const nodeArray = array.map((el) => new Node(el));
    // nodeArray
    //[Node { value: 0, left: null, right: null },
    // Node { value: 1, left: null, right: null },
    // Node { value: 2, left: null, right: null },
    // Node { value: 3, left: null, right: null },
    // Node { value: 4, left: null, right: null }]
    for (let i = 0; i < nodeArray.length; i++) {
      //nodeArray.length=5
      const leftInd = i * 2 + 1; // 1,3,5,7,9
      const rightInd = i * 2 + 2; // 2,4,6,8,10

      if (leftInd < nodeArray.length) {
        nodeArray[i].left = nodeArray[leftInd];
        console.log("nodeArray[0]", nodeArray[0]);
        // nodeArray[0].left = nodeArray[1]
        // nodeArray[1].left = nodeArray[3]
      }
      if (rightInd < nodeArray.length) {
        nodeArray[i].right = nodeArray[rightInd];
        // nodeArray[0].right = nodeArray[2]
        // nodeArray[1].right = nodeArray[4]
      }
    }
    // nodeArray_위의 for문의 결과값
    //[Node { value: 0, left: nodeArray[1], right: nodeArray[2] },
    // Node { value: 1, left: nodeArray[3], right: nodeArray[4] },
    // Node { value: 2, left: null, right: null },
    // Node { value: 3, left: null, right: null },
    // Node { value: 4, left: null, right: null }]

    // 위의 결과값을 세부적으로 파고들면 아래와 같음
    // [Node { value: 0, left: Node { value: 1, left: Node { value: 3, left: null, right: null }, right: Node { value: 4, left: null, right: null }}, right: Node { value: 2, left: null, right: null }},
    // Node { value: 1, left: Node { value: 3, left: null, right: null }, right: Node { value: 4, left: null, right: null } },
    // Node { value: 2, left: null, right: null },
    // Node { value: 3, left: null, right: null },
    // Node { value: 4, left: null, right: null }]

    this.root = nodeArray[0];
    console.log("nodeArray", nodeArray);
  }

  preorder() {
    let s = "";

    function recursive(node) {
      s += `${node.value} `;
      console.log("node.value", node.value); // 0 -> 1 -> 3 -> 4 -> 2
      if (node.left !== null) {
        recursive(node.left);
      }
      if (node.right !== null) {
        recursive(node.right);
      }
    }
    recursive(this.root);
    console.log(s); // 0 1 3 4 2
  }

  inorder() {
    let s = "";

    function recursive(node) {
      if (node.left !== null) {
        recursive(node.left);
      }
      s += `${node.value} `;
      if (node.right !== null) {
        recursive(node.right);
      }
    }
    recursive(this.root);
    console.log(s);
  }

  postorder() {
    let s = "";

    function recursive(node) {
      if (node.left !== null) {
        recursive(node.left);
      }
      if (node.right !== null) {
        recursive(node.right);
      }
      s += `${node.value} `;
    }
    recursive(this.root);
    console.log(s);
  }
  // bfs는 queue로 접근하면 좋음
  bfs(value) {
    const queue = new Array(); // [] //js의 array는 list와 비슷한 역할을 한다

    queue.push(this.root); // 리어쪽에 값을 넣음. root'노드'를 인자로 넣어줌(인덱스가 0인 루트 노드)
    console.log("queue", queue);
    // queue [
    //   Node {
    //     value: 0,
    //     left: Node { value: 1, left: [Node], right: [Node] },
    //     right: Node { value: 2, left: null, right: null }
    //   }
    // ]
    while (queue.length > 0) {
      // queue.length = 1
      // 큐가 빌 때까지 하는 것
      const node = queue.shift(); // front에 값을 빼줌. 그럼 처음에 0번 인덱스가 빠짐
      console.log("node", node);

      if (node.value === value) {
        return node;
      }

      if (node.left !== null) {
        // left차일드가 있으면 큐에 넣어줌
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return null;
  }

  dfs(value) {
    let isFound = false;
    let foundNode = null;

    function recursive(node) {
      if (isFound === true) {
        // 이 문이 필요한 이유는, 없으면 이미 찾았지만 멈추지 않고 계속 검사하게 됨.
        return;
      }

      if (node.value === value) {
        isFound = true;
        foundNode = node;
        return;
      }
      if (node.left !== null) {
        recursive(node.left);
      }
      if (node.right !== null) {
        recursive(node.right);
      }
    }
    recursive(this.root);

    return foundNode;
  }
}
// tree = new BinaryTree([0,1,2,3,4,5,6,7,8,9,10,11,12])
tree = new BinaryTree([0, 1, 2, 3, 4]);
tree.preorder(); //  0 1 3 4 2
tree.inorder();
tree.postorder();

console.log(tree.bfs(2));
// console.log(tree.bfs(17));

// console.log(tree.dfs(15));
// console.log(tree.dfs(11));
