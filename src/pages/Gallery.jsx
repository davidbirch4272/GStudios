import NextImage from "next/image";
import Link from "next/link";

export default function Gallery() {
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
          src="/TheGallery1.png"
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
        <h1>The Galleries at The G Studios</h1>
        <p>
          The Galleries at The G Studios offer alternative art spaces
          accommodating a broad range of contemporary art forms by innovative
          artists, musicians and curators. The G Studio's purpose sets it apart
          from other organizations by not exclusively focusing on visual art. In
          this way, The G Studios is a multi-purpose forum allowing development
          and presentation of contemporary arts for the general public, youth,
          students and seasoned arts professionals. The Galleries at The G
          Studios are a welcome haven for open and flexible approaches to all
          the arts, embracing both local and global initiatives. The galleries
          are open to everyone to meet and exchange ideas that are socially and
          culturally transformative.
        </p>
        <h1 style={{ marginTop: "52px" }}>The Main Gallery</h1>
        <div style={{ width: "75%", margin: "0px auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/TheGalleryContent1.png"
              alt="Example"
              style={{
                flex: "0 0 200px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div
              style={{
                flex: "1 1 300px",
                minWidth: "200px",
              }}
            >
              <p>
                Not just any gallery, The Main Gallery is a welcoming space for
                events, performances, and classes.
              </p>
              <p>
                If you would like to use the Gallery to hold private classes or
                lessons or if you would like to propose a show, event, or
                performance then contact us{" "}
                <Link
                  href="/ContactUsSubmitWork"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  here
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "52px" }}>The Hallway Gallery</h1>
        <div style={{ width: "75%", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/TheGalleryContent2.png"
              alt="Example"
              style={{
                flex: "0 0 200px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div
              style={{
                flex: "1 1 300px",
                minWidth: "200px",
              }}
            >
              <p>
                The Hallway Gallery is an extension of The Main Gallery,
                allowing greater room for the displaying of 2D work.
              </p>
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "52px" }}>The Courtyard Sculpture Garden</h1>
        <div style={{ width: "75%", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/TheGalleryContent3.png"
              alt="Example"
              style={{
                flex: "0 0 200px",
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div
              style={{
                flex: "1 1 300px",
                minWidth: "200px",
              }}
            >
              <p>
                The Courtyard Sculpture Garden is an excellent space for outdoor
                sculpture, collaborative projects, performances, and parties.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
