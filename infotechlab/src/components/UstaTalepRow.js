import React, { useState } from 'react'
import { editTalep } from '../request/talep';

export default function UstaTalepRow(props) {
    const { talep } = props;
    const { usta } = props;
    let token = localStorage.getItem('token');
    const [teklif, setTeklif] = useState({id:0,aciklama:"string",tarih:"string",ustaId: 0,userId:0,status:0,maxTeklif:0,minTeklif:0});

    const teklifGonder = (e) => {
        const teklif_id = parseInt(e.target.getAttribute('data-id'));
        setTeklif({ ...teklif, id: teklif_id});
        editTalep(e,token, teklif).then((result) => { console.log(result) }).catch(err => { console.log(err) });
    }
    return (
        <tr className='text-center'>
            <td>{talep.userFirstName + " " + talep.userLastName} </td>
            <td>{talep.userTelefon}</td>
            <td>{talep.userSehir + " " + talep.userIlce}</td>
            <td>{talep.tarih}</td>
            <td>{talep.aciklama}</td>
            <td>
                {
                    talep.status == 1 ?
                        <div>
                            <input readOnly type="number" defaultValue={talep.minTeklif
                            } className='form-control mb-2 text-center' />
                            <input readOnly type="number" defaultValue={talep.maxTeklif
                            } className='form-control mb-2 text-center' />
                        </div>
                        :
                        talep.status == 0 ? "Talep Reddedildi" :
                            <div>
                                <input type="number" defaultValue={talep.minTeklif
                                } className='form-control mb-2 text-center' onChange={(e) =>setTeklif({ ...teklif, maxTeklif: parseInt(e.target.value) })} />
                                <input type="number" defaultValue={talep.maxTeklif
                                } className='form-control mb-2 text-center' onChange={(e) => setTeklif({ ...teklif, minTeklif: parseInt(e.target.value) })} />
                            </div>
                }



            </td>
            <td>{
                talep.status == 1 ? "Teklif Kabul Edildi" : talep.status == 0 ? "Talep Reddedildi" :
                    <div>
                        <button type="button" data-id={talep.id} className="btn btn-sm btn-primary me-1" onClick={(e) => teklifGonder(e)}>Teklif Gönder</button>
                        <button type="button" className="btn btn-sm btn-primary">Reddet</button>
                    </div>

            }</td>
        </tr>
    )
}
