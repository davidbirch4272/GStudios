import Link from "next/link";
import NextImage from "next/image";

export default function Sidebar() {
  return (
    <div style={{ width: "200px", background: "#eee", padding: "20px" }}>
     <Link href="/"><NextImage src="/logo.png" alt="Logo" width={150} height={150} /></Link> 

      <hr style={{ border: "1px solid #ccc", margin: "10px 0" }} />

      <nav style={{ marginTop: "20px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link href="/">Welcome to the G Studio</Link></li>   
          <li><Link href="/NewsEvents">News & Events</Link></li>
          <li><Link href="/Gallery">Gallery</Link></li>
          <li><Link href="/ResidentArtists">Resident Artists</Link></li>  
          <li><Link href="/GiovanisStory">Giovani's Story</Link></li>  
          <li><Link href="/GuestArtists">Guest Artists</Link></li>
          <li><Link href="/StudioSpace">Studio Space</Link></li>
          <li><Link href="/TheGApartment">The G Apartment</Link></li>
          <li><Link href="/PastEvents">Past Events</Link></li>
          <li><Link href="/EntesBeings">Entes Beings</Link></li>
          <li><Link href="/Entes">Entes</Link></li>
          <li><Link href="/ContactUsSubmitWork">Contact Us/Submit</Link></li>
          {/*<li><Link href="mailto:someone@example.com">Email</Link></li>*/}
        </ul>
      </nav>
    </div>
  );
}
