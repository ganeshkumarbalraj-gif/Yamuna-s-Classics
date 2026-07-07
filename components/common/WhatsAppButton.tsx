interface WhatsAppButtonProps {
  subject?: string;
}

export default function WhatsAppButton({
  subject = "Yamuna's Classics",
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
      className="inline-flex items-center rounded-xl bg-green-600 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-green-700"
    >
      💬 Enquire on WhatsApp
    </a>
  );
}