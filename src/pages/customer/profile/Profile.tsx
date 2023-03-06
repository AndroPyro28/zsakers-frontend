import { NavLink, Outlet} from "react-router-dom";
import { useGetCurrentUser } from "../../../services";
import { ListNavigationButton, ProfileAvatar, ProfilePageContainer } from "./components";

function Profile() {

const { data: user } = useGetCurrentUser();
  const { firstname, lastname } = user?.profile!;

  const NavStyles = ({ isActive }: any) => {
    return {
      borderBottom: isActive ? "solid 2px rgb(99, 98, 98)" : "",
    };
  };

    return (

        <ProfilePageContainer>
            <ProfileAvatar>
                <div>
                    <img src={'/assets/defaultProfile.jpg'} alt="" />
                </div>
                <span className="full-name">
                    <span>
                        {firstname} {lastname}
                    </span>
                    <span className="icons">
                    </span>
                </span>
            </ProfileAvatar>

            <ListNavigationButton>
                <NavLink to="personal" style={NavStyles}>
                    Personal Info
                </NavLink>
                <NavLink to="history" style={NavStyles}>
                    History
                </NavLink>
            </ListNavigationButton>

            <Outlet />
        </ProfilePageContainer>
    )
}


export default Profile;