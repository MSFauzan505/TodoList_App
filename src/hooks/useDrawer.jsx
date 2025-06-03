import { useState } from "react"

const useDrawer = () => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(null)

    const showDrawer = (item) => {
        setOpen(true)
        setData(item)

    }

    const onClose = () => {
        setOpen(false)
        setData(null)
    }
    return { open, onClose, showDrawer, data }
}

export default useDrawer