const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
        },
      ],
    },
    {
      value: 4,
      children: [
        {
          value: 5,
        },
        {
          value: 6,
        },
      ],
    },
  ],
};

// stack
function getTreeValues(tree) {
  const stack = [tree];
  const result = [];
  while (stack.length > 0) {
    const node = stack.shift(); // или pop
    if (node.value) {
      result.push(node.value);
    }
    if (node.children) {
      stack.push(...node.children);
    }
  }
  return result;
}

// recursion

console.log(getTreeValues(tree));
