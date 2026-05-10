export interface Service {
  id: number;
  name: string;
  duration: string;
  price: string | number;
  priceDisplay: string;
}

export const services: Service[] = [
  { id: 1, name: "Barba", duration: "30 min", price: 35, priceDisplay: "R$35" },
  { id: 2, name: "Corte + Progressiva", duration: "1h 40min", price: 100, priceDisplay: "R$100" },
  { id: 3, name: "Corte + Graxa", duration: "40 min", price: 50, priceDisplay: "R$50" },
  { id: 4, name: "Corte de cabelo + Barba", duration: "50 min", price: 60, priceDisplay: "R$60" },
  { id: 5, name: "Corte Infantil", duration: "30 min", price: 35, priceDisplay: "R$35" },
  { id: 6, name: "Corte Social", duration: "30 min", price: 35, priceDisplay: "R$35" },
  { id: 7, name: "Degradê", duration: "30 min", price: 35, priceDisplay: "R$35" },
  { id: 8, name: "Degradê + Pigmentação", duration: "40 min", price: 50, priceDisplay: "R$50" },
  { id: 9, name: "Luzes", duration: "2h", price: 150, priceDisplay: "R$150" },
  { id: 10, name: "Platinado", duration: "2h", price: 150, priceDisplay: "R$150" },
  { id: 11, name: "Acabamento do cabelo", duration: "10 min", price: 10, priceDisplay: "R$10" },
  { id: 12, name: "Corte + Bigode", duration: "40 min", price: 40, priceDisplay: "R$40" },
  { id: 13, name: "Plano Mensal", duration: "40 min", price: "CONSULTAR", priceDisplay: "CONSULTAR" },
];

export const WHATSAPP_NUMBER = "5561993594562";

export function getWhatsAppLink(serviceName: string): string {
  const message = encodeURIComponent(
    `Olá! Gostaria de agendar o serviço: *${serviceName}*. Poderia me informar a disponibilidade?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
