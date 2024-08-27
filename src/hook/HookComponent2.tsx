import React, { useRef, useState } from 'react'

export default function HookComponent2() {

    // - useRef:
    // - 렌더링 작업 없이 값을 기억하고 변경하고자 할 때 사용
    // - DOM 요소를 참조하기 위해 자주 사용
    // - const 변수 = useRef<타입>(초기값)

    // DOM 요소를 참조하기 위해 useRef 사용할 경우 참조할 요소의 ref 속성에 참조변수를 지정해야 됨
    const inputRef = useRef<HTMLInputElement>(null);

    const imageInputRef = useRef<HTMLInputElement>(null);
    const [imageUrl, setImageUrl] = useState<string>('');

    const onButtonClickHandler = () => {
        // const inputElement = document.getElementById('input');      // 이와 같이 작성할 시 각 이벤트마다 매번 불러와야 되고, 일반적인 DOM 객체에 대해서는 작업 수행하는 데에 안정성의 문제가 발생할 수 있음
        // inputElement?.focus();
        
        // useRef로 생성한 참조 객체는 해당 변수의 current 속성에 들어있음
        // 특정 객체에서 속성 및 메서드를 호출하려 할 때 변수의 값이 null 혹은 undefined가 아닌 상태에서만 작업을 수행하도록 하려면 '변수?.속성' 혹은 '변수?.메서드()'로 지정
        inputRef.current?.focus();          // inputRef에 직접 참조 하고 있는 변수 등이 직접 들어가는 것이 아닌, current에 들어감

        // 위와 같이 작성하는 것보다는 아래처럼 작성하는 것이 보다 안정적
        if (!inputRef.current) return;
        inputRef.current.focus();
    };

    const onImageInputChangeHandler = () => {
        const { current } = imageInputRef;
        if (!current) return;       // current가 존재하지 않으면(null 이면) 종료
        if (!current.files) return;       // current가 존재하지 않으면(null 이면) 종료

        const file = current.files[0];
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);        // 파일을 읽어서 url로 변경해줌
        fileReader.onloadend = () => {
            setImageUrl(fileReader.result as string)
        }
    };

    const onImageButtonClickHandler = () => {
        const { current } = imageInputRef;
        if (!current) return;       // current가 존재하지 않으면 종료
        current.click();        // 존재한다면 클릭해라
    }

    return (
        <div>
            <input ref={inputRef} id='input' />           {/* inputRef에 요소가 기억됨 */}
            <button onClick={onButtonClickHandler}>focus</button>
            <div>
                <img width={100} height={100} src={imageUrl} />
                <input style={{display: 'none'}} ref={imageInputRef} type='file' accept='image/*' onChange={onImageInputChangeHandler} />       {/* image 파일만 선택 가능함 */}
                <button onClick={onImageButtonClickHandler}>이미지 등록</button>
            </div>
        </div>
    )
}
