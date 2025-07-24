export interface Subscriber {
  id: number
  name: string
  avatar: string
  link: string
}

export const users: Subscriber[] = [
  {
    id: 1,
    name: 'Gussie Singleton',
    avatar: './avatars/user2.png',
    link: '/channel',
  },
  {
    id: 2,
    name: 'Nora Francis',
    avatar: './avatars/user3.png',
    link: '/channel',
  },
  {
    id: 3,
    name: 'Belle Briggs',
    avatar: './avatars/user4.png',
    link: '/channel',
  },
  {
    id: 4,
    name: 'Eunice Cortez',
    avatar: './avatars/user5.png',
    link: '/channel',
  },
  {
    id: 5,
    name: 'Emma Hanson',
    avatar: './avatars/user6.png',
    link: '/channel',
  },
  {
    id: 6,
    name: 'Leah Berry',
    avatar: './avatars/user7.png',
    link: '/channel',
  },
]
