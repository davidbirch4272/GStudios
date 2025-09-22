import NextImage from "next/image";

export default function OurMission() {
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
        <h1>Our Mission</h1>
          <div style={{ marginBottom: "12px" }}>
            <NextImage
              src="/MissionContent1.png"
              alt="Mission"
              width={500}
              height={150}
              style={{
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>

        <h1>Uniting Local Artists</h1>
        <p>
          The intention of The G Studios and Entes Beings is to provide a place
          for artists to produce and display their work. The G Studios does not
          limit its artist tenants to a specific medium; rather we aim to
          encourage the artist’s free-vision. In addition, we provide a place
          for visiting artists to display their work during open studio shows.
          The G Studios is a developing studio that is in the process of
          creating an environment where artists are able to share a common
          space. Naturally, we believe that communication between artists is of
          the utmost importance for artistic innovation and inspiration. Artists
          must be exposed to the work of other artists to help in developing and
          sharing techniques and have a common ground for artists to share. In
          turn, our hope is that the common space will be utilized for art,
          music performances, events, workshops, and community art classes.
        </p>
        <p>
          The G Studios is an establishment that prides itself on being open to
          new ideas in order to expand its artistic scope. We are comprised of
          hard working individuals who possess a vision for a community that
          values art as cultural necessity. Thereby providing the community with
          a resource where artistic culture may flourish and thrive.This is the
          home page content.
        </p>

        <h1>History of the Studios</h1>
        <p>
          In 2001, Giovani renovated and constructed what was a former
          laundering factory building. After much outside contribution and a
          vast amount of manual labor, the building is now home to the Humphreys
          Street Studios. Giovani’s goal has been to create affordable studio
          space for artists. Today, The G Studios provides seven studio spaces
          and shared art studios that are rented to aspiring artists. The
          artists participate in cooperative open studio shows as to display
          their work to the public. Outside artists are also invited and
          encouraged to submit artwork for public view. The ambition of The G
          Studios is to serve as a location that gives exposure to the talents
          of upcoming artists.
        </p>
        <p>
          The G Studios, part of Entes Beings Inc., is a purely artistic venture
          and is located in the ground level of the Humphreys Street Studios.
          Giovani Hoyos- Corrales is the president of this corporation. In
          addition to acting as president of Entes Beings, Inc. and managing The
          G Studios, he works as a sculptor in the manufacturing of gothic-
          style gargoyles.
        </p>
      </main>
    </>
  );
}
