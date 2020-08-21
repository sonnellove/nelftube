import { Button } from "antd";
import Form from "antd/lib/form/Form";
import Title from "antd/lib/skeleton/Title";
import Axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import FileUpload from "../../../utils/FileUpload";

function EditProfile(props) {
  const user = useSelector((state) => state.user)
  const [images, setImages] = useState([])
  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const variables = {
      userId: user.userData._id,
      profile: images,
    }
    Axios.post("/api/users/editProfile", variables)
      .then(res => {
        if (res.data.success) {
          props.history.push(`/timeline/${user.userData._id}`);
        }
      })
  }
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Edit Profile</Title>
      </div>
      <Form onSubmit={onSubmit}>
        <FileUpload refreshFunction={updateImages} />
        {/* <br />
        <br />
        <label>Title <br /></label>
        <Input {...setTitle} />
        <br />
        <br />
        <label>Description</label>
        <TextArea {...setDescription} />
        <br />
        <br /> */}
        <Button onClick={onSubmit}>Save</Button>
      </Form>
    </div>
  )
}

export default EditProfile
