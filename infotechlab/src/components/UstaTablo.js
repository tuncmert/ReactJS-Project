import React from 'react'
import UstaRow from './UstaRow'

export default function UstaTablo(props) {
    const { userid } = props;
    return (
        <div className='container mt-5'>
            <table className="table table-light table-striped table-hover">
                <thead className='table-dark'>
                    <tr>
                        <th colSpan={6}>Civardaki Ustalar</th>
                    </tr>
                </thead>
                <thead>
                    <tr className='text-center'>
                        <th scope="col">İsim</th>
                        <th scope="col">Soyisim</th>
                        <th scope="col">Telefon</th>
                        <th scope="col">Alan</th>
                        <th scope="col">Açıklama/İstek</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.ustalar.length !== 0 ?
                            props.ustalar.map((item, i) => {
                                return <UstaRow key={i} usta={item} userid={userid} />
                            }) : <tr className='text-center'><td className='text-danger' colSpan="6">No Data</td></tr>

                    }

                </tbody>
            </table>
        </div>
    )
}
