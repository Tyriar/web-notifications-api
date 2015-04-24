function attemptPlainNotification() {
  attemptNotification();
}

function attemptNotificationWithBodyText() {
  attemptNotification({
    dir:  'ltr',
    lang: 'en-AU',
    body: 'The body, lang, dir, icon and tag options are not required'
  });
}

function attemptNotificationWithIcon() {
  attemptNotification({
    icon: 'logo.png'
  });
}

function attemptNotificationWithTag() {
  attemptNotification({
    body: 'The `tag` option prevents multiple notifications with the same tag from appearing',
    tag: 'tag-message'
  });
}

function attemptNotification(options) {
  if (!doesBrowserSupportBrowser()) {
    alert('This browser does not support desktop notification');
  } else if (Notification.permission === 'granted') {
    showNotification(options);
  } else if (Notification.permission === 'default') {
    Notification.requestPermission(function (permission) {
      showNotification(options)
    });
  }
  // Do nothing if Notification.permission === 'denied'
}

function doesBrowserSupportBrowser() {
  return 'Notification' in window;
}

function showNotification(options) {
  // Second parameter is optional
  new Notification('Notification API', options);

  // Available events on Notification:
  //  click
  //  error
  //  show
  //  close
}
