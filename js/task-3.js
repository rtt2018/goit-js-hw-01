function getElementWidth(content, padding, border) {
  return (
    (Number.parseFloat(content) * 10 +
      Number.parseFloat(padding) * 20 +
      Number.parseFloat(border) * 20) /
    10
  );
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
