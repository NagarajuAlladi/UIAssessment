import Head from 'next/head'
import Image from 'next/image'
import Accordian from '../Components/Accordian'
import AccordianOne from '../Components/AccordianOne'
import AccordianTwo from '../Components/AccordianTwo'
import ControlledAccordions from '../Components/ControlledAccordions'
import Navbar from '../Components/Navbar'
import ResponsiveDrawer from '../Components/ResponsiveDrawer'
import ResponsiveDrawerOne from '../Components/ResponsiveDrawerOne'
import ResponsiveDrawerTwo from '../Components/ResponsiveDrawerTwo'
import SimpleAccordion from '../Components/SimpleAccordion'
import SimpleAccordionOne from '../Components/SimpleAccordionOne'
import SimpleAccordionThree from '../Components/SimpleAccordionThree'
import Subnav from '../Components/Subnav'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ResponsiveDrawer/>

      <ResponsiveDrawerOne/>
      
       {/* <ResponsiveDrawerTwo/> */}

      <Navbar/>

      <Subnav/>

      <Accordian/>

      <AccordianOne/>

      {/* <AccordianTwo/> */}
    </div>
  )
}
