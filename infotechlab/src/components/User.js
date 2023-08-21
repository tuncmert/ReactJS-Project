import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkToken } from '../request/loginr';
import { editUser, getUser, getUsta } from '../request/user';
import UstaTablo from './UstaTablo';
import { getTalep } from '../request/talep';
import Talepler from './Talepler';

export default function User() {
    let navigate = useNavigate();
    const [user, setUser] = useState({});
    const [ustalar, setUstalar] = useState([{}]);
    const [talepler, setTalepler] = useState([{}]);
    let token = localStorage.getItem('token');
    const handleChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        editUser(e, token, user).then((result) => { console.log(result) }).catch(err => { console.log(err) });
    }
    useEffect(() => {
        if (token == null) {
            navigate('/login');
        } else {
            checkToken(token).then((data) => {
                if (data) {
                    var userType = data.usertype;
                    console.log(userType);
                    if (userType != 0) {
                        navigate('/login');
                    }
                    getUser(token, data.userId).then((data) => setUser(data));
                    getTalep(token, data.userId).then((data) => setTalepler(data));
                    getUsta(token, data.userId).then((data) => setUstalar(data));


                } else {
                    navigate('/login');
                }
            }).catch((err) => { console.log(err.message); });
        }
    }, [])
    return (
        <div className='row'>

            <div className='col-6 offset-3'>
                <div className="card text-center mt-5">
                    <div className="card-header bg-secondary">
                        Bilgilerim
                    </div>
                    <div className="card-body">
                        <div className='row' >
                            <div className='col-12'>
                                <form className='mt-2' onSubmit={(e) => handleSubmit(e)}>
                                    <div className="form-group mb-2">
                                        <label htmlFor="username">Mail</label>
                                        <input type="text" className="form-control" id="username" defaultValue={user.username} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="password">Şifre</label>
                                        <input type="text" className="form-control" id="password" defaultValue={user.password} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="firstName">İsim</label>
                                        <input type="text" className="form-control" id="firstName" defaultValue={user.firstName} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="lastName">Soyisim</label>
                                        <input type="text" className="form-control" id="lastName" defaultValue={user.lastName} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="telefon">Telefon</label>
                                        <input type="number" className="form-control" id="telefon" defaultValue={user.telefon} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="sehir">İl</label>
                                        <input type="text" className="form-control" id="sehir" defaultValue={user.sehir} onChange={(e) => handleChange(e)} />
                                    </div>
                                    <div className="form-group mb-2">
                                        <label htmlFor="ilce">İlçe</label>
                                        <input type="text" className="form-control" id="ilce" defaultValue={user.ilce} onChange={(e) => handleChange(e)} />
                                    </div>
                                    {
                                        user.userType === 1 ? <div className="form-group mb-2">
                                            <label htmlFor="alan">Alan</label>
                                            <input type="text" className="form-control" id="alan" defaultValue={user.alan} onChange={(e) => handleChange(e)} />
                                        </div> : ""
                                    }

                                    <button type="submit" className="btn btn-primary float-end mt-1">Bilgileri Kayıt Et</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <UstaTablo ustalar={ustalar} userid={user.id} />
                <Talepler talepler={talepler} />
            </div>

        </div>

    )
}
