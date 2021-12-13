import React, { Component } from 'react';
import { SettingOutlined } from '@ant-design/icons'
import styles from './style.module.scss'

export default class Login extends Component {
    render() {
        return (
            <div className={styles.Center}>
                <div className={styles.Container}>
                    <SettingOutlined className={styles.Logo} />
                    <h1 className={styles.title}>PF SERVIÇOS</h1>
                    <h4 className={styles.subtitle}>OFICINA MECÂNICA</h4>

                    <input className={styles.username} type="text" placeholder='Username' />
                    <input className={styles.password} type="text" placeholder='Password' />

                    <input type="button" className={styles.retrieve} value='Esqueci a senha' />
                    <input type="button" className={styles.login} value='LOGIN' />
                </div>
            </div>
        )
    }
}
