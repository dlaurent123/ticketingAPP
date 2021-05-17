import axios from "axios";

const LandingPage = (data) => {
  return <h1>Landing page</h1>;
};

// ingress-nginx = namespace
// ingress-nginx-controller = service name
// cross name space communitcation url format "http://serviceName.namespace.svc.cluster.local" with options object to specify domain name in headers

LandingPage.getInitialProps = async ({ req }) => {
  req.headers.Host = "tickets.dev";

  if (typeof window === "undefined") {
    try {
      const { data } = await axios.get(
        "http://35.243.128.119:80/api/users/currentuser",
        {
          headers: req.headers,
        }
      );

      return data;
    } catch (error) {
      console.log("errors", error);
    }
  } else {
    const { data } = await axios.get("/api/users/currentuser");

    return data;
  }
};

export default LandingPage;
