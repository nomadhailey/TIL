class BinaryTree {
  constructor(array) {
    this.array = array;
  }
  /* 1/3. node->left->right */
  preorder() {
    let s = "";
    const array = this.array; // [0, 1, 2, 3, 4]

    function recursive(index) {
      if (index >= array.length) {
        return;
      }

      s += `${array[index]} `; // parent
      recursive(index * 2 + 1); // left
      recursive(index * 2 + 2); // right
    }

    recursive(0);
    console.log("preorder", s); // 0 1 3 4 2
  }
  /* 2/3. left->node->right */
  inorder() {
    let s = "";
    const array = this.array;

    function recursive(index) {
      if (index >= array.length) {
        return;
      }

      recursive(index * 2 + 1);
      s += `${array[index]} `;
      recursive(index * 2 + 2);
    }

    recursive(0);
    console.log("inorder", s); // 3 1 4 0 2
  }
  /* 3/3. left->right->node */
  postorder() {
    let s = "";
    const array = this.array;

    function recursive(index) {
      if (index >= array.length) {
        return;
      }

      recursive(index * 2 + 1);
      recursive(index * 2 + 2);
      s += `${array[index]} `;
    }

    recursive(0);
    console.log("postorder", s); // 3 4 1 2 0
  }
  /* 왼쪽, 위쪽에 있는 것부터 탐색 */
  bfs(value) {
    // entries() 메서드는 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 Array Iterator 객체를 반환합니다.
    for (let [idx, el] of this.array.entries()) {
      if (el === value) {
        return idx;
      }
    }
    return false;
  }
  /* node->left->right */
  dfs(value) {
    let isFound = false; // 질문_isFound 설정 이유
    let foundValue = false;
    const array = this.array;

    function recursive(index) {
      if (index >= array.length || isFound === true) {
        return;
      }

      if (array[index] === value) {
        isFound = true;
        foundValue = index;
        return;
      }

      recursive(index * 2 + 1);
      recursive(index * 2 + 2);
    }

    recursive(0);
    return foundValue;
  }
}

// tree = new BinaryTree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
tree = new BinaryTree([0, 1, 2, 3, 4]);
tree.preorder(); // 0 1 3 4 2
tree.inorder(); // 3 1 4 0 2
tree.postorder(); // 3 4 1 2 0

console.log(tree.bfs(4));
// console.log(tree.bfs(17));

console.log(tree.dfs(2));
// console.log(tree.dfs(11));
