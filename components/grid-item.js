import Link from "next/link";
import { Card } from "react-bootstrap";

export default ({ post }) => {
    return (
        <Card className={`fj-card`}>
            <div className="card-body-wrapper">
                <Card.Header className="d-flex flex-row">
                    <img
                        src={post.publisher.picture}
                        className="rounded-circle mr-3"
                        height="50px"
                        width="50px"
                        alt="avatar"
                    />
                    <div>
                        <Card.Title className="font-weight-bold mb-1">
                            {post.publisher.title}
                        </Card.Title>
                        <Card.Text className="card-date">{post.date}</Card.Text>
                    </div>
                </Card.Header>
                <Link href={`/${post.slug}`}>
                    <div className="view overlay">
                        <Card.Img src={post.image} alt="Card image cap" />
                    </div>
                    <Card.Body>
                        <Card.Title className="card-main-title">{post.title}</Card.Title>
                        <Card.Text>{post.subtitle}</Card.Text>
                    </Card.Body>
                </Link>
            </div>
        </Card>
    );
};