import { Alert } from "react-native";
import { useEffect, useState } from "react";

export const useAppWrite = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const resp = await fn();
      setData(resp);
    } catch (e) {
      Alert.alert("Error", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const refresh = async () => {
    await fetchData();
  };

  return { data, isLoading, refresh };
};
