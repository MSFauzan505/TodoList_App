import { message } from "antd"
import { useMemo } from "react"

const useMessage = ()=>{
    const [messageApi, contextHolder] = message.useMessage()

    const showMessage = useMemo(()=> ({
        info: (msg)=> messageApi.info(msg),
        success: (msg)=> messageApi.success(msg),
        warning: (msg)=> messageApi.warning(msg),
        error: (msg)=> messageApi.error(msg),
        loading: (msg)=> messageApi.loading(msg)  
    }),[messageApi])

    return {showMessage, contextHolder}
}

export default useMessage