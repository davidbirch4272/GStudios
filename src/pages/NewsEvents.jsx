import NextImage from "next/image";
import Link from "next/link";

export default function NewsEvents() {
  return (
    <>
         <div style={{  
             position: "relative",
             width:  "120%", 
             maxWidth: "500px", 
             aspectRatio: "20 / 11", 
             margin: "0 auto", 
             
           }}
             
             >       
               <NextImage
                 src="/NewsEvents1.png"
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
        <h1>News and Events!</h1>
        <p>
          The G Studios is a collective of artists with skills and interests
          that run the spectrum. We seek to meet and learn from new artists from
          all across the country, and world. We often have events involving
          music, resident artist showings, workshops, and anything else you
          could think up. Please check here frequently for updates on upcoming
          events and showings! The G Studios is currently looking for new
          contributing artists. If you would like to propose an idea for a show
          or participate in upcoming events, please submit your information{" "}
        <Link 
        href="/ContactUsSubmitWork"
        style={{ color: "blue", textDecoration: "underline" }}
        >
        here
        </Link>.
        </p>
        <h1>The G Studios Welcomes A New Studio Assistant</h1>
        <p>
          We have a new Studio Assistant! Hannah Pitkin, photographer and
          painter, is helping The G Studios on its continuous mission to improve
          and support Dorchester arts. Welcome !
        </p>
      </main>
    </>
  );
}
