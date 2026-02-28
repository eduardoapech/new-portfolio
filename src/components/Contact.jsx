import React, { useMemo, useState } from 'react';
import { htmlString } from '../lib/i18n.js';
import { assetUrl } from '../lib/assetUrl.js';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact({ titleHtml, desc, labels, placeholders, personal, onRevealText }) {
  const [isSending, setIsSending] = useState(false);

  const mailIcon = '/assets/image/mail.png';
  const whatsappIcon = '/assets/image/whatsapp.png';

  const phoneDisplay = useMemo(() => personal.phone, [personal.phone]);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!WEB3FORMS_ACCESS_KEY) {
      alert('Configuração ausente: defina VITE_WEB3FORMS_ACCESS_KEY para enviar mensagens.');
      return;
    }

    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', `Contato via Portfólio - ${personal.name}`);
    formData.append('from_name', personal.name);

    setIsSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert(labels.alertSuccess);
        form.reset();
      } else {
        alert(labels.alertError + (data?.message ?? ''));
      }
    } catch {
      alert(labels.alertFallback);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contato" className="container section-padding">
      <div className="contact-wrapper reveal">
        <div className="contact-info">
          <h2 className="section-title" dangerouslySetInnerHTML={htmlString(titleHtml)} />
          <p>{desc}</p>

          <div className="contact-list" style={{ marginTop: 20 }}>
            <p>
              <img src={assetUrl(mailIcon)} height="20" width="20" alt="Email" /> {personal.email}
            </p>
            <p>
              <img src={assetUrl(whatsappIcon)} height="20" width="20" alt="WhatsApp" /> {phoneDisplay}
            </p>
          </div>
        </div>

        <form id="contactForm" className="contact-form" onSubmit={onSubmit}>
          <div className="input-group">
            <input type="text" name="nome" placeholder={placeholders.name} required />
            <input type="email" name="email" placeholder={placeholders.email} required />
          </div>
          <textarea name="mensagem" placeholder={placeholders.msg} rows="5" required />
          <button type="submit" className="btn btn-primary btn-full" disabled={isSending}>
            {isSending ? labels.btnSending : labels.btnSend}
          </button>
        </form>
      </div>
    </section>
  );
}
