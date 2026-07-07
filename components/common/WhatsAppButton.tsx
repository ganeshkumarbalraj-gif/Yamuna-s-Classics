interface WhatsAppButtonProps {
  subject: string;
}

export default function WhatsAppButton({
  subject,
}: WhatsAppButtonProps) {

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

const message = encodeURIComponent(
  `Hello! I'm interested in "${subject}". Please share more details.`
);

return (
  <a
    href={`https://wa.me/${phone}?text=${message}`}
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-xl bg-green-600 px-6 py-3 text-white rounded-lg"
  >
    Enquire on WhatsApp
  </a>
);
}