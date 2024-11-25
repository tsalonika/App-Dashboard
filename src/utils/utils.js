import { jsPDF } from "jspdf";

export function formatNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "Invalid number";
  }

  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K";
  } else {
    return num.toString();
  }
}

export const ConvertPdf = (data) => {
  const doc = new jsPDF();

  doc.text(`Username: ${data.username}`, 10, 10);
  doc.text(`Full Name: ${data.full_name}`, 10, 20);
  doc.text(`Biography: ${data.biography}`, 10, 30);

  const imgUrl = data.profile_pic_url_hd; // This could be a URL or base64 string
  doc.addImage(imgUrl, "JPEG", 10, 40, 50, 50);

  doc.save("user_data.pdf");
};
