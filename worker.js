export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Configuration des routes basée sur votre fichier Nginx
    const routes = {
      "/vless-ws": "http://79.133.42.185:10001",
      "/trojan-ws": "http://79.133.42.185:10002"
    };

    const target = routes[url.pathname];

    // Si le chemin ne correspond pas à vos tunnels, on répond par un message simple
    if (!target) {
      return new Response("Service non trouvé", { status: 404 });
    }

    // Proxy de la requête vers votre serveur final
    return fetch(target, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  },
};
