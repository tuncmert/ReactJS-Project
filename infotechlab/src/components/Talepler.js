import React from 'react'
import TalepRow from './TalepRow'

export default function Talepler(props) {

    return (
        <div className='container mt-5'>
            <table className="table table-light table-striped table-hover">
                <thead className='table-dark'>
                    <tr>
                        <th colSpan={4}>Daha Önce Gönderilmiş Usta Talepleri</th>
                    </tr>
                </thead>
                <thead >
                    <tr className='text-center'>
                        <th scope="col">Tarih</th>
                        <th scope="col">Açıklama</th>
                        <th scope="col">Tahmini Fiyat Aralığı</th>
                        <th scope="col">Durum</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.talepler.length !== 0 ?
                            props.talepler.map((item, i) => {
                                return <TalepRow key={i} talep={item} />
                            }) : <tr className='text-center'><td className='text-danger' colSpan="6">No Data</td></tr>

                    }

                </tbody>
            </table>
        </div>
    )
}
