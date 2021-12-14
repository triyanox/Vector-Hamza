import Layout from "../components/Layout"
import Header from "../components/Header"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import { ThemeProvider } from '../components/Themes';
import Background from '../components/Background';
import Button from "../components/Button.js"

export default function Home() {
  return (
    <Layout pageTitle="Vector Hamza" description="Vector Art Designer" siteName="Vector Hamza">
      <ThemeProvider>
        <Background>
          <Header />

          <Gallery />
          <Button />
          <Footer />
        </Background>
      </ThemeProvider>
    </Layout>)
}
