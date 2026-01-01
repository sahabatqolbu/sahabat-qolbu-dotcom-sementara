// Toggle mobile menu
const mobileBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

if (mobileBtn && mobileMenu) {
  mobileBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    mobileBtn.setAttribute("aria-expanded", String(isOpen));
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });
}

// WhatsApp CTA (satu arah, tidak perlu backend)
const waLink = document.getElementById("wa-link");
if (waLink) {
  waLink.addEventListener("click", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama")?.value.trim() || "";
    const wa = document.getElementById("wa")?.value.trim() || "";
    const pesan = document.getElementById("pesan")?.value.trim() || "";

    // ganti dengan nomor WA resmi, format internasional tanpa +
    const targetNumber = "628xxxxxxxxxx";

    let text = "Assalamu'alaikum, saya ingin konsultasi rencana umrah.\n\n";
    if (nama) text += `Nama: ${nama}\n`;
    if (wa) text += `No. WA: ${wa}\n`;
    if (pesan) text += `Rencana: ${pesan}\n`;

    const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(
      text
    )}`;
    window.open(url, "_blank");
  });
}

// Placeholder untuk detail paket (bila suatu saat mau dipakai)
document.querySelectorAll("[data-pkg-detail]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const pkg = btn.getAttribute("data-pkg-detail");
    // Di tahap awal, cukup arahkan ke form konsultasi
    const kontak = document.getElementById("kontak");
    if (kontak) {
      kontak.scrollIntoView({ behavior: "smooth" });
    }
  });
});
