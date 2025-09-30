import NextImage from "next/image";

export default function Entes() {
  return (
    <>
     <div
        style={{
          position: "relative",
          width: "120%",
          maxWidth: "500px",
          aspectRatio: "20 / 11",
          margin: "0 auto",
        }}
      >
        <NextImage
          src="/Mission1.png"
          alt="Mission"
          priority
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      
      <hr style={{ border: "1px solid #ccc", margin: "2px 0" }} />

      <main>
        <h1>Entes</h1>
          <div style={{ marginBottom: "12px" }}>
            <NextImage
              src="/EntesContent1.png"
              alt="Mission"
              width={500}
              height={150}
              style={{
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
        <h1>This page is currently under construction.  Hang On!  We'll be right back!!!</h1>        
      </main>
    </>
  );
}
