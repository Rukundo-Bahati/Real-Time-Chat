import React, { useState, useRef } from "react";
import "./PostShare.css";
import {
  UilScenery,
  UilPlayCircle,
  UilFile,
  UilTimes,
} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadImage,
  uploadPost,
  uploadVideo,
  uploadFile,
} from "../../actions/UploadAction";
import { toast } from "react-toastify";

const PostShare = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.uploading);
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [file, setFile] = useState(null); // State for file
  const desc = useRef();
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  // Handle media change for images, videos, and files
  const onMediaChange = (event, setMedia) => {
    if (event.target.files && event.target.files[0]) {
      let selectedFile = event.target.files[0];
      setMedia(selectedFile);
    }
  };

  const imageRef = useRef();
  const videoRef = useRef();
  const fileRef = useRef(); // Reference for file input

  // Handle file upload
  const handleFileUpload = async (file, type) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`/upload/${type}`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      const result = await response.json();
      console.log(result.message);
      return result.fileName; // Assuming the server returns file name
    } catch (error) {
      toast.error(`Failed to upload ${type}.`);
      console.error("Error:", error);
      return null;
    }
  };

  // Handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value.trim() || ""
    };

    let imageFileName = null;
    let videoFileName = null;
    let fileFileName = null;

    // Handle image upload
    if (image) {
      imageFileName = await handleFileUpload(image, 'images');
      if (imageFileName) newPost.image = imageFileName;
    }

    // Handle video upload
    if (video) {
      videoFileName = await handleFileUpload(video, 'videos');
      if (videoFileName) newPost.video = videoFileName;
    }

    // Handle file upload
    if (file) {
      fileFileName = await handleFileUpload(file, 'files');
      if (fileFileName) newPost.file = fileFileName;
    }

    try {
      dispatch(uploadPost(newPost));
      toast.success("Post shared successfully!");
      resetShare();
    } catch (err) {
      toast.error("Failed to share post.");
      console.log(err);
    }
  };

  // Reset Post Share
  const resetShare = () => {
    setImage(null);
    setVideo(null);
    setFile(null); // Reset file state
    desc.current.value = "";
  };

  return (
    <div className="PostShare">
      <img
        src={
          user.profilePicture
            ? serverPublic + user.profilePicture
            : serverPublic + "defaultProfile.png"
        }
        alt="Profile"
      />
      <div>
        <input
          type="text"
          placeholder="What's happening?"
          required
          ref={desc}
        />

        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>

          <div
            className="option"
            style={{ color: "var(--video)" }}
            onClick={() => videoRef.current.click()}
          >
            <UilPlayCircle />
            Video
          </div>

          <div
            className="option"
            style={{ color: "dodgerblue" }}
            onClick={() => fileRef.current.click()}
          >
            <UilFile />
            File
          </div>

          <button
            className="button ps-button"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "Uploading" : "Share"}
          </button>

          <div style={{ display: "none" }}>
            <input
              type="file"
              ref={imageRef}
              onChange={(e) => onMediaChange(e, setImage)}
            />
            <input
              type="file"
              ref={videoRef}
              onChange={(e) => onMediaChange(e, setVideo)}
            />
            <input
              type="file"
              ref={fileRef} // File input reference
              onChange={(e) => onMediaChange(e, setFile)}
            />
          </div>
        </div>

        {image && (
          <div className="previewMedia">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}

        {video && (
          <div className="previewMedia">
            <UilTimes onClick={() => setVideo(null)} />
            <video src={URL.createObjectURL(video)} controls />
          </div>
        )}

        {file && (
          <div className="previewMedia">
            <UilTimes onClick={() => setFile(null)} />
            <p>File: {file.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;

