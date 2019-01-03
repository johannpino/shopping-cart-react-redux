import React from 'react'
import {removeFromCart} from '../../redux/actions'
import { connect } from 'react-redux';

const ShoppingCart = (props) =>  {

        return (
            <div className="container text-center">
                <table className="table">
                    <tbody>
                {
                    props.cart.map(product =>
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td><button className="btn btn-danger" onClick={() => props.removeFromCart(product.id)} >X</button></td>
                        </tr>
                    )
                    
                }
                    
                    <tr>
                        <td>total USD :</td>
                        <td>${props.cart.reduce((sum,product) => sum + Number(product.price), 0 )}</td>
                        <td><button>Pagar</button></td>
                    </tr>
                    </tbody>
                </table>
                <button onClick={props.handleOnClose}>Seguir Comprando</button>
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