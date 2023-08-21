import React from 'react'
import UstaTalepRow from './UstaTalepRow'

export default function UstaTalep(props) {
    const {usta} = props;
    return (
        <div className='container mt-5'>
            <table className="table table-light table-striped table-hover">
                <thead className='table-dark'>
                    <tr>
                        <th colSpan={7}>Gelen Talepler</th>
                    </tr>
                </thead>
                <thead >
                    <tr className='text-center'>
                        <th scope="col">Ad Soyad</th>
                        <th scope="col">İletişim</th>
                        <th scope="col">Adres</th>
                        <th scope="col">Tarih</th>
                        <th scope="col">Açıklama</th>
                        <th scope="col">Teklif Aralığı </th>
                        <th scope="col">Durum</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.talepler.length !== 0 ?
                            props.talepler.map((item, i) => {
                                return <UstaTalepRow key={i} talep={item} usta ={usta}/>
                            }) : <tr className='text-center'><td className='text-danger' colSpan="6">No Data</td></tr>

                    }

                </tbody>
            </table>
        </div>
    )
}
