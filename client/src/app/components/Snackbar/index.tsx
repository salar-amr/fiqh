import { Snackbar as SBar, Alert } from "@mui/material"
import React from "react"

type SnackbarProps = {
  open: boolean
  handleClose: () => void
  duration?: number
  variant?: any
  message: string
}

const Snackbar = ({
  open = true,
  handleClose,
  duration = 2000,
  variant = "success",
  message,
}: SnackbarProps) => (
  <SBar open={open} autoHideDuration={duration} onClose={handleClose}>
    <Alert severity={variant} sx={{ width: "100%" }} onClose={handleClose}>
      {/* <AlertText>{message}</AlertText> */}
    </Alert>
  </SBar>
)
export default Snackbar
