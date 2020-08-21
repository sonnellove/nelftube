import { Avatar, Col, List, Row } from 'antd';
import React from 'react';
import Comments from './Sections/Comments';
import Getvideo from './Sections/Getvideo';
import LikeDislikes from './Sections/LikeDislikes';
import SideVideo from './Sections/SideVideo';
import Subscriber from './Sections/Subscriber';

function DetailVideoPage(props) {
    
    const videoId = props.match.params.videoId
    const [Video, CommentLists, setCommentLists, setVideo, updateComment, setVariable, updateVariable] = Getvideo(videoId)
    if (Video.writer) {
        return (
            <Row>
                <Col lg={18} xs={24}>
                    <div className="postPage" style={{ width: '100%' }}>
                        <video className="Video" src={`http://localhost:5000/${Video.filePath}`} controls></video>

                        <List.Item
                            actions={[<LikeDislikes video videoId={videoId} userId={localStorage.getItem('userId')} />, <Subscriber userTo={Video.writer._id} userFrom={localStorage.getItem('userId')} />]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={Video.writer && Video.writer.image} />}
                                title={<a href="https://ant.design">{Video.title}</a>}
                                description={Video.description}
                            />
                            <div></div>
                        </List.Item>

                        <Comments CommentLists={CommentLists} postId={Video._id} refreshFunction={updateComment} />

                    </div>
                </Col>
                <Col lg={6} xs={24}>

                <SideVideo setVariable={setVariable} videoId={videoId} setCommentLists={setCommentLists} setVideo={setVideo} updateVariable={updateVariable} />

                </Col>
            </Row>
        )

    } else {
        return (
            <div>Loading...</div>
        )
    }

}

export default React.memo(DetailVideoPage)

