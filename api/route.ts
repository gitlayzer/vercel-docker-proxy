const routes: { [key: string]: string } = {
  "vercel-docker-proxy.vercel.app": "https://registry-1.docker.io",
  "docker.devops-engineer.com.cn": "https://registry-1.docker.io",
  "quay.devops-engineer.com.cn": "https://quay.io",
  "gcr.devops-engineer.com.cn": "https://gcr.io",
  "k8s-gcr.devops-engineer.com.cn": "https://k8s.gcr.io",
  "k8s.devops-engineer.com.cn": "https://registry.k8s.io",
  "ghcr.devops-engineer.com.cn": "https://ghcr.io",
  "cloudsmith.devops-engineer.com.cn": "https://docker.cloudsmith.io",
};

function routeByHosts(host: string) {
  if (host in routes) {
    return routes[host];
  }
  return "";
}

export { routes, routeByHosts };
