import vapidDecoder from './vapid-decoder';

export function register() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/serviceworker.js')
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
