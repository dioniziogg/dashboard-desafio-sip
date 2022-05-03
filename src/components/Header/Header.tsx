import { BellIcon } from '../icons';
import { Avatar, Container, NotificationContainer, UserInfo } from './style';
import UserAvatar from '../../assets/user.png';
import { SearchBar } from '../Searchbar/Searchbar';

export const Header = () => {

    return (
        <Container> 

            <SearchBar />

            <UserInfo>
                <NotificationContainer>
                    <div>
                        <span>9</span>
                    </div>
                    <BellIcon />
                </NotificationContainer>
                <Avatar>
                    <img src={UserAvatar} alt="Usuário" />
                </Avatar>
            </UserInfo>
        
        </Container>
    );

}