interface EmailData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  const formattedBody = `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject || 'N/A'}
Message: ${data.message}
  `.trim();

  const payload = {
    body: formattedBody,
    name: "Rospand Global Techno Services Pvt.Ltd",
    subject: `New Lead: ${data.name} - ${data.subject || 'Inquiry'}`,
    to: 'rospandglobal27@gmail.com'
  };

  try {
    const endpoint = "https://send-mail-redirect-boostmysites.vercel.app/send-email";

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error("Email sending failed with status:", res.status);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
};
