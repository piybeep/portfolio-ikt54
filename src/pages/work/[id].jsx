import Layout from '@/app/Layout/Layout'
import Project from '@/app/screen/Project/Project'
import React from 'react'

const ProjectId = () => {
    return (
        <Project />
    )
}

ProjectId.getLayout = (page) => {
    return (
        <div className='max-w-[1077px] mx-auto'>
            <Layout>
                {page}
            </Layout>
        </div>
    )
}

export default ProjectId