import Layout from "../components/Layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Contactform from "../components/Contactform"
import { ThemeProvider } from '../components/Themes';
import Background from '../components/Background';
import Button from "../components/Button.js"
export default function About() {
    return (
        <Layout pageTitle="Contact" description="Hire Me" siteName="Vector Hamza">
            <ThemeProvider>
                <Background>
                    <Header />
                    <Contactform />
                    <Footer />
                    <Button />
                </Background>
            </ThemeProvider>
        </Layout>)
}
