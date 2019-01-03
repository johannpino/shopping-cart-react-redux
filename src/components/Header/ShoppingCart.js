import React from 'react'
import {removeFromCart} from '../../redux/actions'
import { connect } from 'react-redux';

const ShoppingCart = ({cart, removeFromCart, handleOnClose}) =>  {

        return (
            <div className="container text-center">
                <table className="table">
                    <tbody>
                {
                    cart.map(product =>
                        <tr key={product.id}>
                            <td className="cart-img"><img src={product.img} alt={product.name}/></td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button className="btn btn-danger" onClick={() => removeFromCart(product.id)} >X</button></td>
                        </tr>
                    )
                    
                }
                    
                    <tr>
                        <td></td>
                        <td>total USD :</td>
                        <td>${cart.reduce((sum,product) => sum + Number(product.price), 0 )}</td>
                        <td><button>Pagar</button></td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={handleOnClose}>Seguir Comprando</button>
            </div>
        )
}

const mapDispatchToProps = dispatch => (
    {
        removeFromCart: (product) => {
            dispatch(removeFromCart(product))
        }
    }
)

export default connect(null,mapDispatchToProps)(ShoppingCart);