import styled from "styled-components";

const Container = styled.div``;
const Left = styled.div``;
const Right = styled.div``;
const UserProfile = styled.div``;
const MyProducts = styled.div``;
const OrderDetail = styled.div``;
const PurchaseHistory = styled.div``;
const ProfileButton = styled.div``;
const OrderDetailButton = styled.div``;
const PurchaseHistoryButton = styled.div``;
const MyProductsButton = styled.div``;

const Profile = () => {
  return (
    <div>
      <Container>
        <Left>
          <ProfileButton></ProfileButton>
          <MyProductsButton></MyProductsButton>
          <OrderDetailButton></OrderDetailButton>
          <PurchaseHistoryButton></PurchaseHistoryButton>
        </Left>
        <Right>
          <UserProfile></UserProfile>
          <MyProducts></MyProducts>

          <OrderDetail></OrderDetail>
          <PurchaseHistory></PurchaseHistory>
        </Right>
      </Container>
    </div>
  );
};

export default Profile;
