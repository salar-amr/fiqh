import { ReactNode } from "react"

declare global {
  type Attributes = {
    title: string
    description: string
    content: any
    choosen: boolean
    commentCount: number
    readTime: number
    totalRate: number
    visitCount: number
    seoTitle: any
    seoDescription: any
    seoKeyword: any
    hasVideo: boolean
    createdAt: string
    updatedAt: string
    publishedAt: string
    locale: string
    image: ImageType
    author: AuthorType
  }

  type ImageType = {
    data: {
      id: string | number
      attributes: {
        url: string
      }
    }
  }

  type AuthorType = {
    data: {
      id: string | number
      attributes: {
        fullName: string
      }
    }
  }

  type BlogCardType = {
    attributes: Attributes
    id: number | string
    variant?: string
    style?: any
    index?: number
  }

  type BlogTitle = {
    text: string
    leftElement?: ReactNode
    variant?: string
  }

  type TagType = {
    id: string | number
    attributes: {
      title: string
      image: ImageType
    }
  }

  type FakeDataBlogType = {
    imgUrl: string
    tag: string
    author: string
    time: string
    comments: any[]
    title: string
    description: string
    style?: any
    variant?: string
    index?: string | number
  }
}

export default global
