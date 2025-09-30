import NextImage from "next/image";

export default function EntesBeings() {
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
          src="/EntesBeings1.png"
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
        <h1>Our Mission</h1>
        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/EntesBeingsContent1.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>

        <h1>About Entes Beings, inc.</h1>
        <p>
          Entes Beings, Inc. started in a basement in Sydney Street in
          Cambridge, Massachusetts in 1993 as a DBA. The Owner, Giovani
          Hoyos-Corrales, began casting, painting (patina) and developing new
          techniques in the process of producing sculptures with any type of
          material. Giovani is fascinated by the process of transforming the
          intuitions of the mind, the imagination and the beings that surround
          us in the ether into a three dimensional sculpture. Dreaming alone,
          inspired by the past, and the Entes Beings (seres) around him as his
          life progressed, provided the motivation to continue what became
          Giovani’s business of selling gargoyle statues in Boston,
          Massachusetts, and in different states around the country. Now Entes
          Beings, Inc. is an S-Corporation that is dedicated to aiding artists
          in the exposure of their artwork regardless of the medium. The
          corporation was started in 2001 and now manages The G Studios.
        </p>
      </main>
    </>
  );
}
