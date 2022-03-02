import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'

import { InfoCircleOutlined } from '@ant-design/icons'
import { Tabs, Tooltip } from 'antd'
import FloatingTriggerButton from '../../../../../lib/FloatingTriggerButton'
import FloatingModal from '../../../../../lib/FloatingModal'
import { infoContent } from './InfoModalContent'

const { TabPane } = Tabs;



const Info = observer(() => {
  const [visible, setVisible] = useState(false);
  
  return (
    <>
      <FloatingModal title="Information" visible={visible} close={() => setVisible(false)}>
        <Tabs tabPosition='left' defaultActiveKey='0' size='small'>
          {Object.entries(infoContent).map((value, index) => (
            <TabPane tab={value[0]} key={index}>
              {value[1]}
            </TabPane>
          ))}
        </Tabs>

      </FloatingModal>
      <FloatingTriggerButton onClick={() => setVisible(true)}>
        <Tooltip placement='left' title='Print CV'>
          <InfoCircleOutlined />
        </Tooltip>
      </FloatingTriggerButton>
    </>
  )
})

export default Info