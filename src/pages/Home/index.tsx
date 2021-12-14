import { SettingOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import api from '../../api'
import Pedido from '../../components/Pedido'
import styles from './style.module.scss'

interface IPedido {
    marca: string;
    modelo: string;
    quilometragem: string;
    valor: Number;
    pedidos: Array<string>;
    data: string;
}

export default class Home extends Component {

    state = {
        marca: '',
        modelo: '',
        quilometragem: '',
        valor: 0,
        pedidos: '',
        data: Date(),
        allpedidos: Array<IPedido>()
    }

    handleNewPedido = () => {
        console.log('pressed');
        const {
            marca,
            modelo,
            quilometragem,
            valor,
            pedidos,
            data,
            allpedidos } = this.state;
        const pedidos_list = pedidos.split(',')

        allpedidos.unshift({
            marca,
            modelo,
            quilometragem,
            valor,
            pedidos: pedidos_list,
            data
        })
        this.setState({ allpedidos })
    }

    componentDidMount() {
        api.get('pedido-orcamento')
            .then((response) => {
                const { allpedidos } = this.state

                response.data.forEach((item: IPedido) => allpedidos.push(item))
                this.setState({ allpedidos })
            })
            .catch(_err => console.log("Deu ruim", _err))
    }

    render() {
        return (
            <div className={styles.Container}>
                <div className={styles.SideBar} >
                    <SettingOutlined className={styles.Logo} />
                    <input type='button' value='SAIR' className={styles.Sair} />
                </div>
                <div className={styles.PedidosContainer} >
                    {
                        this.state.allpedidos.map(item => {
                            return <Pedido key={crypto.getRandomValues(new Uint32Array(1))[0]} pedido={item} />;
                        })
                    }
                </div>
                <div className={styles.PedidoForm}>
                    <h1 className={styles.SectionTitle}>Veículo</h1>
                    <label className={styles.FieldTitle} htmlFor='marca'>
                        Marca
                        <input className={styles.Field} onChange={input => this.setState({ marca: input.target.value })} id='marca' />
                    </label>
                    <label className={styles.FieldTitle} htmlFor='modelo'>
                        Modelo
                        <input className={styles.Field} onChange={input => this.setState({ modelo: input.target.value })} id='modelo' />
                    </label>
                    <label className={styles.FieldTitle} htmlFor='quilometragem'>
                        Quilometragem
                        <input className={styles.Field} onChange={input => this.setState({ quilometragem: input.target.value })} id='quilometragem' />
                    </label>
                    <h1 className={styles.SectionTitle}>Serviço</h1>
                    <label className={styles.FieldTitle} htmlFor='servicos'>
                        Serviços
                        <input className={styles.Field} onChange={input => this.setState({ pedidos: input.target.value })} id='servicos' />
                    </label>
                    <label className={styles.FieldTitle} htmlFor='valor'>
                        Valor
                        <input className={styles.Field} onChange={input => this.setState({ valor: input.target.value })} id='valor' />
                    </label>
                    <label className={styles.FieldTitle} htmlFor='data'>
                        Data do pedido
                        <input className={styles.Field} onChange={input => this.setState({ data: input.target.value })} id='data' type='date' />
                    </label>
                    <input className={styles.Submit} onClick={this.handleNewPedido} value='ORDENAR SERVICO' type='button' />
                </div>
            </div>
        )
    }
}
