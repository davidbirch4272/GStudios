import NextImage from "next/image";

export default function GuestArtists() {
  return (
    <>
      <div style={{ padding: "24px 32px 20px 16px" }}>
        <header style={{ textAlign: "center", padding: 0 }}>
          <NextImage
            src="/GuestArtist1.png"
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
        <h1>Guest Artists</h1>

        <h2>James Williams</h2>
        <p className="talent">Musician</p>

        <h2>Rebecca Arnoldi</h2>
        <p className="talent">Painter</p>

        <h2>Gilad Barkan</h2>
        <p className="talent">Musician</p>

        <h2>Jennifer Bliss</h2>
        <p className="talent">Musician and Performance Artist</p>

        <h2>Anna Borges</h2>
        <p className="talent">Singer, Guitarist</p>

        <h2>Sergio Bradao</h2>
        <p className="talent">Musician</p>

        <h2>Ann Marie Chomat</h2>
        <p className="talent">Photographer</p>

        <h2>Amy Clay</h2>
        <p className="talent">Painter & Sculptor</p>

        <h2>Kelechi Ekechi</h2>
        <p className="talent">Painter</p>

        <h2>Franklin Erder</h2>
        <p className="talent">Photographer</p>

        <h2>Matthew Hagel</h2>
        <p className="talent">Painter, Collage Artist</p>

        <h2>Mike Hastings</h2>
        <p className="talent">Singer, Songwriter</p>

        <h2>Johara and the Snake Productions</h2>
        <p className="talent">Belly-Dancing Performance Art</p>

        <h2>Kumi</h2>
        <p className="talent">Painter and Drawer</p>

        <h2>Anya Liannski</h2>
        <p className="talent">Jeweler</p>

        <h2>Sarah Meyers</h2>
        <p className="talent">Painter</p>

        <h2>Ari Neiditz</h2>
        <p className="talent">Photographer</p>

        <h2>Tarit Ono</h2>
        <p className="talent">Painter</p>

        <h2>Samba Lolo with Boubacar Diabate of Mali</h2>
        <p className="talent">Musicians</p>

        <h2>Amy Sanford</h2>
        <p className="talent">Painter</p>

        <h2>Rick Williams</h2>
        <p className="talent">Photographer</p>

        <h2>Joan Winslow</h2>
        <p className="talent">Painter and Collage Artist</p>
      </main>
    </>
  );
}
