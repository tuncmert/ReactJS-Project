import React, { useEffect, useState } from 'react'
import { checkToken, submitHandle } from '../request/loginr'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState({});
    let navigate = useNavigate();
    let token = localStorage.getItem('token');
    useEffect(() => {
        if (token == null) {
            navigate('/login');
        } else {
            checkToken(token).then((data) => {
                if (data) {
                    var userType = data.usertype;
                    if (userType == 0) {
                        navigate('/');
                    } else if (userType == 1) {
                        navigate('/usta');
                    } else {
                        navigate('/login');
                    }
                } else {
                    navigate('/login');
                }
            }).catch((err) => { console.log(err.message); });
        }
    }, [])
    return (
        <>
            <div className="card text-center mt-5" style={{ display: "inline-block" }}>
                <div className="card-header bg-secondary">
                    Giriş Yapın
                </div>
                <div className="card-body">
                    <form onSubmit={(e) => {
                        let result = submitHandle(e, user);
                        result.then((res) => {
                            if (res.isAuthenticated) {
                                localStorage.setItem('token', res.token);

                                let userType = user.usertype;
                                if (userType == 0) {
                                    console.log("asd");
                                    navigate('/');
                                } else if (userType == 1) {
                                    navigate('/usta');
                                } else {
                                    navigate('/login');
                                }
                            } else {
                                alert("Girilen Bilgileri Kontrol Edin")
                            }
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
                        <button type="submit" className="btn btn-primary">Giriş Yap</button>
                        <button className='btn btn-primary ms-1' title='Detail' onClick={()=>navigate('/kayit')}> Kayıt Ol</button>
                    </form>
                </div>
            </div>




        </>

    )
}
