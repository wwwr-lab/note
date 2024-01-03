/** @type {import('next').NextConfig} */
const nextConfig = {
  images : {
    remotePatterns : [{
      protocol: 'https',
      hostname:'images.unsplash.com',

    }]
  },
  async redirects(){
    //다른 곳으로 이동
    return [
      {
        source: '/products/deleted_forever',
        destination:'/products',
        permanent:true
      },
      {
        source: '/products/deleted_not_forever',
        destination:'/products',
        permanent:false
      },
      
    ]
  },
  async rewrites(){
    //다른 주소 덮어쓰기(대체))
    return [
      {
        source:'/ellie',
        destination:'/about/me/ellie'
      },
      {
        source:'/items/:slug',
        destination:'/products/:slug'
      }
    ]
  }
}

module.exports = nextConfig
