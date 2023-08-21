import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { kayitOl } from '../request/loginr';

export default function Kayit() {
    const [user, setUser] = useState({});
    let navigate = useNavigate();
    return (
        <div className="card text-center mt-5" style={{ display: "inline-block" }}>
            <div className="card-header bg-secondary">
                Giriş Yapın
            </div>
            <div className="card-body">
                <form onSubmit={(e) => {
                    let result = kayitOl(e, user);
                    result.then((res) => {
                        console.log(res);
                    })
                    result.catch((err) => { console.log(err.message); })
                }}>
                    <div className="mb-3">
                        <label htmlFor="Email">Email</label>
                        <input type="text" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" required onChange={(e) => setUser({ ...user, mail: e.target.value })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password">Şifre</label>
                        <input type="password" className="form-control" id="Password" placeholder="Password" required onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="userType">Kullanıcı Türü</label>
                        <select id="userType" className="form-select" aria-label="Default select example" required onChange={(e) => setUser({ ...user, usertype: parseInt(e.target.value) })} >
                            <option value={null}></option>
                            <option value={0}>Kullanıcı/Müşteri</option>
                            <option value={1}>Usta/Hizmet veren</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Kayıt Ol</button>
                </form>
            </div>
        </div>
    )
}
