import { useMutation, useQuery } from "react-query"
import { confirm, getCounties, login, loginEmail } from "./api"

export const useCounties = () => useQuery("counties", getCounties)
export const useLogin = (): any => useMutation<any>(login)
export const useLoginEmail = (): any => useMutation<any>(loginEmail)
export const useConfirm = (): any => useMutation<any>(confirm)
