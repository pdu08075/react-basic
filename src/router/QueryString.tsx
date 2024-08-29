import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function QueryString() {

    // useSerchParams():
    // url에서 Query String 값을 받을 수 있또록 하는 react-router의 훅 함수
    const [queryParam] = useSearchParams();
    const name = queryParam.get('name');     // queryParam의 이름을 get()에 지정 -> URL에서 name을 찾아 값을 가져옴
    const age = queryParam.get('age');

    return (
        <div>
            NAME : {name} / AGE : {age}
        </div>
    )
}
