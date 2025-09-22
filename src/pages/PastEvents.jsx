import NextImage from "next/image";

export default function PastEvents() {
  return (
    <>
      <div style={{ padding: "24px 32px 20px 16px" }}>
        <header style={{ textAlign: "center", padding: 0 }}>
          <NextImage
            src="/PastEvents1.png"
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
        <h1>Past Events</h1>
        <h1>Latin Night at The G Studios</h1>
        <p style={{ marginBottom: "24px", paddingBottom: "0.1px" }}>
          We're starting off 2010 with a new bar, stage, and mission. We will be
          using our common area to host local and far-away bands! Last month we
          welcomed local Latin musicians to rock the house, and they sure did!
          Thanks to all who came and helped out! Thanks again for joining us
          Friday May 21st for live Latin music, drinks and food !! And many
          thanks to the Great Gian Carlo Bustaglia, Manuel Santos, and everyone
          else who contributed to the success! Thanks to Hannah Pitkin and
          Jessica Colon for their wonderful photography! And thanks to everyone
          who came!!
        </p>
        <div
          style={{
            paddingTop: "20px",
            margin: "32px auto",
          }}
        >
          <NextImage
            src="/PastEventsContent4.png"               
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <h1>2007 Open Studios</h1>
        <div style={{ margin: "32px 0" }}>
          <NextImage
            src="/PastEventsContent2.png"
            alt="Mission"
            width={500}
            height={150}
            style={{
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <h1 style={{ margin: "32px auto" }}>
          International Views of the World
        </h1>
        <div style={{ width: "75%", margin: "32px auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/PastEventsContent3.png"
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
                A celebration of international culture through art, cuisine,
                dance and music.
              </p>
            </div>
          </div>
        </div>
        <h1>Celebration Party May 2004</h1>
        <ul
          className="plain-list"
          style={{
            listStyle: "disc inside",
            margin: "0 auto 32px auto",
            padding: 0,
            width: "200px",
            textAlign: "left",
          }}
        >
          <li>Artist Exhibition</li>
          <li>Live Music Performance</li>
        </ul>
        <h1>Open Studios 2004</h1>
        <p style={{ textAlign: "center", marginBottom: "32px" }}>
          Featuring work from Tenants and outside Artists as well as Live
          Musical Performances.
        </p>
        <h1>Humphreys Street Open Studios 2003</h1>
        <ul
          className="plain-list"
          style={{
            listStyle: "disc inside",
            margin: "0 auto 32px auto",
            padding: 0,
            width: "202px",
            textAlign: "left",
          }}
        >
          <li>Artist Exhibition</li>
          <li>Live Music Performances</li>
          <li>Open Stage</li>
          <li>Belly Dancing</li>
        </ul>
      </main>
    </>
  );
}
