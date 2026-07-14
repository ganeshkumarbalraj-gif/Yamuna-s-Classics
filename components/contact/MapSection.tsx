export default function MapSection() {
  return (
    <div className="overflow-hidden rounded-2xl shadow">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6238171761356!2d80.26158107454692!3d12.995895714346267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e3a2215cf7%3A0x4f227b8f416b6129!2sYamuna&#39;s%20Classics!5e0!3m2!1sen!2sin!4v1783539758376!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}