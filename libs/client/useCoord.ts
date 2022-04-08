import { useEffect, useState } from "react";

interface ICoord {
  latitude: number | null;
  longitude: number | null;
}

interface ICoordStat extends ICoord {
  loading: boolean;
}

interface IGeolocationPosition {
  coords: ICoord;
}

export default function useCoord() {
  const [coord, setCoord] = useState<ICoordStat>({
    latitude: null,
    longitude: null,
    loading: true,
  });

  function coordHandler({
    coords: { latitude, longitude },
  }: IGeolocationPosition) {
    setCoord({ latitude, longitude, loading: false });
  }

  function coordErrorHandler() {
    console.warn("사용자 좌표 알 수 없음.");
    setCoord((prev) => ({ ...prev, loading: false }));
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(coordHandler, coordErrorHandler);
  }, []);

  return coord;
}
