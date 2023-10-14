import React from 'react';

const styles = {
  profileCardWrap: {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px 45px 39px',
    backgroundColor: '#fff',
    width: '13%',
    borderRadius: '15px',
    margin: '100px 53px 100px 36px',
  },
  profileCard: {
    /* Add any additional styles for the profile card here */
  },
  image: {
    width: "270px"
  },
  text: {
    fontWeight: 400,
    fontSize: '28px',
    lineHeight: '33px',
    textAlign: 'center',
    margin: '35px 0px',
  },
};

function Component({ text, onClick, image }) {
  return (
    <div style={styles.profileCardWrap} onClick={onClick}>
      <div style={styles.profileCard}>
        <img src={image} alt="No image" style={styles.image} height={200} />
        <h4 style={styles.text}>{text}</h4>
      </div>
    </div>
  );
}

export default Component;
