interface WhatsAppButtonProps {
  subject?: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function WhatsAppButton({
  subject = "Yamuna&apos;s Classics",
  message,
  className = "",
  children,
}: WhatsAppButtonProps) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

  const whatsappMessage = encodeURIComponent(
    message ??
      `Hello Yamuna&apos;s Classics! I'm interested in "${subject}". Please share more details.`
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-green-700 ${className}`}
    >
      {children ?? "💬 Enquire on WhatsApp"}
    </a>
  );
}