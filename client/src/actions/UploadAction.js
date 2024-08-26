import * as UploadApi from "../api/UploadRequest";
import { toast } from "react-toastify";

// Upload image
export const uploadImage = (data) => async (dispatch) => {
  try {
    console.log("Image upload Action started");
    await UploadApi.uploadImage(data);
  } catch (error) {
    console.log(error);
    toast.error("Failed to upload image.");
  }
};

// Upload post
export const uploadPost = (data) => async (dispatch) => {
  try {
    const response = await UploadApi.uploadPost(data);
    console.log('Response:', response.data);
    dispatch({ type: "UPLOAD_SUCCESS", data: response.data });
    return response.data; // Return the post data
  } catch (error) {
    console.log('Error uploading post:', error.response || error.message);
    toast.error("Failed to upload post.");
    throw error;
  }
};

// Upload video
export const uploadVideo = (data) => async (dispatch) => {
  try {
    console.log("Video upload Action started");
    await UploadApi.uploadVideo(data);
  } catch (error) {
    console.log(error);
    toast.error("Failed to upload video.");
  }
};

// Upload file
export const uploadFile = (data) => async (dispatch) => {
  try {
    console.log("File upload Action started");
    await UploadApi.uploadFile(data);
  } catch (error) {
    console.log(error);
    toast.error("Failed to upload file.");
  }
};
