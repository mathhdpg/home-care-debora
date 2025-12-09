import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function openWhatsApp(message) {
	const phoneNumber = '554599584096';
	if (!message) {
		message = 'Olá! Gostaria de agendar um atendimento de fisioterapia home care com a Débora Pietraczck. Qual é a melhor forma de agendar?';
	}
	const url = `https://wa.me/${phoneNumber}?&text=${encodeURIComponent(message)}`;
	window.open(url, '_blank');
}