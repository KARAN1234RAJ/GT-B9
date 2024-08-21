function outermost(a) {
  function outer(b) {
    function inner(c) {
      console.log("outermost function: a = ", a);
      console.log("outer function: b = ", b);
      console.log("inner function: c = ", c);
    }
    inner(3);
  }
  outer(2);
}
outermost(1);
