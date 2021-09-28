import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../Store/Modules/User/actions";
import "./style.css";
function UserCard() {
  const dispath = useDispatch();
  const [newName, setNewName] = useState("");
  const name = useSelector((state) => state.user.name);
  const handleClick = () => {
    dispath(changeName(newName));
  };
  return (
    <>
      {console.log(name)}
      <h1>Nome: {name}</h1>
      <div>
        <input
          className="seach-input"
          placeholder="Digite seu nome"
          type="text"
          onChange={(e) => setNewName(e.target.value)}
        />
        <button className="seach-button" onClick={handleClick}>
          Enviar
        </button>
      </div>
    </>
  );
}
export default UserCard;
