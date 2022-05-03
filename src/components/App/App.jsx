import user from 'components/SocialProfile/user.json';
import { Profile } from 'components/SocialProfile/Profile';

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
    </Container>
);
}