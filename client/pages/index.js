import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing page</h1>;
};

LandingPage.getInitialProps = async (client) => {
  const { data } = await buildClient(client).get("/api/users/currentuser");
  return data;
};

export default LandingPage;
