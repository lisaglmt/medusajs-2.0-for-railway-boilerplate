"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import "@/src/styles/globals.css"

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
]

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
          transition: "background-image 1s ease-in-out",
        }}
      />
      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          padding: "4rem",
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          Nom de la marque
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "600px" }}>
          Une description inspirante ici qui reflète votre univers de bijoux.
        </p>
      </main>
    </div>
  )
}
