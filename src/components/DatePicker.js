import React, {useState} from 'react';

function DatePicker() {
    const [date, setDate] = useState('');

    function handleChange(e){
        setDate(e.target.value);
    }

    return (
        <>
            <input type='date' onChange={handleChange}/>
            <p>{date}</p>
        </>
    );
}

export default DatePicker;