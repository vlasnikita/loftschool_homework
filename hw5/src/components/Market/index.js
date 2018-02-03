import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createOrder, moveOrderToFarm } from '../../actions/marketActions'
import Order from '../Order'
import './Market.css'

let id = 0
const getId = () => ++id

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька'
]

class Market extends Component {

  getNewOrder = () => ({
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  })

  getOrders = orders => orders.map(order => {
    return (
      <Order key={order.id} {...order} />
    )
  })

  handleMoveOrderToFarm = () => {
    const { market, moveOrderToFarm } = this.props
    moveOrderToFarm(market.orders[market.orders.length-1])
}

  render() {
    const { market, createOrder } = this.props

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={() => createOrder(this.getNewOrder())}
        >
        Создать заказ
        </button>
        <button
          onClick={this.handleMoveOrderToFarm}
          disabled={!market.orders.length}
        >
        Отправить заказ на ферму
        </button>
        <div className="order-list">
        {!!market.orders.length && this.getOrders(market.orders)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ market }) => ({
  market
})

const mapDispatchToProps = dispatch => ({
  createOrder: newOrder => dispatch(createOrder(newOrder)),
  moveOrderToFarm: order => dispatch(moveOrderToFarm(order))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Market)
