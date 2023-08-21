import React from 'react'

export default function TalepRow(props) {
    const{talep} = props;
    return (
        <tr className='text-center'>
            <td>{talep.tarih}</td>
            <td>{talep.aciklama}</td>
            <td>{talep.minTeklif+"-"+talep.maxTeklif+"TL"}</td>
            <td>{
            talep.status==1?"Onaylandı":talep.status==2 ? "Henüz Onaylanmadı": "Talep Reddedildi" }</td>
        </tr>
    )
} 
