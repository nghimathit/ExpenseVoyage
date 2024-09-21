
import { useEffect, useState } from "react";
const DEFAULT_HEADERS = {
    accept: "application/json"
}

export default function useFetch({ url = '', method = "GET", headers = {} }) {
    const [data, setData] = useState({});
    const [IsLoaing, setIsLoaing] = useState(false);
    useEffect(() => {
        setIsLoaing(true);
        fetch(
            url, {
            method: method,
            headers: {
                ...DEFAULT_HEADERS,
                ...headers
            },
        }).then(async (res) => {
            const data = await res.json();
            setData(data)
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setIsLoaing(false);
        });
        // fix headers là 1 object sẽ rennder lại mỗi lần render nên 
        // phải dùng JSON.stringify để nó chỉ so sánh giá trị sau mỗi lần render thôi
    }, [url, method, JSON.stringify(headers)]);
    return { IsLoaing, data }
}