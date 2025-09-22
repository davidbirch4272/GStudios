import NextImage from "next/image";

export default function Entes() {
  return (
    <>
      <div style={{ padding: "24px 32px 20px 16px" }}>
        <header style={{ textAlign: "center", padding: 0 }}>
          <NextImage
            src="/Mission1.png"
            alt="Mission"
            width={475}
            height={120}
            priority
            style={{
              width: "100%",
              maxWidth: "475px",
              height: "127px",
              objectFit: "cover",
              display: "block",
              margin: "0 auto", 
            }}
          />
        </header>
      </div>
      
      <hr style={{ border: "1px solid #ccc", margin: "10px 0" }} />

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
