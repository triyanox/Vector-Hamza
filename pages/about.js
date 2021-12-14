import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Aboutcomp from "../components/Aboutcomp"
import { ThemeProvider } from '../components/Themes';
import Background from '../components/Background';
import Button from "../components/Button.js"
export default function About() {
    return (
        <Layout pageTitle="About" description="About Me" siteName="Vector Hamza">
            <ThemeProvider>
                <Background>
                    <Header />
                    <Aboutcomp />
                    <Footer />
                    <Button />
                </Background>
            </ThemeProvider>
        </Layout>)
}
