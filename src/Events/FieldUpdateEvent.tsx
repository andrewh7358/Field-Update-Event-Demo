import React from 'react'

interface FieldUpdateEventProps {
  label: string
  newValue: string | null
  oldValue: string | null
}

export const FieldUpdateEvent = ({ label, newValue, oldValue }: FieldUpdateEventProps) => {
  if (newValue === oldValue) {
    return
  }

  let text

  if (!newValue) {
    text = `${label} was removed from "${oldValue}".`
  } else if (!oldValue) {
    text = `${label} was updated to "${newValue}".`
  } else {
    text = `${label} was updated from "${oldValue}" to "${newValue}".`
  }

  return (
    <div className='event'>
      {text}
    </div>
  )
}
