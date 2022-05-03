import user from 'components/SocialProfile/user.json';
import data from 'components/Statistics/data.json';
import { Profile } from 'components/SocialProfile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

import { Container } from './App.styled.jsx';



export function App() {
return (
    <Container>
        <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
    </Container>
);
}