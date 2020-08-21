import { Button } from "antd";
import Form from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useInputHooks from "../../Hooks/useInputHooks";
import Post from "./Post";
import SearchFeature from "./SearchFeature";

function Timeline() {
  const user = useSelector((state) => state.user);
  const [posts, setPosts] = useState([]);
  const [description, setDescription, resetDescription] = useInputHooks("");
  const [Skip, setSkip] = useState(0)
  const [Limit, setLimit] = useState(8)
  const [PostSize, setPostSize] = useState()
  const [SearchTerms, setSearchTerms] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      writer: user.userData._id,
      description: description
    }
    resetDescription("")

    Axios.post("/api/post/uploadfiles", variables)
      .then((res) => {
        if (res.data.success) {
          updatepost(res.data.result)
        }
      })
  }

  const updatepost = (newPost) => {
    setPosts(newPost.concat(posts))
  }

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit
    }

    getPost(variables)
  }, [])

  const getPost = (variables) => {
    Axios.post("api/post/getPost", variables).then((res) => {
      if (res.data.success) {
        if (variables.loadMore) {
          setPosts([...posts, ...res.data.post]);
        } else {
          setPosts(res.data.post);
        }
        setPostSize(res.data.postSize)
      } else {
        alert("Failed to get Post");
      }
    });
  }

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      // filters: Filters,
      searchTerm: SearchTerms
    }
    getPost(variables)
    setSkip(skip)
  }


  const updateSearchTerms = (newSearchTerm) => {

    const variables = {
      skip: 0,
      limit: Limit,
      // filters: Filters,
      searchTerm: newSearchTerm
    }

    setSkip(0)
    setSearchTerms(newSearchTerm)

    getPost(variables)
  }



  return (
    <>
      <div className="app__posts">
        <div className="app__posts__left">
          <div>
            <SearchFeature
              refreshFunction={updateSearchTerms}
            />
          </div>
          <div className="imgupload">
            <Link to="/upload">UplaodImages</Link>
            <div style={{ paddingBottom: '30px' }}>
              <Form style={{ display: 'flex', height: '10px' }} onSubmit={onSubmit} >
                <TextArea style={{ flex: 1 }} {...setDescription}
                  placeholder="write some post"
                />
                <Button style={{ flex: 0 }} onClick={onSubmit}>Submit</Button>
              </Form>
            </div>
          </div>
          {user.userData && posts.map((post, index) => (
            <React.Fragment key={index}>
              <Post 
                index={index}
                postId={post._id}
                title={post.title}
                description={post.description}
                imageUrl={post.images}
                profile={user.userData.profile}
                writer={post.writer}
                createdAt={post.createdAt}
                userId={user.userData._id}
                setPosts={setPosts}
              />
            </React.Fragment>
          ))}

          {PostSize >= Limit &&
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <button onClick={onLoadMore}>Load More</button>
            </div>
          }
        </div>
        {/* <div className="app__posts__right">
          <RightPost imageUrl={backgroundImg} />
        </div> */}
      </div>
    </>
  );
}

export default Timeline;
