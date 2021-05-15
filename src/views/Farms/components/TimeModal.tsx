import React, { useCallback, useEffect, useState } from 'react'
import { Button, Modal,Text } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import Spacer from '../../../components/Spacer'
import { useHarvestTime } from '../../../hooks/useHarvest'

interface TimeModalProps {
  pid: number
  onDismiss?: () => void
}
const secondsToHms = (d)=>{
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);

  const hDisplay = (h<10?h.toString().padStart(2,"0"):h.toString()).concat(":");
  const mDisplay = (m<10?m.toString().padStart(2,"0"):m.toString()).concat(":");
  const sDisplay = (s<10?s.toString().padStart(2,"0"):s.toString());
  return hDisplay + mDisplay + sDisplay;
}
const TimeModal: React.FC<TimeModalProps> = ({ pid, onDismiss}) => {
  const [harvestTime,setHarvestTime] = useState(0)

  useHarvestTime(pid).then((res)=>{
    setHarvestTime(res)
  })

  useEffect(()=>{
    if(harvestTime > 0)
    {
      setTimeout(()=> {
        setHarvestTime(harvestTime - 1)
      },1000)
    }
  },[harvestTime])
  const timeString = secondsToHms(harvestTime)
  return (
    <Modal title="Harvest In" onDismiss={onDismiss}>
      <Text fontSize="32px" bold color="primary" style={{margin: "0 auto"}}> { timeString }</Text>
      <Spacer size="sm"/>
    </Modal>
  )
}

export default TimeModal
