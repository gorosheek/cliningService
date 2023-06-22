import OrderRepository from "../repository/order-repository.js";
import {Status_Order} from "@prisma/client";
import OrderInfrastructure from "../infrastructure/order-infrastructure.js";
import OrderController from "../controllers/order-controller.js";

class OrderService{

    async createOrder(data_order, type, isCleaningRequested){
        const order = {
            x: data_order.longitude,
            y: data_order.latitude,
            room_number: data_order.room_number,
            order_type: type,
            status_type: Status_Order.CLEANING
        }

        const response = await OrderRepository.createOrderWithType(order)
        await OrderInfrastructure.goToHotelService(response, isCleaningRequested)

        return response
    }

    async changeStatus(order_id, status){
        return await OrderRepository.updateOrder(order_id, status)
    }


    async getAllOrders(){
        return await OrderRepository.getAllOrders()
    }
}

export default new OrderService()