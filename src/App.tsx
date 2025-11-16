import React, { JSX, useEffect, useState } from 'react'
import { EditModal } from './EditModal'
import { CreateEvent, FieldUpdateEvent } from './Events'
import { FieldInfo } from './FieldInfo'
import { initialData } from './initialData'

export interface Order {
  [key: string]: FieldInfo
}

export const App = () => {
  const [data, setData] = useState(initialData)
  const [events, setEvents] = useState([<CreateEvent name={data.name.value} />])
  const [showModal, setShowModal] = useState(false)

  const handleEdit = (newData: Order) => {
    const eventsUpdate: JSX.Element[] = []
    Object.keys(data).forEach((key) => {
      const { label, value } = data[key]
      const newValue = newData[key].value
      eventsUpdate.push(<FieldUpdateEvent label={label} newValue={newValue} oldValue={value} />)
    })

    setData(newData)
    setEvents((prev) => {
      prev = eventsUpdate.concat(prev)
      return prev
    })
    setShowModal(false)
  }

  const header = (
    <div className='header'>
      <div className='title'>{`Order ${data.name.value}`}</div>
      <button className='editButton' type='button' onClick={() => setShowModal(true)}>Edit</button>
    </div>
  )

  const fieldInfos = Object.keys(data).map((key) => <FieldInfo fieldInfo={data[key]} />)
  const detailsSection = (
    <div className='card'>
      <div className='title subtitle'>Details</div>
      <div className='detailsSection'>
        {fieldInfos}
      </div>
    </div>
  )

  const eventsSection = (
    <div className='card'>
      <div className='title subtitle'>Events</div>
      <div className='eventsContainer'>
        {events}
      </div>
    </div>
  )

  return (
    <>
      {header}
      {<EditModal showModal={showModal} data={data} onSubmit={handleEdit} onCancel={() => setShowModal(false)} />}
      <div className='sections'>
        {detailsSection}
        {eventsSection}
      </div>
    </>
  )
}
