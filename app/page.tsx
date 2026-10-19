"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Member = {
  memberId: string;
  NAME?: string;
  VILLAGE?: string;
  ROLE?: string;
};

export default function Home() {
  const [members, setMembers] = useState<Member[]>([]);
  const [showMembers, setShowMembers] = useState(false);

  // 🙏 Darshan Registration
  const [darshanBookings, setDarshanBookings] = useState<any[]>([]);
  const [showDarshan, setShowDarshan] = useState(false);

  // 👥 Committee Members
  useEffect(() => {
  fetch(
    "https://script.google.com/macros/s/AKfycbyQhGTrFjTjoqXPPC36PoiricgnU-nVAM0s2LqiP_zI68qlN9C9V22greZtHpCgCJB_/exec"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("Darshan Bookings:", data);
      setDarshanBookings(data);
    })
    .catch((error) => {
      console.error("Darshan API Error:", error);
    });
}, []);

  // 🙏 Darshan Bookings
  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbw3etwpAnDK63WrI6Z-uZZy-H6Z6ph-9RIZzDnfClAocoeFVLx06XK4L4Ho_-umLniZ/exec"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Darshan Bookings:", data);
        setDarshanBookings(data);
      })
      .catch((error) => {
        console.error("Darshan API Error:", error);
      });
  }, []);

  return (
    <>
      {/* ================= NAVIGATION ================= */}

      <nav>
     <h2>🛕 శ్రీ నాగవరపు ఎల్లమ్మ తల్లి 🛕</h2>

    <div>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#timings">Timings</a>
    <a href="#seva">Seva</a>
    <a href="#committee">కమిటీ సభ్యులు</a>
    <a href="#darshan">దర్శనం</a>
    <a href="#gallery">Gallery</a>
    <a href="#contact">Contact</a>
   </div>
  </nav>


      {/* ================= HOME ================= */}

      <section id="home">

        <div className="hero-content">

          <h1>
            శ్రీ నాగవరపు ఎల్లమ్మ తల్లి ఆలయం
          </h1>

          <h2>
            🕉️Sri Nagavarapu Yellamma Thalli Temple
          </h2>

          <p>
            🔱అమ్మవారి ఆశీస్సులు అందరికీ లభించాలి 🙏
          </p>

          {/* BUTTONS */}

          <div className="hero-buttons">

            <a href="#timings">
              దర్శన సమయాలు
            </a>

            <a href="#seva">
              సేవా వివరాలు
            </a>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about">

        <h2>🛕ఆలయం గురించి</h2>

        <p>
          శ్రీ నాగవరపు ఎల్లమ్మ తల్లి ఆలయానికి సంబంధించిన
          చరిత్ర, పూజా కార్యక్రమాలు, ఉత్సవాలు మరియు
          ఇతర ముఖ్యమైన వివరాలను భక్తులకు అందించడానికి
          ఈ వెబ్‌సైట్ రూపొందించబడింది.
        </p>

      </section>


      {/* ================= TIMINGS ================= */}

      <section id="timings">

        <h2>🔱దర్శన సమయాలు🔱</h2>

        <div>
          <h3>🌅 ఉదయం</h3>
          <p>6:00 AM - 12:00 PM</p>
        </div>

        <div>
          <h3>🌆 సాయంత్రం</h3>
          <p>4:00 PM - 8:00 PM</p>
        </div>

      </section>


      {/* ================= SEVA ================= */}

      <section id="seva">

        <h2>🕉️పూజలు మరియు సేవలు🪷</h2>

        <div>
          <h3>🙏 కుంకుమార్చన🌺</h3>
          <p>
            అమ్మవారికి ప్రత్యేక కుంకుమార్చన సేవ.
          </p>
        </div>

        <div>
          <h3>🪔 అభిషేకం🌺</h3>
          <p>
            అమ్మవారికి ప్రత్యేక అభిషేక పూజ.
          </p>
        </div>

        <div>
          <h3>🌺 ప్రత్యేక పూజలు🥥</h3>
          <p>
            ప్రత్యేక రోజుల్లో నిర్వహించే పూజా కార్యక్రమాలు.
          </p>
        </div>
        <div>
          <h3>🌺ఎల్లమ్మ జాతర</h3>
          <p>
            ప్రత్యేక రోజుల్లో నిర్వహించే అమ్మవారి జాతర మరియు ఉత్సవ కార్యక్రమాలు..
          </p>
        </div>
        <div>
        <h3>🔱దసరా ఉత్సవాలు🔱</h3>
        <p>
          దసరా పర్వదినాన్ని పురస్కరించుకుని
          శ్రీ ఎల్లమ్మ తల్లి ఆలయంలో ప్రత్యేక పూజలు,
          అలంకరణ మరియు భక్తి కార్యక్రమాలు నిర్వహించబడతాయి.
        </p>
      </div>


      </section>

       
      {/* ================= COMMITTEE ================= */}


{/* ========================= */}
{/* COMMITTEE MEMBERS */}
{/* ========================= */}

<section id="register">

  <h2>🪪ఆలయ కమిటీలో చేరండి🪪</h2>

  <p>
    ఆలయ కమిటీ సభ్యుడిగా నమోదు చేసుకోవడానికి
    క్రింది ఫారమ్‌ను పూర్తి చేయండి.✍️✍️
  </p>

  <a
    className="register-button"
    href="https://docs.google.com/forms/d/e/1FAIpQLSe1y_8IL4AwcGJHh3-0y4amllXnTQECn7abE25SMARRGPIOLA/viewform?usp=dialog"
    target="_blank"
    rel="noopener noreferrer"
  >

    కమిటీ సభ్యుడిగా నమోదు చేసుకోండి
  </a>

</section>


<section id="committee">

  <h2>👥ఆలయ కమిటీ సభ్యులు👥</h2>

  <p>
    ఆలయ కమిటీ సభ్యుల🙋🙋🙋 వివరాలను చూడడానికి క్రింది బటన్‌పై క్లిక్ చేయండి.
  </p>

  <button
    className="committee-button"
    onClick={() => setShowMembers(!showMembers)}
  >
    {showMembers
      ? "సభ్యుల వివరాలు దాచు"
      : "కమిటీ సభ్యుల వివరాలు చూడండి"}
  </button>


  {/* MEMBER DETAILS */}

  {showMembers && (

    <div className="committee-container">

      {members.length === 0 ? (

        <p>
          సభ్యుల వివరాలు లోడ్ అవుతున్నాయి...🙋🙋🙋
        </p>

      ) : (

        members.map((member: any, index: number) => (

          <div
            className="member-card"
            key={index}
          >

            <div className="member-icon">
              🛕
            </div>

            <h3>
              🪪ఆలయ కమిటీ సభ్యుడు
            </h3>

            <p>
              <strong>పేరు:</strong>{" "}
              {member.NAME || "వివరాలు లేవు"}
            </p>

            <p>
              <strong>గ్రామం:</strong>{" "}
              {member.VILLAGE || "వివరాలు లేవు"}
            </p>

            <p>
              <strong>బాధ్యత:</strong>{" "}
              {member.ROLE || "కమిటీ సభ్యుడు"}
            </p>

            <div className="member-id">
              PPD-{String(index + 1).padStart(3, "0")}
            </div>

          </div>

        ))

      )}

    </div>

  )}

</section>



{/* ================= DARSHAN ================= */}

<section id="darshan">

  <h2>🙏 దర్శనం నమోదు చేసుకున్న భక్తులు 🙏</h2>

  <p>
    దర్శనం కోసం నమోదు చేసుకున్న భక్తుల వివరాలను చూడడానికి
    క్రింది బటన్‌పై క్లిక్ చేయండి.
  </p>

 <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfz46x701oarejANH_p3BFxbxq9t4muze3KKZuOU2HCqpMqMA/viewform?usp=publish-editor"
  target="_blank"
  rel="noopener noreferrer"
  className="register-button"
>
  🙏 దర్శనం నమోదు చేసుకోండి
</a>

  <button
    className="committee-button"
    onClick={() => setShowDarshan(!showDarshan)}
  >
    {showDarshan
      ? "దర్శనం వివరాలు దాచు"
      : "🙏 దర్శనం వివరాలు చూడండి"}
  </button>

  {showDarshan && (
    <div className="committee-container">

      {darshanBookings.length === 0 ? (

        <p>
          దర్శనం వివరాలు లోడ్ అవుతున్నాయి... 🙏
        </p>

      ) : (

        darshanBookings.map((booking, index) => (

          <div
            className="member-card"
            key={index}
          >

            <div className="member-icon">
              🙏
            </div>

            <h3>
              దర్శనం నమోదు
            </h3>

            <p>
              <strong>భక్తుని పేరు:</strong>{" "}
              {booking.name || "వివరాలు లేవు"}
            </p>

            <p>
              <strong>దర్శనం తేదీ:</strong>{" "}
              {booking.date || "వివరాలు లేవు"}
            </p>

            <p>
              <strong>దర్శనం సమయం:</strong>{" "}
              {booking.time || "వివరాలు లేవు"}
            </p>

            <p>
              <strong>వ్యక్తులు:</strong>{" "}
              {booking.persons || "వివరాలు లేవు"}
            </p>

            <div className="member-id">
              DAR-{String(index + 1).padStart(3, "0")}
            </div>

          </div>

        ))

      )}

    </div>
  )}

</section>

{/* ========================= */}
{/* REGISTER */}
{/* ========================= */}

{/* <section id="register">

  <h2>🪪ఆలయ కమిటీలో చేరండి🪪</h2>

  <p>
    ఆలయ కమిటీ సభ్యుడిగా నమోదు చేసుకోవడానికి
    క్రింది ఫారమ్‌ను పూర్తి చేయండి.✍️✍️
  </p>

  <a
    className="register-button"
    href="https://docs.google.com/forms/d/e/1FAIpQLSe1y_8IL4AwcGJHh3-0y4amllXnTQECn7abE25SMARRGPIOLA/viewform?usp=dialog"
    target="_blank"
    rel="noopener noreferrer"
  >

    కమిటీ సభ్యుడిగా నమోదు చేసుకోండి
  </a>

</section> */}


      {/* ================= GALLERY ================= */}

      <section id="gallery">

        <h2>ఆలయ చిత్రాలు</h2>

        <div className="gallery-container">

          <Image
            src="/temple.jpg"
            alt="శ్రీ నాగవరపు ఎల్లమ్మ తల్లి ఆలయం"
            width={600}
            height={400}
          />

          <Image
            src="/flowers.jpg"
            alt="ఆలయ పుష్పాల అలంకరణ"
            width={600}
            height={400}
          />

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact">

        <h2>మమ్మల్ని సంప్రదించండి</h2>

        <div className="contact-container">

          {/* ADDRESS */}

          <div className="contact-card">

            <h3>📍 ఆలయ చిరునామా</h3>

            <p>
              గ్రామం: పొట్లపాడు
            </p>

            <p>
              మండలం: కురిచేడు
            </p>

            <p>
              జిల్లా: ప్రకాశం
            </p>

            <p>
              ఆంధ్రప్రదేశ్ - 523304
            </p>

          </div>


          {/* MAP */}

          <div className="map-card">

            <h3>📍 Google Maps</h3>

            <iframe
              src="https://www.google.com/maps?q=Potlapadu,+Kurichedu,+Prakasam,+Andhra+Pradesh+523304&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>


        {/* SOCIAL MEDIA */}

        <div className="social-links">

          <a
            href="https://www.instagram.com/nagavarapu_yallamatalli"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷 Instagram
          </a>

          <a
            href="https://chat.whatsapp.com/JRA1XzlOzfB2kMJpKwV1U1"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Group
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <h3>
          🛕 శ్రీ నాగవరపు ఎల్లమ్మ తల్లి ఆలయం
        </h3>

        <p>
          అమ్మవారి ఆశీస్సులు అందరికీ లభించాలి 🙏
        </p>

        <p>
          © 2026 Sri Nagavarapu Yellamma Thalli Temple
        </p>

      </footer>

    </>
  );
}