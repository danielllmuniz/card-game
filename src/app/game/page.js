"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Game() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [correctImage, setCorrectImage] = useState(2);

  const images = [
    { id: 1, name: "Seu Rodigo", src: "/image1.png" },
    { id: 2, name: "Pedreiro",src: "/image2.png" },
    { id: 3, name: "Seu Andrade",src: "/image3.png" },
  ];



  const handleImageClick = (id) => {
    setSelectedImage(id);
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setCorrectImage(images[randomIndex]);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ padding: "10px", backgroundColor: "#000" }}>
        <button onClick={() => router.back()} style={{ cursor: "pointer" }}>
          Voltar
        </button>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Quem é esta pessoa?</h1>
        <p>Nome: {correctImage.name}</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => handleImageClick(image.id)}
              style={{
                border:
                  selectedImage === image.id
                    ? image.id === correctImage.id
                      ? "5px solid green"
                      : "5px solid red"
                    : "none",
                cursor: "pointer",
              }}
            >
              <Image
                width={200}
                height={200}
                src={image.src}
                alt={`Person ${image.id}`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
