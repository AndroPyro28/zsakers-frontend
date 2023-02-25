import React from 'react'
import { useUpdateQuantityMutation } from '../../services/cart-products'

function Logic() {

    const [updateQuantityMutation] = useUpdateQuantityMutation()
    const updateCartQuantity = async (id: number, action: 'increment' | 'decrement') => {
        try {
            const result = await updateQuantityMutation({id, action})
        } catch (error) {
            console.error(error)
        }
    }
  return {
    updateCartQuantity
  }
}

export default Logic