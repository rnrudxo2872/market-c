export function splitNewLine(str: string): string[] {
  return str.split("\n");
}

type Recursive = {
  type?: (...args: any[]) => Recursive;
  args?: any[];
};

function recur(...args: any[]): Recursive {
  return { type: recur, args };
}

function loop<T extends Recursive>(
  fn: (n?: number, prevAcc?: T) => T | Recursive
) {
  let acc = fn();
  while (acc.type && acc.type === recur) {
    if (!acc.args) {
      throw new Error("!");
    }
    acc = fn(...acc.args);
  }
  return acc;
}

export function repeat<T = unknown>(time: number) {
  return function (fn: (acc: T, n: number) => T) {
    return function (init: T) {
      return loop<T>((n = time, acc = init) => {
        return n === 0 ? acc : recur(n - 1, fn(acc, time - n));
      });
    };
  };
}
