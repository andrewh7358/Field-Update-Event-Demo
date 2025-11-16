import { Modal } from 'antd'
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react'
import { Order } from './App'

interface EditModalProps {
  showModal: boolean
  data: Order
  onSubmit: (formData: Order) => void
  onCancel: () => void
}

export const EditModal = ({ showModal, data, onSubmit, onCancel }: EditModalProps) => {
  const [formData, setFormData] = useState<Order>({})

  useEffect(() => {
    setFormData(showModal ? data : {})
  }, [showModal])

  const handleSubmit = () => {
    onSubmit(formData)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: {
          ...prev[name],
          value
        }
      }
    })
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  const dataKeys = Object.keys(formData)
  const fields = dataKeys.length && dataKeys.map((key) => {
    const { label, value } = formData[key]
    return (
      <div className='formRow'>
        <label className='formLabel' htmlFor={key}>{`${label}:`}</label>
        <input className='formInput' id={key} name={key} value={value || ''} onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
    )
  })

  return (
    <Modal title='Edit Order' open={showModal} okText='Submit' onOk={handleSubmit} onCancel={onCancel}>
      {fields}
    </Modal>
  )
}
