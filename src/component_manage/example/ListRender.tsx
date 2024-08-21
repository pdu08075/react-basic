import React from 'react'

// 리스트 렌더링: 
// - JSX 내부에서 반복적으로 렌더링하는 요소에 대하여 반복 처리하는 방법
// - JSX 내부에서는 for, while 같은 반복 구문을 사용할 수 없음

export default function ListRender() {

    const fruits = ['apple', 'banana', 'cacao'];

    const listItems = fruits.map((item, index) => {
        return (
            <h3>{item}</h3>
        );
    });
    // listItems = [<h3>apple</h3>, <h3>banana</h3>, <h3>cacao</h3>]

    return (
        <div>
            {listItems}
        </div>
    )
}
