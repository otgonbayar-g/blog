import { Image, Card } from "react-bootstrap";

export default () => (
    <Card className="mb-4 admin-intro">

        {/* <Card.Header className="d-flex flex-row">
            <div>
                <Card.Title className="font-weight-bold mb-1">
                    1234.mn - Онлайн видео сургалт
                </Card.Title>
                <Card.Text className="card-date">2023 оны 3 сарын 8</Card.Text>
            </div>
        </Card.Header> */}
        <Card.Body>
            <div className="card-body-wrapper">
                <Card.Body>
                    <Image roundedCircle width={64} height={64} className="me-3" src="logo.jpg" alt="Generic placeholder" />
                    <Card.Title className="card-main-title">
                        <h4>1234.mn - Онлайн видео сургалт</h4>
                    </Card.Title>
                    <Card.Text>Бид програмчлалын технологийн чиглэлээр төрөл бүрийн сонирхолтой мэдээллүүдийг энэхүү блогоор хүргэж байна.</Card.Text>
                </Card.Body>
            </div>
        </Card.Body>
    </Card>
);