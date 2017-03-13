self.addEventListener('push', (event) => {
  var defaultData = {
    title: 'You have completed a todo!',
    text: 'Nice one ;)'
  };

  var data = (event.data && event.data.json()) || defaultData;
  var title = data.title;
  var body = data.text;
  var tag = 'todo-react-pwa-notification';
  var icon = 'icon-192.png';

  event.waitUntil(
    self.registration.showNotification(title, { body, icon, tag })
  );
});
