import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function openWhatsApp(message, specialty = "Geral") {
	const phoneNumber = '554599584096';
	if (!message) {
		message = 'Olá! Gostaria de agendar um atendimento de fisioterapia home care com a Débora Pietraczk. Qual é a melhor forma de agendar?';
	}

	

  	// 🔴 Evento de conversão
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push({
		event: 'whatsapp_click',
		channel: 'site',
		phone: phoneNumber,
    	specialty: specialty,
	});
	
	const url = `https://wa.me/${phoneNumber}?&text=${encodeURIComponent(message)}`;
	window.open(url, '_blank');
}