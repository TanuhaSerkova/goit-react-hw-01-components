import PropTypes from 'prop-types';
import {
    UserProfile,
    Description,
    Avatar,
    UserName,
    UserInfo,
    StatsList,
    StatsItem,
    Label,
    Quantity,
} from './Profile.styled.jsx';

export const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) => {
    return (
        <UserProfile>
            <Description>
                <Avatar src={avatar} alt="User avatar" />
                <UserName>{username}</UserName>
                <UserInfo>{tag}</UserInfo>
                <UserInfo>{location}</UserInfo>
            </Description>

            <StatsList class='stats'>
                <StatsItem>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </StatsItem>
                <StatsItem>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </StatsItem>
            </StatsList>
        </UserProfile>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
};