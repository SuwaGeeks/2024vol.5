import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Start.css";
import logo from './key.png';

const Start = () => {
  const [lab, setLab] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedLab = event.target.value;
    setLab(selectedLab);
    if (selectedLab === "ichikawa-lab") {
      navigate('/home');
    }
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Key Guardian" />
      </div>
      <div className="dropdown-container">
        <label htmlFor="dropdown">研究室を選択してください</label>
        <select id="dropdown" value={lab} onChange={handleSelectChange}>
          <option value="">研究室</option>
          <option value="ichikawa-lab">市川研究室</option>
          {/* 他の場所を追加するところ */}
        </select>
      </div>
      <p className="footer">
        ネットワークとの利用規約により 利用規約とプライバシーポリシーに同意したとみなされます
      </p>
    </div>
  );
}

export default Start;
