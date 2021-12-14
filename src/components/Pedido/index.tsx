import React, { useEffect } from 'react'
import api from '../../api'
import styles from './style.module.scss'

interface IPedidoProps {
    pedido: {
        marca: string;
        modelo: string;
        quilometragem: string;
        valor: Number;
        pedidos: Array<string>;
        data: string;
    },
    key: Number
}

export default function Pedido({ pedido }: IPedidoProps) {
    useEffect(() => {
        api.get('user_id')
            .then(response => response.data.ok === "ok" ? null : window.location.href = "/")
    }, [])

    return (
        <div className={styles.Pedido}>
            <p className={styles.Identification}>ID sH5xwyqRJ00QrDwC1CLy</p>
            <div className={styles.PedidoCard}>
                <h1 className={styles.FieldTitle}>Marca</h1>
                <p className={styles.Field}>{pedido.marca}</p>
                <h1 className={styles.FieldTitle}>Modelo</h1>
                <p className={styles.Field}>{pedido.modelo}</p>
                <h1 className={styles.FieldTitle}>Quilometragem</h1>
                <p className={styles.Field}>{pedido.quilometragem}</p>
                <h1 className={styles.FieldTitle}>Serviço</h1>
                <select className={styles.Field} >
                    <option>-----------</option>
                    {
                        pedido.pedidos.map(item => {
                            return <option key={crypto.getRandomValues(new Uint32Array(1))[0]} >{item}</option>
                        })
                    }
                </select>
                <h1 className={styles.FieldTitle}>Valor</h1>
                <p className={styles.Field}>{pedido.valor}</p>
                <h1 className={styles.FieldTitle}>Data de Pedido</h1>
                <p className={styles.Field}>{new Date(pedido.data).toLocaleDateString()}</p>
            </div>
        </div>
    )
}
