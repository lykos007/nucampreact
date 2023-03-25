import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectCampsiteByID } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentList';

const CampsiteDetailPage = () => {
    const { campsiteID } = useParams();
    const campsite = selectCampsiteByID(campsiteID);
    
    return (
        <Container>
            <Row>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteID} />
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;