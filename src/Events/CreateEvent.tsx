import React from 'react'

interface CreateEventProps {
  name: string
}

export const CreateEvent = ({ name }: CreateEventProps) => {
  return (
    <div className='event'>
      {`Order ${name} was created.`}
    </div>
  )
}
