import Layout from '@/app/Layout/Layout'
import Project from '@/app/screen/Project/Project'
import React from 'react'
import data from '../../app/screen/Project/projectData'

const ProjectId = () => {
  return <Project />
}

export async function getServerSideProps(context) {
  let names = Object.keys(data)
  let info = {
    data: data[names[context.query.id - 1]],
    title: names[context.query.id - 1]
  }

  if (!info.data) {
    return {
      notFound: true
    }
  }

  return {
    props: {}
  }
}

ProjectId.getLayout = (page) => {
  return (
    <div className='max-w-[1077px] mx-auto'>
      <Layout>{page}</Layout>
    </div>
  )
}

export default ProjectId
