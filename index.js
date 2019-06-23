export default class HeadHelper {
  static buildHead(base, other) {
    return {
      title: base.title,
      meta: [...base.meta, ...other.meta],
      link: [...base.link, ...other.link]
    }
  }
  
  static getBaseHead(title, siteTitle, description, imageUrl, pageUrl) {
    return {
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: description
        },
        { hid: 'og:url', name: 'og:url', content: pageUrl },
        { hid: 'og:image', name: 'og:image', content: imageUrl },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: `${title} - ${siteTitle}`
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: `${title} - ${siteTitle}`
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: imageUrl
        }
      ],
      link: [{ hid: 'canonical', name: 'canonical', content: pageUrl }]
    }
  }
  
  static getBlogHead(author, post) {
    return {
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: author
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: author
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article'
        },
        {
          hid: 'article:published_time',
          name: 'article:published_time',
          content: post.first_publication_date
        },
        {
          hid: 'article:modified_time',
          name: 'article:modified_time',
          content: post.last_publication_date
        },
        {
          hid: 'article:author',
          name: 'article:author',
          content: author
        },
        {
          hid: 'article:section',
          name: 'article:section',
          content: post.data.category
        }
      ]
    }
  }
  
  static getPortfolioHead(author) {
    return {
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: author
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          content: author
        }
      ],
      link: []
    }
  }
}
