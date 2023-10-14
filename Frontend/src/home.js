import React from "react";
import Component from "./Component";
import Navbar from "./components/Navbar";

const styles = {
  teamSection: {
    fontFamily: "Forum, cursive",
    padding: "30px",
    backgroundColor: "#dedbdb",
  },
  heading: {
    /* Add any heading styles here */
  },
  wrapSection: {
    display: "flex",
    justifyContent: "center",
  },
  component: {
    /* Component styles here */
  },
};

function Home() {

  const handleComponentClick = (text) => {
    // Handle the click event, e.g., by showing an alert with the text
    // alert(`Clicked on ${text}`);
    console.log(text);
  };

  const socialMediaImage = "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D&w=1000&q=80";

  const traceipImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTDHr6ynrFdMdb7eJY0_Znnn95_990Mh1LA&usqp=CAU";
  const heatmapImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAzqml-E-EGAiDKfaZJzx9go0OqEbhk108g&usqp=CAU";
  const urlImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX2VPATBlqHJOQQIJFbeJvW5elcV94Jb1rsQ&usqp=CAU";
  const personImage = 'https://assets.ccbp.in/frontend/react-js/profile-img.png';
  const pdfImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMsxqEYsuh5gggJl0PVv9rSTNNnTRKxusVw&usqp=CAU";
  const phoneImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMhjyChSfjcmguhV-qJSMtjIpm3ncwalTDg&usqp=CAU";

  return (
    <div style={styles.teamSection}>
      <div style={styles.heading}>
        <h1 style={{ margin: 0 }}>Features:</h1>
      </div>
        <Navbar />
      <div style={styles.wrapSection}>
        <Component
          text={"Social media hunting using image"}
          onClick={() => handleComponentClick("GG")}
          image={socialMediaImage}
        />
        <Component
          text={"Trace Single IP"}
          onClick={() => handleComponentClick("GG2")}
          image={traceipImage}
        />
        <Component
          text={"Heatmap"}
          onClick={() => handleComponentClick("GG3")}
          image={heatmapImage}
        />
        <Component
          text={"URL redirection checker"}
          onClick={() => handleComponentClick("GG4")}
          image={urlImage}
        />
      </div>
      <div style={styles.wrapSection}>
        <Component
          text={"PDF meta data analysis"}
          onClick={() => handleComponentClick("GG")}
          image={pdfImage}
        />
        <Component
          text={"URL lookup in webpages"}
          onClick={() => handleComponentClick("GG2")}
          image={urlImage}
        />
        <Component
          text={"Information Gathering using Name"}
          onClick={() => handleComponentClick("GG4")}
          image={personImage}
        />
        <Component
          text={"Phonenumber verifier"}
          onClick={() => handleComponentClick("GG3")}
          image={phoneImage}
        />
      </div>
    </div>
  );
}

export default Home;
