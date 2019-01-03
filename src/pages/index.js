import React from 'react'
import Layout from '../components/layout'
import DateRow from '../components/dateRow'
import dates from '../data/dates'

const IndexPage = () => (
  <Layout>
    <h3 style={{ marginTop: '2rem' }}>Dates:</h3>
    {dates.map((date, index) => (
      <DateRow key={date.date} number={dates.length - index} data={date} />
    ))}
  </Layout>
)

export default IndexPage
