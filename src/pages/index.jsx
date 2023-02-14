import Info from "@/app/components/Info/Info";
import Layout from "@/app/Layout/Layout";
import Main from "@/app/screen/Main/Main";

const Home = () => {
  return (
    <Main />
  )
}

Home.getLayout = (page) => {
  return (
    <Layout>
      <Info />
      {page}
    </Layout>
  )
}

export default Home
