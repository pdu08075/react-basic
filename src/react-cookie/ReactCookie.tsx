import React, { ChangeEvent, useState } from 'react'
import { useCookies } from 'react-cookie';

// react-cookie 패키지:
// - react에서 쿠키를 손쉽게 관리할 수 있도록 도움을 주는 패키지
// - 쿠키 설정, 검색, 삭제를 간단한 함수로 작업할 수 있음

// 쿠키 (Cookie)
// 클라이언트가 특정한 웹 서비스에 방문하여 사용 중 해당 서비스에서 필요한 데이터를
// 클라이언트 부라우저에 저장하는 기술
// - 이름, 값, 만료일, 도메인, 경로가 포함

// npm install react-cookie
export default function ReactCookie() {

    // useCookies: 리액트에서 쿠키 객체, 쿠키 변경 함수, 쿠키 제거 함수를 배열로 반환하는 react-cookie의 흑 함수
    const [cookies, setCookie, removeCookie] = useCookies();

    const [name, setName] = useState<string>('');
    const [value, setValue] = useState<string>('');

    const onNameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setName(value);
    };

    const onAddClickHandler = () => {
        // setCookie 함수를 사용하여 쿠키를 추가할 수 있음
        // 첫번째 매개변수: 쿠키 이름
        // 두번째 매개변수: 쿠키 값
        // 세번째 매개변수(선택): 옵션 지정
        // setCookie(name, value);
        // 옵션
        // - path: 해당 쿠키가 적용될 경로
        // - expires: 만료시간
        // setCookie(name, value, {path: '/zustand'});  // 추가한 쿠키를 '/zustand'에서만 확인 가능
        const now = new Date();
        const expires = new Date(now.setSeconds(now.getSeconds() + 10));
        setCookie(name, value, {path: '/', expires});
    };
    
    const onShowClickHandler = () => {
        // cookies 객체에 브라우저가 가지고 있는 쿠키 정보가 담겨 있음
        // alert(JSON.stringify(cookies));
        // alert(cookies.first);
        // alert(cookies.second);
        alert(cookies[name]);   // 입력받은 name으로 조회
    };

    const onRemoveClickHHandler = () => {
        // removeCookie 함수를 사용하여 쿠키 제거 가능
        // 첫번째 매개변수: 쿠키 이름
        // 두번쨰 매개변수: 옵션
        // removeCookie(name);
        removeCookie(name, {path: '/zustand'});  // '/zustand'에 추가한 쿠키 중 삭제
    };

    const onValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target;
        setValue(value);
    };

    return (
        <div>
            <input value={name} onChange={onNameChangeHandler} />
            <input value={value} onChange={onValueChangeHandler} />
            <button onClick={onAddClickHandler}>쿠키 추가</button>
            <button onClick={onShowClickHandler}>쿠키 확인</button>
            <button onClick={onRemoveClickHHandler}>쿠키 제거</button>
        </div>
    )
}
