const myFunc = () => {
  const a = 2;
  return function test() {
    console.log("a is " + a);
  };
};

const a = 1;

const test = myFunc();

test();
