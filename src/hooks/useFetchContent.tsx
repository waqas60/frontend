// hooks/useFetchContent.ts
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface ContentItem {
  type: string;
  link: string;
  title: string;
  createdAt: string;
}

const useFetchContent = () => {
  const [data, setData] = useState<ContentItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setData(response.data.allContent);
      } catch (err: any) {
        toast.error(err.message || "Something went wrong");
      }
    };

    getData(); 

    const interval = setInterval(getData, 2000); 

    return () => clearInterval(interval);
  }, []);

  return { data };
}

export default useFetchContent;
