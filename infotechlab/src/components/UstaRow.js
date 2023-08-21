import React, { useState } from 'react'
import { addTalep } from '../request/talep';

export default function UstaRow(props) {
    const { usta } = props;
    const { userid } = props;
    const [aciklama, setAciklama] = useState('');
    const getCurrentDate = () => {
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return currentDate.toLocaleDateString('tr-TR', options); 
    };
    const handleIstekGonder = () => {
        const tarih = getCurrentDate(); 
        const talep = {
            tarih,
            aciklama,
            ustaId: usta.id,
            userId: userid
        };
        let token = localStorage.getItem('token');
        addTalep(token, talep).then((result) => { console.log(result) }).catch(err => { console.log(err) });
    };
    return (
        <tr className='text-center'>
            <td>{usta.firstName}</td>
            <td>{usta.lastName}</td>
            <td>{usta.telefon}</td>
            <td>{usta.alan}</td>
            <td><div className='row'>
                <div className='col-6'>
                    <textarea id='aciklama' onChange={(e) => setAciklama(e.target.value)}/>
                </div>
                <div className='col-6' >
                    <button className='btn btn-primary btn-sm' onClick={() => handleIstekGonder()}>İstek Gönder</button>
                </div>
            </div>
            </td>
        </tr>
    )
}
