import "../style/UserCard.css";

function OtherData({ address, close, update }) {
  return (
    <div
      onMouseLeave={close}
      className="blackFrame otherData animate__animated animate__fadeIn"
    >
      street:{" "}
      <input
        type="text"
        value={address.street}
        onChange={(e) => update({ ...address, street: e.target.value })}
      />
      <br></br>
      city:{" "}
      <input
        type="text"
        value={address.city}
        onChange={(e) => update({ ...address, city: e.target.value })}
      />
      <br></br>
      zip code:
      <input
        type="text"
        value={address.zipcode}
        onChange={(e) => update({ ...address, zipcode: e.target.value })}
      />
    </div>
  );
}

export default OtherData;
