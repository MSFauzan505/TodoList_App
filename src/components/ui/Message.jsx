import { Button, message } from 'antd'
import React from 'react'

const Message = ({text, info}) => {
    const [messageApi, contextHolder] = message.useMessage()

    const infoMessage = () => {
        messageApi.info({info})
    }

    return (
        <>
            {contextHolder}
            <Button type="primary" onClick={infoMessage}>
                {text}
            </Button>
        </>
    )
}

export default Message