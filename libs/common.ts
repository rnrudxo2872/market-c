export function joinClasses(...classes: string[]): string {
  return classes.join(" ");
}

interface ILocalMap {
  ios: string;
  currency: string;
}

const iosMap = new Map<string, ILocalMap>([
  [
    "ko",
    {
      ios: "ko-KR",
      currency: "KRW",
    },
  ],
  [
    "us",
    {
      ios: "en-US",
      currency: "USD",
    },
  ],
]);

export function getLocalMonetUnit(num: number, local: string) {
  const getMap = iosMap.get(local);

  if (getMap) {
    const { currency, ios } = getMap;
    return num.toLocaleString(ios, {
      currency,
      style: "currency",
      maximumFractionDigits: 0,
    });
  }

  return null;
}
