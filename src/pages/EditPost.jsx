import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
import { Container, PostForm } from '../components'

function EditPost () {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [post, setPosts] = useState(null)

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then(post => {
        if (post) {
          setPosts(post)
        }
      })
    } else {
      navigate('/')
    }
  }, [slug, navigate])
  return post ? (
    <div className='py-8 bg-gray-800'>
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null
}

export default EditPost
