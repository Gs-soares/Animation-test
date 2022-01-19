import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Spinner from '../components/Spinner'

const Home: NextPage = () => {
  return (
    <div>
      <Spinner />
    </div>
  )
}

export default Home
