import "../style/UserCard.css";

function OtherData({ address, close }) {
  return (
    <div onMouseLeave={close} className="blackFrame otherData">
      street: <input type="text" value={address.street} onChange={() => {}} />
      <br></br>
      city: <input type="text" value={address.city} onChange={() => {}} />
      <br></br>
      zip code:
      <input type="text" value={address.zipcode} onChange={() => {}} />
    </div>
  );
}

export default OtherData;
