import { Component } from 'react';
import { SettingOutlined } from '@ant-design/icons'
import styles from './style.module.scss'
import LoginForm from '../../components/LoginForm';

export default class Login extends Component {

    render() {
        return (
            <div className={styles.Center}>
                <div className={styles.Container}>
                    <SettingOutlined className={styles.Logo} />
                    <h1 className={styles.title}>PF SERVIÇOS</h1>
                    <h4 className={styles.subtitle}>OFICINA MECÂNICA</h4>

                    <LoginForm />
                </div>
            </div>
        )
    }
}
