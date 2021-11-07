import React from 'react'


const Cart = () => {
    return (
        <div className="cart">
            <div className="cart_content">
                <div className="cart_items">
                    <table>
                        <thead>
                            <tr>
                                <th>Items</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>item 1</td>
                                <td>cost 1</td>
                            </tr>
                            <tr>
                                <td>item 2</td>
                                <td>cost 2</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><button className="ckout-btn">Checkout</button></td>
                                <td>Total : </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Cart
