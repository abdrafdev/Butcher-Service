import whatsappIcon from '../assets/images/whatsapp-icon.png';

function WhatsAppButton() {
  return (
    <a href="https://wa.me/+923001234567" className="whatsapp-float">
      <img src={whatsappIcon} alt="WhatsApp" width="60" />
    </a>
  );
}

export default WhatsAppButton;