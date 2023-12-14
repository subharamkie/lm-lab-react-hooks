import { useEffect, useState } from "react";
import { isError } from "../../../helpers/is_error";

export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const useToDo = (url: string) => {
  const [data, setData] = useState<TodoResponse | undefined>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setIsFetching(false);
        if (response.status === 200) {
          const json = await response.json();
          setData(json);
        }
      } catch (e: unknown) {
        setIsFetching(false);

        console.log(isError(e) ? e.message : "Unknown error!");
      }
    };
    fetchData();
  }, [url]);

  return { data, isFetching };
};
export default useToDo;
