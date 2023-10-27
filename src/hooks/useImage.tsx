import { useEffect, useState } from "react";

const useImage = (basePath: string, fileName: string) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(undefined);
  const imgPath = `${basePath}${fileName}`

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(imgPath);
        setImage(response.default);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [imgPath]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
