import { User } from './models/User';

const user = new User({ name: 'Bob', age: 42 });

user.save();
