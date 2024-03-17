import React, { useState } from 'react';
import './Modal.css'; // Путь к CSS-файлу, где хранятся стили модального окна

const Modal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    position: '',
    email: '',
    phone: '',
    consent: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Данные формы выводятся в консоль
    closeModal(); // Закрыть модальное окно после отправки формы
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={closeModal} className="close">&times;</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя фамилия"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="organization"
            placeholder="Название организации"
            value={formData.organization}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Должность"
            value={formData.position}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <label>
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleInputChange}
            />
            Я согласен на обработку моих персональных данных
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
