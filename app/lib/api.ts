const API = process.env.NEXT_PUBLIC_API_URL;

export async function submitContact(data: any) {
  const response = await fetch(`${API}/api/v1/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }

  return response.json();
}

export async function subscribeNewsletter(data: any) {
  const response = await fetch(`${API}/api/v1/newsletter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to subscribe to newsletter");
  }

  return response.json();
}
