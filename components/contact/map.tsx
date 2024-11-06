'use client'

export default function Map() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0446981988837!2d77.37559631508876!3d28.627160982418996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5214a1677c1%3A0xb7c95d3906c3e7a9!2sSector%2063A%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1647940434242!5m2!1sen!2sin"
      className="w-full h-full rounded-lg"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
} 