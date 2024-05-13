import React from 'react'
import "../Login/style.css"
const Login = () => {
    return (
        <div className='hero'>
            <div>
                <h2 className='name'>Instagram</h2>
            </div>
            <div>
                <input type="text" className='input-login' placeholder='Telefon numarası, kullanıcı adı veya e-posta' />
            </div>
            <div>
                <input type="text" className='input-login' placeholder='Şifre' />
            </div>
            <div>
                <button className='loginuser'>Giriş yap</button>
            </div>
            <div className="xett">
                <div className='row-1'>

                </div>
                <div className='row-state'>
                    YA DA
                </div>
                <div className='row-1'>

                </div>
            </div>
            <div className='fb-state'>
                <a >Facebook ile Giriş Yap</a>
            </div>
            <div className='şifre'>
                <span>Şifreni mi unuttun?</span>
            </div>
        </div>
    )
}

export default Login
