export async function shareCurrentPage() {
  if (navigator.share) {
    await navigator.share({
      title: document.title,
      url: window.location.href,
    });
  } else {
    await navigator.clipboard.writeText(
      window.location.href
    );

    alert("Link copied to clipboard.");
  }
}