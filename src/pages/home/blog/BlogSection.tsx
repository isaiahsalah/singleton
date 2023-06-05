import React from 'react'
import { BlogSectionBox } from './BlogSectionStyle'
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"

const Blog = [
    {
        title: 'This is blog 1',
        content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        image: 'https://i.imgur.com/AUdgMjZ.jpeg'
    },
    {
        title: 'This is blog 1',
        content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        image: 'https://i.imgur.com/AUdgMjZ.jpeg'
    },
    {
        title: 'This is blog 1',
        content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500',
        image: 'https://i.imgur.com/AUdgMjZ.jpeg'
    }
]
const BlogSection = () => {
    return (
        <BlogSectionBox>


            <div className='blogs-container'>
                <h1 className='title-section-back'>Blog</h1>
                <div className='title-section-container'>
                    <div className='line-horizontal-long' />
                    <h5 className='section-title abril'>
                        Últimas noticias
                    </h5>
                    <div className='line-horizontal-short' />
                </div>
                <div className='blog-list'>
                    {
                        Blog.map((blog, index) => {
                            return (
                                <div key={index} className={`blog-item`}>
                                    <div className={`blog-item-text blog-item-text-${index % 2 ? "top" : "bottom"}`}>
                                        <div className='blog-title'>{blog.title}</div>
                                        <div className='blog-content'>{blog.content}</div>
                                        <div className='blog-button-container'>
                                            <button className='blog-button'>Leer más 👀</button>

                                        </div>
                                    </div>
                                    <div className='blog-image-container'>

                                        <img className='blog-image' src={blog.image} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </BlogSectionBox>
    )
}

export default BlogSection