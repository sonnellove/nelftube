import { Button, Typography } from "antd";
import Form from "antd/lib/form/Form";
import TextArea from "antd/lib/input/TextArea";
import Axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useInputHooks from "../../Hooks/useInputHooks";
import FileUpload from "../../utils/FileUpload";

function UploadImagePage({history}) {
  const { Title } = Typography;
  const user = useSelector((state) => state.user);
  const [images, setImages] = useState([]);
  const [title, setTitle, resetTitle] = useInputHooks("");
  const [description, setDescription, resetDescription] = useInputHooks("");

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if( !description  ) return alert('fill all the fields first!')
    const variables = {
      writer: user.userData._id,
      title: title,
      description: description,
      images: images,
    };
    resetDescription("");

    Axios.post("/api/post/uploadfiles", variables).then((response) => {
      if(response.data.success){
        alert('success')
        history.push('/timeline')
      }else{
        alert('failed')
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Upload Image Post</Title>
      </div>
      <Form onSubmit={onSubmit}>
        <FileUpload refreshFunction={updateImages} />
        <br />
        <br />
        {/* <label>Title <br /></label>
        <Input {...setTitle} />
        <br />
        <br /> */}
        <label>Description</label>
        <TextArea {...setDescription}/>
        <br />
        <br />
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default UploadImagePage;
