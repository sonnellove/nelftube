import { Col, Row } from 'antd';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostImage(props) {
    const [image, setImage] = useState([])
    const postImageId = props.match.params.postId

    const variable = {
        postId: postImageId
    }
    useEffect(() => {
        Axios.post("/api/post/getOnePost", variable)
            .then(res => {
                if (res.data.success) {
                    setImage(res.data.post[0])

                }
            })
    }, [])

    return (
        <div className="postImage" style={{ width: '100%', padding: '3rem 4rem' }}>
            <Row gutter={[16, 16]}>
                <Col lg={24} xs={24}>
                    <Link to={`/timeline`} ><button>back</button></Link>
                    <div>
                        {image.images && image.images.length > 0 &&
                            image.images.map((item, index) =>
                                <React.Fragment key={index}>
                                    <img key={index} src={`http://localhost:5000/${item}`} alt={`postImg-${index}`} />
                                </React.Fragment>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default PostImage
