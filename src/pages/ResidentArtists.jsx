import NextImage from "next/image";
import Link from "next/link";

export default function ResidentArtists() {
  return (
    <>
      <div style={{ padding: "24px 32px 20px 16px" }}>
        <header style={{ textAlign: "center", padding: 0 }}>
          <NextImage
            src="/ResidentArtists2.png"
            alt="Resident Artist"
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
        <h1>Current Resident Artists</h1>
        <div style={{ width: "75%", margin: "32px auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <div
              style={{
                flex: "1 1 300px",
                minWidth: "200px",
              }}
            >
              <h1
                style={{
                  alignItems: "flex-start",
                  marginBottom: "44px",
                  height: "auto",
                }}
              >
                Giovani Hoyos-Corrales
              </h1>
              <p>
                In 2001, Giovani renovated and constructed what was a former
                laundering factory building. After much outside contribution and
                a vast amount of manual labor the building is now home to the
                Humphreys Street Studios. Giovani’s goal has been to create
                affordable studio space for artists.
              </p>
              <p>{" "}
                <Link
                  href="/GiovanisStory"
                  style={{ color: "blue", textDecoration: "underline" }}
                >
                  Giovani's Story
                </Link>
                </p>
            </div>

            <img
              src="/ResidentArtistsContent1.png"
              alt="Example"
              style={{
                flex: "0 0 200px",
                maxWidth: "100%",
                height: "auto",
                marginBottom: "32px"
              }}
            />
          </div>
        </div>

        <div style={{ width: "75%", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <img
              src="/ResidentArtistsContent2.png"
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
              <h1 style={{
                  textAlign: "center", 
                  marginTop: "0px",
                  marginBottom: "32px",
                }}>Hannah Carpenter Pitkin</h1>
              <p style={{ textAlign: "center" }}>Photography and Painting</p>
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "32px" }}>Past Resident Artists</h1>

        <h2>Hillary McLaughlin</h2>
        <p className="talent">Sculpture and Painting</p>

        <h2>Andreas Agiorgitis</h2>
        <p className="talent">Bookmaking and Design</p>

        <h2>Richard Clouden</h2>
        <p className="talent">Recording and Broadcast Studio</p>

        <h2>Aaron Cohen & Joseph Corbie</h2>
        <p className="talent">Recording and Music Production</p>

        <h2>Venus Morales & Uriel Rey Olivo</h2>
        <p className="talent">Cosmetic Art and Drawing</p>

        <h2>Nawar R. Naouri</h2>
        <p className="talent">Painting and Fashion Design</p>

        <h2>Alexandra Shaheen</h2>
        <p className="talent">GStudios Assistant painting and sculpture</p>

        <h2>Julie Bargeron</h2>
        <p className="talent">Painting</p>

        <h2>Boris Black</h2>
        <p className="talent">Photography</p>

        <h2>John Clark</h2>
        <p className="talent">Guitarist and Recording Artist</p>

        <h2>Victoria Clark</h2>
        <p className="talent">Painting, Mixed Media Sculpture and Collage</p>

        <h2>Monique Cousineau</h2>
        <p className="talent">Photography</p>

        <h2>Darci Dille</h2>
        <p className="talent">Sculpture and Collage</p>

        <h2>Katherine Ely</h2>
        <p className="talent">Jewelery</p>

        <h2>Elaine J. Fairweather</h2>
        <p className="talent">Painting</p>

        <h2>Mary Graham</h2>
        <p className="talent">Writing</p>

        <h2>Dan Harren</h2>
        <p className="talent">Painting</p>

        <h2>Lauren Hewitt</h2>
        <p className="talent">Painting, Mixed Media Sculpture and Collage</p>

        <h2>Michelle Hopkins</h2>
        <p className="talent">Photography and Web Design</p>

        <h2>Paula Jiun</h2>
        <p className="talent">Painting and Sculpture</p>

        <h2>Kevin Muller</h2>
        <p className="talent">Woodworking</p>

        <h2>Alexie J. Rodriguez</h2>
        <p className="talent">Design and Painting</p>

        <h2>Jacob E. Shin</h2>
        <p className="talent">Painting</p>
      </main>
    </>
  );
}
