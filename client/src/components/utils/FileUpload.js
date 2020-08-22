import { PlusOutlined } from "@ant-design/icons";
import Axios from "axios";
import React, { useState } from "react";
import Dropzone from "react-dropzone";

function FileUpload({ refreshFunction }) {
  const [Images, setImages] = useState([]);

  const onDrop = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);
    
    Axios.post("api/post/uploadImage", formData, config).then((response) => {
      if (response.data.success) {
        setImages([...Images, response.data.image]);
        refreshFunction([...Images, response.data.image]);
      } else {
        alert("Failed to save the Image in Server");
      }
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: "300px",
              height: "240px",
              border: "1px solid lightgray",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <PlusOutlined type="plus" style={{ fontSize: "3rem" }} />
          </div>
        )}
      </Dropzone>

      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images.map((image, index) => (
          <div key={index}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`https://raw.githubusercontent.com/sonnellove/nelftube/master/${image}`}
              alt={`postImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
