import axios from 'axios';
import vapidDecoder from './vapid-decoder';

export function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function() {
        console.log('Service worker registered');
      });
  } else {
    console.warn('Service worker is not supported in this browser');
  }
}

export function subscribeNotifications() {
  navigator.serviceWorker.ready.then((registration) => {
    registration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: vapidDecoder(process.env.REACT_APP_VAPID_PUBLIC_KEY)
      });
  });
}

export function sendNotification(message) {
  navigator.serviceWorker.ready
    .then((serviceWorkerRegistration) => {
      serviceWorkerRegistration.pushManager.getSubscription()
        .then((subscription) => {
          axios.post('/notification', {
            subscription: subscription.toJSON(),
            message: JSON.stringify(message),
          });
        });
    });
}
