interface WhatsAppButtonProps {
  productName: string;
}

export default function WhatsAppButton({
  productName,
}: WhatsAppButtonProps) {

  const phone = "91XXXXXXXXXX";

  const message = encodeURIComponent(
    `Hello! I'm interested in "${productName}". Please share more details.`
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700 transition"
    >
      Enquire on WhatsApp
    </a>
  );
}