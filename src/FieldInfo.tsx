import React from 'react'

export interface FieldInfo {
  label: string
  value: string
}

interface FieldInfoProps {
  fieldInfo: FieldInfo
}

export const FieldInfo = ({ fieldInfo }: FieldInfoProps) => {
  const { label, value } = fieldInfo

  return (
    <div className='fieldInfo'>
      <div className='fieldInfoLabel'>{label}</div>
      {value}
    </div>
  )
}
