import NextImage from "next/image";
import Link from "next/link";

export default function StudioSpace() {
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
          src="/StudioSpace1.png"
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
        <h1>Studio Space</h1>
        <h2>Private Studios & Recording Spaces</h2>
        <p>
          The G Studios consists of 5 private studios ranging from 200 to 500
          square feet. They are occupied by painters, photographers, sculptors,
          and musicians.
        </p>

        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent1.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>
        <h2>Shared Studio</h2>
        <p>
          The G Studios also offers a large 1800sq ft working space with a
          woodshop, gallery, and studio space large enough for four artists. We
          are currently accepting applications from artists for this space.
          There are two slots still available, if you think you'd be interested,
          feel free to contact us{" "}
          <Link
            href="/ContactUsSubmitWork"
            style={{ color: "blue", textDecoration: "underline" }}
          >
            here
          </Link>
          .
        </p>
        <h2>Studio B6-1</h2>
        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent2.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>
        <h2>Studio B6-2</h2>
        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent3.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent4.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent5.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <h2>Studio B6-3</h2>
        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent6.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent7.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <h2>Studio B1</h2>
        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent8.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent9.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent10.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <h2>Studio B2</h2>
        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent11.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent12.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent13.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent14.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <h2>Studio B4</h2>
        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent15.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <NextImage
            src="/StudioSpaceContent16.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "32px auto",
            }}
          />
        </div>
      </main>
    </>
  );
}
