import axios from "axios";

// ingress-nginx = namespace
// ingress-nginx-controller = service name
// cross name space communitcation url format "http://serviceName.namespace.svc.cluster.local" with options object to specify domain name in headers

const buildClient = ({ req }) => {
  req.headers.Host = "tickets.dev";

  if (typeof window === "undefined") {
    return axios.create({
      baseURL: "http://35.243.128.119:80",
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: "/",
    });
  }
};

export default buildClient;
