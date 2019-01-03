import React, { Component } from 'react'
import store from '../../redux/store'
import {removeFromCart} from '../../redux/actions'

class ShoppingCart extends Component {
    constructor(){
        super()
        this.state = {
            cart: []
        }

        store.subscribe(()=> {
            this.setState({
                cart: store.getState().cart
            })
        })

    }

    removeFromCart = (product) => {
        store.dispatch(
            removeFromCart(product)
        )
    }


    render() {
        return (
            <div className="container text-center">
                <table className="table">
                    <tbody>
                {
                    this.state.cart.map(product =>
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button className="btn btn-danger" onClick={() => this.removeFromCart(product.id)} >X</button></td>
                        </tr>
                    )
                }
                    
                    <tr>
                        <td>total USD :</td>
                        <td>${this.state.cart.reduce((sum,product) => sum + Number(product.price), 0 )}</td>
                        <td><button>Pagar</button></td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={this.props.handleOnClose}>Seguir Comprando</button>
            </div>
        );
    }
}

export default ShoppingCart;