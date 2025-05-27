import { useState } from "react"

const useDrawer = () => {
    const [open, setOpen] = useState(false)

    const showDrawer = () => {
        setOpen(true)
    }

    const onClose = () => {
        setOpen(false)
    }
    
    return { open, onClose, showDrawer }
}

export default useDrawer