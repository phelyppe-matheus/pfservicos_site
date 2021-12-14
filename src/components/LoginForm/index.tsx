import { useState } from 'react'
import api from '../../api'
import styles from './style.module.scss'

export default function LoginForm() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [email, setemail] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [logon, setlogon] = useState(false)

    function handleUsernameInput(username: string) {
        setusername(username)
    }

    function handlePasswordInput(password: string) {
        setpassword(password)
    }

    function handleEmailInput(email: string) {
        setemail(email)
    }

    function handleConfirmPasswordInput(confirmpassword: string) {
        setconfirmpassword(confirmpassword)
    }

    async function handleLoginPress() {

        if (!logon) {
            const uri = 'login'
            api.post(uri, {
                username,
                password
            }).then(response => {
                window.location.href = '/services'
            }).catch(_err => console.warn("Deu errado"))
        } else {
            const uri = 'register'
            await api.post(uri, {
                username,
                password,
                email,
                confirmpassword
            }).then(response => {
                window.location.href = '/services'
            }).catch(_err => console.warn("Deu errado"))
        }
    }

    function handleLogOnPress() {
        setlogon(!logon)
    }

    return (
        <>
            <input className={styles.username} onChange={input => handleUsernameInput(input.target.value)} type="text" placeholder='Username' />
            {logon ?
                <input className={styles.email} onChange={input => handleEmailInput(input.target.value)} type="text" placeholder='Email' />
                : null}
            <input className={styles.password} onChange={input => handlePasswordInput(input.target.value)} type="password" placeholder='Password' />
            {logon ?
                <input className={styles.confirmpassword} onChange={input => handleConfirmPasswordInput(input.target.value)} type="password" placeholder='Confirm Password' />
                : null}

            <input type="button" onClick={handleLogOnPress} className={styles.retrieve} value={logon ? 'Já tenho uma conta' : 'Esqueci a senha'} />
            <input type="button" onClick={handleLoginPress} className={styles.login} value={logon ? 'REGISTER' : 'LOGIN'} />
        </>
    )
}
