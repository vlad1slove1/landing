import type { FormInputs } from '@/components/pages/main/sections/form/Form';
import type { SubmitHandler } from 'react-hook-form';

const handleFormSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    const BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
        console.error('Telegram bot token or chat ID is not configured');
        return;
    }

    const message = `
    *⚠️ Новая заявка от ${new Date().toLocaleDateString('ru-RU')}*:
    - *ФИО*: ${data.fullName}
    - *Компания*: ${data.company}
    - *Контакт*: +7${data.contact}
    - *Комментарий*: ${data.comment || '-'}
    `;

    try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        return response.ok;
    } catch (error) {
        console.error('Error sending message', error);
        return false;
    }
};

export default handleFormSubmit;
