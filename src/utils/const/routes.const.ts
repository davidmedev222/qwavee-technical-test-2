export const enum Routes {
  Home = '/',
  AppGames = '#app-games',
  TopGames = '#top-games',
  Products = '#products',
  Features = '#features',
  Support = '#support',
  About = '#about',
  ContactUs = '#contact-us',
  YoutubePlaylist = '#youtube-playlist',
  Blog = '#blog',
  TermsConditions = '#terms-conditions'
}

export const HeaderLinks = [
  { label: 'App & Games', href: Routes.AppGames },
  { label: 'Top Games', href: Routes.TopGames }
]

export const FooterLinks = [
  {
    label: 'Company',
    links: [
      { label: 'Products', href: Routes.Products },
      { label: 'Apps & Games', href: Routes.AppGames },
      { label: 'Features', href: Routes.Features }
    ]
  },
  {
    label: 'Help',
    links: [
      { label: 'Support', href: Routes.Support },
      { label: 'About', href: Routes.About },
      { label: 'Contact Us', href: Routes.ContactUs }
    ]
  },
  {
    label: 'Resources',
    links: [
      { label: 'Youtube Playlist', href: Routes.YoutubePlaylist },
      { label: 'How to - Blog', href: Routes.Blog },
      { label: 'Terms & Conditions', href: Routes.TermsConditions }
    ]
  }
]
