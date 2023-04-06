import { useSelector } from "react-redux";
import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteByID } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentList';
import SubHeader from '../components/SubHeader';

const CampsiteDetailPage = () => {
    const { campsiteID } = useParams();
    const campsite = useSelector(selectCampsiteByID(campsiteID));
    console.log('campsite:', campsite)

    return (
        <Container>            
            <SubHeader current={campsite.name} detail={true} />
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteID} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;