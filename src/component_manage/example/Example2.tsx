import React from 'react'
import './Example2.css';

function TableHeader() {
    return (
        <div className='th'>
            <div className='td'>사번</div>
            <div className='td'>이름</div>
            <div className='td'>출근상태</div>
        </div>
    )
}

interface TableRowProps {
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

function TableRow ({employeeNumber, employeeName, workState}: TableRowProps) {

    const color = workState ? 'blue' : 'red';

    return (
        <div className='tr'>
            <div className='td'>{employeeNumber}</div>
            <div className='td'>{employeeName}</div>
            <div className='td' style={{ color }}>●</div>  {/* 원래 'color : color' 라고 작성해야 되나, 속성명과 변수명이 같다면 'color'와 같은 형태로 생략 가능*/}
        </div>
    )
}

interface TableDataTrProps {
    type: 'tr';
    employeeNumber: string;
    employeeName: string;
    workState: boolean;
}

interface TableDataThProps {
    type: 'th';
}

function TableData(props: TableDataTrProps | TableDataThProps) {

    const { type } = props;
    if (type === 'th') {

        return (
            <div className='th'>
                <div className='td'>사번</div>
                <div className='td'>이름</div>
                <div className='td'>출근상태</div>
            </div>
        );

    }

    const {employeeName, employeeNumber, workState} = props;
    const color = workState ? 'blue' : 'red';

    return (
        <div className='tr'>
            <div className='td'>{employeeNumber}</div>
            <div className='td'>{employeeName}</div>
            <div className='td' style={{ color }}>●</div>  {/* 원래 'color : color' 라고 작성해야 되나, 속성명과 변수명이 같다면 'color'와 같은 형태로 생략 가능*/}
        </div>
    )

}

export default function Example2() {

    const employee1 = {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
    };

    const employee2 = {
        employeeNumber: '202402',
        employeeName: '이영희',
        workState: true
    };

    const employee3 = {
        employeeNumber: '202403',
        employeeName: '김철수',
        workState: true
    };

    return (
        <div className='table'>
            {/* <TableHeader/> */}
            {/* <TableRow employeeNumber='202401' employeeName='홍길동' workState={false} /> */}
            {/* <TableRow employeeNumber='202402' employeeName='김영희' workState={true} /> */}
            {/* <TableRow employeeNumber='202403' employeeName='김철수' workState />   true일 경우 생략 가능 */}
            {/* <TableRow { ...employee1 } />
            <TableRow { ...employee2 } />
            <TableRow { ...employee3 } /> */}
            <TableData type='th'/>
            <TableData type='tr' { ...employee1} />
            <TableData type='tr' { ...employee2} />
            <TableData type='tr' { ...employee3} />

            <TableHeader/>
            <TableRow { ...employees[0] } />
            <TableRow { ...employees[1] } />
            <TableRow { ...employees[2] } />
        </div>
    )
}

const employees = [
    {
        employeeNumber: '202401',
        employeeName: '홍길동',
        workState: false
    },
    {
        employeeNumber: '202402',
        employeeName: '이영희',
        workState: true
    },
    {
        employeeNumber: '202403',
        employeeName: '김철수',
        workState: true
    }

]