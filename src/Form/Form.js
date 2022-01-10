import {useState} from 'react';
import './Form.scss'

export default function Form() {
    const [serialno, setSerialno] = useState("");
    const [lotno, setLotno] = useState("");
    const [quantity, setQuantity] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        const [fieldName, fieldIndex] = name.split("-");

        let fieldIntIndex = parseInt(fieldIndex);
        
        if(value.length >=8 && fieldIntIndex<3)
        {
            const nextField = document.querySelector(`input[name=${fieldName}-${fieldIntIndex + 1}]`);
            if(nextField!==null) {
                nextField.focus();
            }
        }
    }

    return (
        <div>
            <div>
                <label>Serial no</label>
                <input type="text" name="field-1" placeholder='Enter serial' pattern={'[A-Z][a-z][0-9]'}
                onChange={handleChange} maxLength={15}/>
            </div>
            <div>
                <label>Lot no</label>
                <input type="text" name="field-2" placeholder='Enter lot no' pattern={'[A-Z][a-z][0-9]'}
                onChange={handleChange} maxLength={15}/>
            </div>
            <div>
                <label>Quantity</label>
                <input type="number" name="field-3" placeholder='Enter quantity' pattern={'[A-Z][a-z][0-9]'}
                onChange={handleChange} min = {1} max={10000} maxLength={5}/>
            </div>
        </div>
    );
}
