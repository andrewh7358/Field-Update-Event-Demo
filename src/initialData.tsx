import { Order } from './App'

export const initialData: Order = {
  name: {
    label: 'Order Number',
    value: 'SO-95432'
  },
  shippingMethod: {
    label: 'Shipping Method',
    value: 'Standard Ground (5-7 business days)'
  },
  paymentStatus: {
    label: 'Payment Status',
    value: ''
  },
  orderstatus: {
    label: 'Order Status',
    value: ''
  },
  contact: {
    label: 'Contact',
    value: '(123) 456-7890'
  },
  email: {
    label: 'Email',
    value: 'example@email.com'
  }
}
