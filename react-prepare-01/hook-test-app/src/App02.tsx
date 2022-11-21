import { ChangeEvent, useEffect, useState } from "react";

const App = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>("아이유");

    useEffect(() => {
        console.log(`${name} 님이 ${count}번 클릭했습니다.`)
    });

    return (
        <div>
            이름 변경 :
            <input type="text" value={name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            <hr />
            <br />

            
        </div>
    );
};