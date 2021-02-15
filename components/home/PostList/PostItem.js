import React from 'react'
import { default as NextLink } from 'next/link'
import { RichText } from 'prismic-reactjs'

import PostDate from './PostDate'
import FirstParagraph from './FirstParagraph'
import { hrefResolver, linkResolver } from 'prismic-configuration'

/**
 * Post list item component
 */
const PostItem = ({ post }) => {
  const title = RichText.asText(post.data.title) ? RichText.asText(post.data.title) : 'Untitled'
  
  return (
    <div className="blog-post">
      
      <a href={post.data.link.url} target="_blank">
        <h2>{title}</h2>
      </a>
  

      <PostDate date={post.data.date} />

      <p>
        {post.data.publication_name}
      </p>
      
      <FirstParagraph
        sliceZone={post.data.body}
        textLimit={300}
      />
    </div>
  )
}

export default PostItem
