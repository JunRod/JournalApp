export const FileUpload = async (file) => {
  if (!file) throw new Error("No tenemos ningun archivo a subir");

  const cloudUrl = "https://api.cloudinary.com/v1_1/dabwdkdys/image/upload";

  const formData = new FormData();
  formData.append("upload_preset", "react-journal");
  formData.append("file", file);

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("No se puede subir imagen");

    const result = await resp.json();

    return result.secure_url

  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
