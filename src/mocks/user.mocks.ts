import { User } from '../models/user.interface';

const userList: User[] = [
    {
        name: 'PaulHalliday',
        company: 'PWH',
        location: 'Durham, UK',
        bio: 'I make videos on my favorite technologies, Go Angular!',
        avatar_url: 'http://i.imgur.com/java62p6.jpg',
        email: 'paul@paul.com'
    }, {
        name: 'ShankarChari',
        company: 'Ivy',
        location: 'Chennai, India',
        bio: 'I watch videos of my favorite technologies, Go Ionic',
        avatar_url: 'http://i.imgur.com/java62p6.jpg',
        email: 'shankar.chari@gmail.com'
    }
]

export const USER_LIST = userList;