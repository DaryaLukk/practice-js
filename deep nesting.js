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

// recursion -- подумать как сделать проще --
function getTreeValuesRs(result, tree) {
  const stack = Array.isArray(tree) ? tree : [tree];
  for (let i = 0; i < stack.length; i++) {
    if (stack[i].value) {
      result.push(stack[i].value);
    }

    if (stack[i].children) {
      if (i === stack.length - 1) {
        return getTreeValuesRs(result, stack[i].children);
      }
      getTreeValuesRs(result, stack[i].children);
    }
  }
  return result;
}

console.log(getTreeValues(tree));
console.log(getTreeValuesRs([], tree));
