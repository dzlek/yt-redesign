export interface Subscriber {
  id: number
  name: string
  avatar: string
}

export const users: Subscriber[] = [
  {
    id: 1,
    name: 'Gussie Singleton',
    avatar: './avatars/user2.png',
  },
  {
    id: 2,
    name: 'Nora Francis',
    avatar: './avatars/user3.png',
  },
  {
    id: 3,
    name: 'Belle Briggs',
    avatar: './avatars/user4.png',
  },
  {
    id: 4,
    name: 'Eunice Cortez',
    avatar: './avatars/user5.png',
  },
  {
    id: 5,
    name: 'Emma Hanson',
    avatar: './avatars/user6.png',
  },
  {
    id: 6,
    name: 'Leah Berry',
    avatar: './avatars/user7.png',
  },
]
