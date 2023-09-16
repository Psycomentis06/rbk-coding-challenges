import {toastStore} from '../stores/toast'
import { randomId } from '../utils/rand'
export interface Toast {
  title?: string
  message?: string
  type?: 'success' | 'error' | 'warn' | 'info'
  closeBtn?: boolean
  timeout?: number
}

export interface ToastInternal {
  id: string
  toast: Toast
}

export function addToast(toast: Toast) {
  toastStore.update(t => {
    const toastInt: ToastInternal = {
      toast,
      id: randomId(10)
    }
    t.push(toastInt)
    let timeout = toast?.timeout || 3000
    setTimeout(() => {
      removeToast(toastInt.id)
    }, timeout)
    return t
  })
}

export function removeToast(id: string) {
  toastStore.update(t => t.filter(t => t.id !== id))
}
