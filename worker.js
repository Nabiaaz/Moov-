export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = url.pathname === "/vless-ws" 
      ? "http://79.133.42.185:10001" 
      : "http://79.133.42.185:10002";

    return fetch(target, {
      method: request.method,
      headers: request.headers,
      body: request.body
    });
  }
};

