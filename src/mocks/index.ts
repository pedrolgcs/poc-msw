import '@mswjs/interceptors/lib/interceptors/ClientRequest';

export async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { browser } = await import('./browser');
    browser.start({
      serviceWorker: {
        // Specify the worker script URL relative to the _root_.
        url: '/venda-assistida/mockServiceWorker.js',
        options: {
          // Override the scope to the root ("/").
          // By default, the worker is scoped to its location on your server,
          // which in this case would be "/prefix".
          scope: '/',
        },
      },
    });
  }
}

initMocks();
