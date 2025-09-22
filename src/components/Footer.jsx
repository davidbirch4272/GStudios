import NextImage from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Footer() {
    
    const router = useRouter();

   const NavLink = ({ href, children }) => {
    const isActive = router.pathname === href;
    return (
      <Link
        href={href}
        style={{
          textDecoration: isActive ? "none" : "underline"
          }}
      >
        {children}
      </Link>
    );
  };
  return (
     <>
      <footer style={{ backgroundColor: "#ccc", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "8px" }}>
        <div style={{ flex: "1", padding: "16px 0", marginBottom: "8px", height: "180px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
           <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Link href="/">
                      <NextImage
                        src="/logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        priority
                        style={{
                          display: "flex",
                          alignItems: "center"
                     }}
                      />               
              </Link>
            </div>
            <div style={{ 
                width: "100%", 
                maxWidth: "50rem", 
                display: "flex", 
                flexWrap: "wrap", 
                justifyContent: "center", 
                gap: "1rem",
                margin: "1rem 3rem" }}>            
            <NavLink href="/">Welcome to the G Studio</NavLink>      
             <NavLink href="/OurMission">Our Mission</NavLink>    
             <NavLink href="/NewsEvents">News & Events</NavLink>    
             <NavLink href="/Gallery">Gallery</NavLink>    
             <NavLink href="/ResidentArtists">Resident Artists</NavLink> 
             <NavLink href="/GuestArtists">Guest Artists</NavLink>    
             <NavLink href="/StudioSpace">Studio Space</NavLink>    
             <NavLink href="/TheGApartment">The G Apartment</NavLink>    
             <NavLink href="/PastEvents">Past Events</NavLink>    
             <NavLink href="/EntesBeings">Entes Beings</NavLink>    
             <NavLink href="/Entes">Entes</NavLink>    
             <NavLink href="/ContactUsSubmitWork">Contact Us/Submit</NavLink>    
             <NavLink href="mailto:someone@example.com">Email</NavLink>   
            </div>
            <div style={{ textDecoration: "none", marginTop: "12px", color: "black" }}>
             Copyright &copy; 2025 TheGStudios. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
    







);
}
