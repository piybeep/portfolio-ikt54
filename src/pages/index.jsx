
import Layout from "@/app/Layout/Layout";
import Main from "@/Main/Main";

const Home = () => {
  return (
    <Main />
  )
}

Home.getLayout = (page) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home
