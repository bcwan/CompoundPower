import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

// TOAST MESSAGES
export const notifySuccess = (message) => {
  toast.success(message);
}

export const notifyFailure = (message) => {
  toast.error(message);
}

export const notifyDeletion = (message) => {
  toast.warning(message);
}