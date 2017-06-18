import { User } from '../models/user.interface';

const userList: User[] = [
    {
        name: 'PaulHalliday',
        company: 'PWH',
        location: 'Durham, UK',
        bio: 'I make videos on my favorite technologies, Go Angular!',
        avatar_url: 'https://avatars1.githubusercontent.com/u/637224?v=3&s=40',
        email: 'paul@paul.com'
    }, {
        name: 'ShankarChari',
        company: 'Ivy',
        location: 'Chennai, India',
        bio: 'I watch videos of my favorite technologies, Go Ionic',
        avatar_url: 'https://avatars1.githubusercontent.com/u/637224?v=3&s=40',
        email: 'shankar.chari@gmail.com'
    }
]

export const USER_LIST = userList;